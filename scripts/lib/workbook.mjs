// Zero-dependency reader for the account-context workbook (.xlsx = zip of XML).
import fs from "fs";
import zlib from "zlib";

function unzipEntries(buf) {
  let eocd = -1;
  for (let i = buf.length - 22; i >= Math.max(0, buf.length - 65557); i--) {
    if (buf.readUInt32LE(i) === 0x06054b50) {
      eocd = i;
      break;
    }
  }
  if (eocd < 0) throw new Error("workbook: not a zip file");
  const count = buf.readUInt16LE(eocd + 10);
  let p = buf.readUInt32LE(eocd + 16);
  const entries = new Map();
  for (let n = 0; n < count; n++) {
    if (buf.readUInt32LE(p) !== 0x02014b50) throw new Error("workbook: corrupt central directory");
    const method = buf.readUInt16LE(p + 10);
    const compSize = buf.readUInt32LE(p + 20);
    const nameLen = buf.readUInt16LE(p + 28);
    const extraLen = buf.readUInt16LE(p + 30);
    const commentLen = buf.readUInt16LE(p + 32);
    const localOffset = buf.readUInt32LE(p + 42);
    const name = buf.toString("utf8", p + 46, p + 46 + nameLen);
    const start = localOffset + 30 + buf.readUInt16LE(localOffset + 26) + buf.readUInt16LE(localOffset + 28);
    const raw = buf.subarray(start, start + compSize);
    entries.set(name, () => (method === 0 ? raw : method === 8 ? zlib.inflateRawSync(raw) : null));
    p += 46 + nameLen + extraLen + commentLen;
  }
  return entries;
}

function decodeXml(s) {
  return s
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&amp;/g, "&");
}

function textOf(fragment) {
  return [...fragment.matchAll(/<t(?:\s[^>]*)?>([\s\S]*?)<\/t>/g)].map((m) => decodeXml(m[1])).join("");
}

function colIndex(ref) {
  let n = 0;
  for (const ch of ref.replace(/\d+/g, "")) n = n * 26 + (ch.charCodeAt(0) - 64);
  return n - 1;
}

function readSheetRows(workbookPath, sheetName) {
  const entries = unzipEntries(fs.readFileSync(workbookPath));
  const read = (name) => {
    const data = entries.get(name)?.();
    if (!data) throw new Error(`workbook: cannot read ${name}`);
    return data.toString("utf8");
  };
  const sheetTag = [...read("xl/workbook.xml").matchAll(/<sheet\b[^>]*>/g)]
    .map((m) => m[0])
    .find((tag) => decodeXml((tag.match(/\bname="([^"]*)"/) || [])[1] || "") === sheetName);
  if (!sheetTag) throw new Error(`workbook: sheet "${sheetName}" not found`);
  const rid = (sheetTag.match(/\br:id="([^"]*)"/) || [])[1];
  const relTag = [...read("xl/_rels/workbook.xml.rels").matchAll(/<Relationship\b[^>]*>/g)]
    .map((m) => m[0])
    .find((t) => t.includes(`Id="${rid}"`));
  const target = (relTag.match(/\bTarget="([^"]*)"/) || [])[1];
  const sheetPath = target.startsWith("/") ? target.slice(1) : `xl/${target}`;
  const shared = entries.has("xl/sharedStrings.xml")
    ? [...read("xl/sharedStrings.xml").matchAll(/<si>([\s\S]*?)<\/si>/g)].map((m) => textOf(m[1]))
    : [];

  const rows = [];
  for (const rm of read(sheetPath).matchAll(/<row\b([^>]*)>([\s\S]*?)<\/row>/g)) {
    const cells = [];
    for (const cm of rm[2].matchAll(/<c\b([^>]*?)(?:\/>|>([\s\S]*?)<\/c>)/g)) {
      const ref = (cm[1].match(/\br="([A-Z]+\d+)"/) || [])[1];
      const type = (cm[1].match(/\bt="([^"]*)"/) || [])[1];
      const body = cm[2] || "";
      const v = (body.match(/<v>([\s\S]*?)<\/v>/) || [])[1];
      cells[colIndex(ref)] =
        type === "s" ? shared[Number(v)] ?? "" : type === "inlineStr" ? textOf(body) : v !== undefined ? decodeXml(v) : "";
    }
    rows.push({ rowNum: Number((rm[1].match(/\br="(\d+)"/) || [])[1]), cells });
  }
  return rows;
}

// Every row with a Company name is in scope.
export function loadPortfolio(workbookPath, sheetName = "Account Context") {
  const rows = readSheetRows(workbookPath, sheetName);
  const header = rows.find((r) => r.rowNum === 1)?.cells || [];
  const find = (re) => {
    const i = header.findIndex((h) => typeof h === "string" && re.test(h.trim()));
    if (i < 0) throw new Error(`workbook: column ${re} not found`);
    return i;
  };
  const col = { company: find(/^company name$/i), rep: find(/^rep[’']s name$/i) };
  return rows
    .filter((r) => r.rowNum > 1)
    .map((r) => ({ row: r.rowNum, company: (r.cells[col.company] || "").trim(), rep: (r.cells[col.rep] || "").trim() }))
    .filter((a) => a.company !== "");
}
