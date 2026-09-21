Batch id: S2-B03 | Signal: 2 | Run id: 2026-W39

# Batch lane log — Signal 2 (leadership appointment)

**Run id:** `2026-W39`  
**Signal # (1–6):** `2` `[leadership-appointment]`  
**Batch id:** `S2-B03`  
**Review period:** 2026-09-15 through 2026-09-21 inclusive  
**Date rule:** Publication date of the appointment announcement (or effective date only if that is the sole dated field in the official release and it falls in-window). Conference speech dates are not appointment dates unless the speech is the first public disclosure.  
**Account rows in this batch:** Orange Business; Oscar Health; Phoenix Contact; Pierre Fabre Laboratories; RATP Dev; Schneider Electric; Sony Music Entertainment; Stellenbosch University; Toyota SA; TTEC; Viasat; Viasat Government; VON Canada; Wood Mackenzie; Woolworths

**Note:** Master SOP §7.2 HR / HR-tech trade-media sweep is pending on the orchestrator; this lane did not substitute for it.

**Watch items applied:** Pierre Fabre Nicolas Zombré PRNewswire 25 Aug 2026 is US dermocosmetics CEO, not people/L&D. Sony Music VP PX Greenhouse listings are vacancies, not appointments. Schneider Charise Le Heidrick items are conference teasers, not appointments (`Cross-signal: S1`).

---

## Part A′ — Verified entries (this signal × this batch only)

No qualifying `[leadership-appointment]` entry passed Signal 2 §8.1 verification and the master §4.1 commercial gate for this batch. In-window items were investor/strategy noise, job vacancies, capex/skills programme coverage, or incumbent leadership pages. Near-miss appointments were all dated before 15 Sep 2026 and/or were not learning, talent, OD, or HR-transformation remits.

---

## Part L — Execution log

### Orange Business

- **Families:** 1, 2, 3, 5, 6, 7.
- **Queries (full strings):**
  - `"Orange Business" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR "HR transformation" OR "organizational development") (appointed OR joins OR named OR "new role") September 2026`
  - `site:orange-business.com (appointed OR appointment OR named OR joins OR leadership) (HR OR talent OR learning OR "human resources") 2026`
  - **ISO `fr` §7.1a:** `"Orange Business" (nomination OR nommé OR nommée OR rejoint OR "prend la fonction") ("ressources humaines" OR talents OR formation OR DRH) septembre 2026`
  - `"Orange Business" "Head of Human Resources" OR "Employee Experience" OR "Marion Dubos" OR "Laurent Aufils" 2026`
- **URLs fetched:**
  - `https://www.orange-business.com/en/about-us/executive-committee` — **excluded.** Page lists Marion Dubos as Head of Human Resources and Employee Experience; no in-window appointment date. Laurent Aufils is no longer on this ExCom.
  - `https://www.orange-business.com/en/press/evolution-orange-business-services-leadership-team` — **excluded.** Dated **21 September 2022**; Laurent Aufils appointed Head of HR and Employee Experience then. Same calendar day, different year.
  - `https://www.orange-business.com/en/news-and-events/news/biggest-challenge-transformation-human-not-technical` — **excluded.** Dated **7 January 2026**; skills/upskilling programme narrative, not an appointment. **Cross-signal: S3, S5?**
  - `https://fr.linkedin.com/posts/laurent-aufils_breaking-news-after-4-rich-and-engaging-activity-7463597064204169217-zw7E` — **excluded.** Dated **22 May 2026**; Aufils leaving Orange Business HR for Orange Group Chief AI & Future of Work. Out of window; not a new people/L&D appointment on this row.
  - `https://fr.linkedin.com/posts/mariondubos_il-y-a-cinq-ans-je-rejoignais-orange-france-activity-7468626812542152704-bQ_l` — **excluded.** Dated **5 June 2026**; LinkedIn-only personal post about a new Orange Business chapter. Not a dated company appointment in-window. Unverified LinkedIn without company corroboration in-period.
- **Commercial gate:** Not scored for inclusion — Signal 2 §8.1 date/role tests failed.
- **Flags:** none.

### Oscar Health

- **Families:** 1, 2, 3, 4, 5.
- **Queries (full strings):**
  - `"Oscar Health" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR "Chief People Officer" OR CHRO) (appointed OR joins OR named) September 2026`
  - `site:hioscar.com OR site:ir.hioscar.com (appoints OR appointed OR "chief people" OR CHRO OR talent) September 2026`
  - `"Oscar Health" (press OR newsroom) (appoints OR appointed) 2026 ("September 15" OR "September 16" OR "September 17" OR "September 18" OR "September 21")`
  - `"Oscar Health" "Head of Talent" OR "Rebecca Krouse" OR "People Strategy" appointment 2026`
- **URLs fetched:**
  - `https://www.hioscar.com/about/team` — **RF-FETCH.** Interstitial (“You're about to visit {host}”); body not readable. Search snippets still name Rebecca Krouse as incumbent CPO.
  - `https://www.hioscar.com/about/team/rebecca-krouse` — **RF-FETCH.** Same interstitial. Snippets: Krouse is EVP CPO overseeing TA, people strategy, L&D; not a new appointment.
  - `https://www.hioscar.com/careers/8162815?gh_jid=8162815` — **RF-FETCH** on HTTP; search index published **2026-09-02** People Strategy Lead vacancy reporting to VP, People Strategy and HR. **Excluded:** vacancy, not appointment; published before window. **Cross-signal: S4**
  - `https://www.sec.gov/Archives/edgar/data/1568651/000156865126000074/oscr-20260916.htm` — **excluded.** Form 8-K **16 Sep 2026** Investor Day + FY2026 financial guidance; no workforce/HR appointment. Master §4.1 investor/strategy noise.
  - `https://ir.hioscar.com/news-events-presentations/events-presentations/event-details/2026/Oscar-Health-Inc-2026-Investor-Day-2026-ade-KsgKlc/default.aspx` — **excluded.** Event listing 16 Sep 2026; not an appointment.
- **Commercial gate:** Not scored for inclusion — no in-window people/L&D appointment.
- **Flags:** `RF-FETCH` (hioscar.com team/careers interstitial).

### Phoenix Contact

- **Families:** 1, 2, 3, 5, 6, 7.
- **Queries (full strings):**
  - `"Phoenix Contact" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR "HR transformation" OR Personal) (appointed OR joins OR named OR ernannt) September 2026`
  - `site:phoenixcontact.com (ernannt OR übernimmt OR Leitung OR appointed) (Personal OR Talent OR Lernen OR HR) 2026`
  - **ISO `de` §7.1a:** `"Phoenix Contact" (ernannt OR übernimmt OR "neue Leitung" OR Personalvorstand) (Personal OR Talent OR Weiterbildung OR Organisationsentwicklung) September 2026`
  - `"Cindy Benzing" OR "Cindy Benzig" Phoenix Contact (People OR Organization) 2026`
- **URLs fetched:**
  - `https://www.phoenixcontact.com/en-pc/company/phoenix-contact-group/executive-board-of-the-corporate-group` — **excluded.** Incumbent ExCom; Axel Wachholz (CFO since Jan 2018) still holds Corporate Human Relations. Stephan Volgmann CSO since **May 2026** is sales, not people/L&D.
  - `https://www.phoenixcontact.com/de-at/events-und-news/news/phoenix-contact-staerkt-seine-globale-vertriebsausrichtung-position-des-chief-sales-officer-innerhalb-der-geschaeftsfuehrung-etabliert` — **excluded.** Dated **5 May 2026**; CSO appointment, not HR/talent/learning.
  - `https://update.phoenixcontact.com/bildung-mit-auszeichnung/` — **excluded.** Dated **21 May 2026**; DIHK apprenticeship award. Quotes Cindy Benzing (People & Organization worldwide) and Boris Hagemeier (Young Talents). Not an appointment; out of window. **Cross-signal: S1** (Benzing attributed skills/training commentary — 7.1b not an appointment); **Cross-signal: S5?**
  - `https://assets.phoenixcontact.com/file/2b880a1b-d489-4a7d-807b-f3c96f404cff/media/original?5850_DIHK.pdf=` — **excluded.** Press PDF coded `(05/26)`; same award, same Benzing quote.
- **Commercial gate:** Not scored for inclusion — wrong function and/or date.
- **Flags:** none.

### Pierre Fabre Laboratories

- **Families:** 1, 2, 3, 5, 6, 7.
- **Queries (full strings):**
  - `"Pierre Fabre" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR CHRO OR "ressources humaines") (appointed OR joins OR named OR nomination) September 2026`
  - `"Pierre Fabre" "Nicolas Zombré" OR (nomination DRH OR "ressources humaines" OR talent) septembre 2026`
  - **ISO `fr` §7.1a:** `"Pierre Fabre" (nomination OR nommé OR nommée OR rejoint) ("ressources humaines" OR talents OR formation OR "apprentissage") septembre 2026`
  - `"Pierre Fabre" directeur talent OR DRH nomination 2026`
- **URLs fetched:**
  - `https://www.prnewswire.com/news-releases/laboratoires-pierre-fabre-appoints-nicolas-zombre-ceo-of-us-dermocosmetics-business-signaling-next-phase-of-growth-302859667.html` — **excluded (watch item).** **25 Aug 2026**; Nicolas Zombré appointed CEO of U.S. dermocosmetics operations. Commercial GM/CEO remit, **not people/L&D**. Outside window.
  - `https://www.linkedin.com/posts/pierre-fabre_with-continued-momentum-across-retail-medical-activity-7498070987314282496-DHN9` — **excluded.** Company LinkedIn **25 Aug 2026** repeating the same US CEO appointment.
  - `https://www.pierre-fabre.com/en-us/our-group/our-governance` — **excluded.** ExCom lists Maud Vimeux as CHRO; no in-window appointment announcement.
  - `https://fr.linkedin.com/posts/sebastientranchanthr_pierrefabre-wecaremovement-drh-activity-7479944226286415873-bu3i` — **excluded.** **6 Jul 2026** LinkedIn-only “DRH Business Unit Opérations”; out of window; BU operations HR, not verified company newsroom first disclosure.
- **Commercial gate:** Not scored for inclusion — Zombré fails §5 role scope; remaining items fail date and/or corroboration.
- **Flags:** none.

### RATP Dev

- **Families:** 1, 2, 3, 5, 6, 7.
- **Queries (full strings):**
  - `"RATP Dev" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR "Capital Humain" OR CHRO) (appointed OR joins OR named OR nomination) September 2026`
  - `site:ratpdev.com (nomination OR nommé OR appointed OR "ressources humaines" OR talent OR formation) 2026`
  - **ISO `fr` §7.1a:** `"RATP Dev" (nomination OR nommé OR nommée OR rejoint OR "prend la fonction") ("ressources humaines" OR talents OR formation OR "capital humain") septembre 2026`
  - `site:ratpdev.com Florence Yvan OR "human resources" appointed 2026`
- **URLs fetched:**
  - `https://www.ratpdev.com/fr/notre-gouvernance/` — **excluded.** Florence Yvan listed as Directrice Exécutive des Ressources Humaines; undated directory, not an in-window appointment.
  - `https://www.ratpdev.com/en/our-governance/` — **excluded.** Same ExCom in English (SVP Human Resources); no dated appointment.
  - `https://www.ratpdev.com/en/governance/stacy-winsett/` — **excluded.** US Chief People Officer bio; no in-window appointment date.
  - `https://fr.linkedin.com/posts/carole-martinez-69521a169_je-suis-ravie-de-vous-annoncer-que-depuis-activity-7420115406398484480-Of6Y` — **excluded.** **22 Jan 2026** LinkedIn; DRH BU France & Suisse effective 1 Jan 2026. Out of window; regional HR, LinkedIn-first.
- **Commercial gate:** Not scored for inclusion — no verified in-window appointment.
- **Flags:** none on fetched pages.

### Schneider Electric

- **Families:** 1, 2, 3, 4, 5, 6.
- **Queries (full strings):**
  - `"Schneider Electric" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR CHRO OR "Chief People Officer") (appointed OR joins OR named) September 2026`
  - `"Schneider Electric" ("Charise Le" OR Charise) OR (appointed CHRO OR "Head of Talent" OR CLO) September 2026`
  - **ISO `fr` §7.1a:** `"Schneider Electric" (nomination OR nommé OR nommée OR rejoint) ("ressources humaines" OR talents OR formation OR DRH) septembre 2026`
  - `site:se.com/ww/en/about-us/newsroom (appoints OR appointed OR nomination) (HR OR talent OR learning OR CHRO) September 2026`
  - `"Charise LE" Schneider (Heidrick OR UNLEASH OR conference OR interview) September 2026`
- **URLs fetched:**
  - `https://www.linkedin.com/posts/charisele_a-chro-caio-conversation-reinventing-work-activity-7502572541417299969-HXA2` — **excluded (watch item).** Dated **7 Sep 2026** (before window). Charise LE (CHRO since Apr 2020) teases a Heidrick conversation with CDO Peter Weckesser on AI reshaping jobs, leadership, skills. **Not an appointment.** **Cross-signal: S1** (not an appointment — 7.1b). Timing for S1 also fails this week’s date rule.
  - `https://www.linkedin.com/posts/heidrick-%26-struggles_ai-isnt-simply-changing-work-its-changing-activity-7500975909017985024-c52m` — **excluded.** Dated **2 Sep 2026**; same webinar teaser. **Cross-signal: S1** (not an appointment — 7.1b).
  - `https://hr.economictimes.indiatimes.com/news/industry/niharika-mohan-appointed-chief-human-resources-officer-at-schneider-electric/126375752` — **excluded.** Published **6 Jan 2026**; Greater India Zone CHRO effective 1 Jan 2026. Out of window.
  - `https://www.hrobserver.com/schneider-electric-appoints-niharika-mohan-as-the-chro-for-india/` — **excluded.** **16 Jan 2026** reprint of the same India-zone appointment.
  - `https://hrtoday.in/clementine-al-elimat-appointed-vice-president-hr-power-systems-at-schneider-electric/` — **excluded.** February 2026 VP HR Power Systems; out of window.
- **Commercial gate:** Not scored for Signal 2 inclusion — no new in-window appointment. Charise items fail §5 (not an appointment) and §6 (first publication 2/7 Sep, not 15–21 Sep).
- **Flags:** none on fetched URLs.

### Sony Music Entertainment

- **Families:** 1, 2, 3, 5.
- **Queries (full strings):**
  - `"Sony Music Entertainment" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR "People Experience" OR CHRO) (appointed OR joins OR named) September 2026`
  - `"Sony Music" Greenhouse "Vice President" "People Experience" OR "VP People" (appointed OR joining OR vacancy) 2026`
  - `site:sonymusic.com (appointed OR names OR joins) ("People Experience" OR CHRO OR talent OR learning) 2026`
  - `"Sony Music" "Andrew Davis" OR "People eXperience" appointment September 2026`
- **URLs fetched:**
  - `https://job-boards.greenhouse.io/sonymusicentertainment/jobs/8743612002` — **excluded (watch item).** Greenhouse board/job surface. Search index: VP, People eXperience, West Coast published **2026-08-26**. Fetch returned live openings including **VP, People eXperience, The Orchard** still listed under People Experience. **Vacancies, not appointments.** **Cross-signal: S4.** **RF-BLOCKED-ATS** for JS-heavy Greenhouse board (specific West Coast JD body not returned as a standalone article; listing/index sufficient to classify as vacancy).
  - `https://diversityjobs.com/career/18089693/Vice-President-People-Experience-West-Coast-California-Los-Angeles` — **excluded.** Mirror of the same West Coast PX vacancy, dated **26 Aug 2026**.
  - `https://www.sonymusic.com/inside-sony-music/hr-is-now-px-heres-why/` — **RF-FETCH.** Cloudflare block. Historical PX rename (Andrew Davis commentary), not a 2026-W39 appointment.
  - `https://www.sonymusic.com/sonymusic/constance-williams-named-senior-vice-president-and-head-of-human-resources-americas-sony-music-entertainment/` — **excluded via search.** **28 Aug 2018** Americas HR appointment.
  - `https://www.sonymusic.com/epic/ezekiel-lewis-chairman-ceo-epic-records/` — **excluded.** **30 Mar 2026** Epic Records CEO; not people/L&D.
- **Commercial gate:** Not scored for inclusion — vacancies / wrong date / wrong function.
- **Flags:** `RF-BLOCKED-ATS` (Greenhouse); `RF-FETCH` (sonymusic.com Cloudflare).

### Stellenbosch University

- **Families:** 1, 2, 3, 5, 6, 7.
- **Queries (full strings):**
  - `"Stellenbosch University" ("Chief Learning Officer" OR "Head of Talent" OR CHRO OR "human resources" OR "HR Director") (appointed OR joins OR named) September 2026`
  - `"Stellenbosch University" "Chief People Officer" (appointed OR names OR announces OR Koopman) September 2026`
  - **ISO `af` §7.1a:** `"Universiteit Stellenbosch" (aangestel OR benoem OR "Hoofmensebeampte" OR "menslike hulpbronne" OR CPO) September 2026`
  - `site:sun.ac.za OR site:su.ac.za (CPO OR "Chief People Officer" OR "menslike hulpbronne") 2026`
- **URLs fetched:**
  - `https://www.su.ac.za/af/personeel/menslike-hulpbronne` — **RF-FETCH.** Cloudflare challenge; Afrikaans HR service page, not a dated appointment.
  - `https://bebee.com/za/jobs/chief-people-officer-human-destiny-executive-search-and-recruitment-western-cape--techmap_za_4415214617` — **excluded.** CPO vacancy (applications closed **22 June 2026**); recruitment, not an appointment. **Cross-signal: S4**
  - `https://www.linkedin.com/posts/prof-nico-koopman-a4360260_so-tuesday-30-june-was-my-last-day-as-activity-7479919642749140992-_wlP` — **excluded.** Acting CPO from **1 Jul 2026** after DVC term ended; recruitment for permanent CPO underway. Out of window; LinkedIn-first.
- **Commercial gate:** Not scored for inclusion — vacancy/acting role outside window; no first public appointment 15–21 Sep.
- **Flags:** `RF-FETCH` (su.ac.za Cloudflare).

### Toyota SA

- **Families:** 1, 2, 3, 5, 6, 7.
- **Queries (full strings):**
  - `"Toyota SA" OR "Toyota South Africa" ("Chief Learning Officer" OR "Head of Talent" OR CHRO OR "human resources") (appointed OR joins OR named) September 2026`
  - **ISO `af` §7.1a:** `"Toyota Suid-Afrika" OR "Toyota SA" (aangestel OR benoem OR "menslike hulpbronne" OR talent OR leer) September 2026`
  - `site:toyota.co.za (appointed OR appointment OR "human resources" OR talent OR learning) 2026`
  - `"Toyota South Africa" "Abey Kgotle" OR "Vice President" Corporate Affairs 2026`
- **URLs fetched:**
  - `https://www.linkedin.com/posts/toyota-sa_toyotasouthafrica-leadership-corporateaffairs-activity-7498017533824954369-07-2` — **excluded.** Company LinkedIn **25 Aug 2026**; Abey Kgotle joins as **VP Corporate Affairs**, effective **1 Sep 2026**. Publication before window; remit is governance/policy/reputation, **not** people/L&D (prior HR experience is résumé, not the role).
  - `https://www.toyota.co.za/discover/news/toyota-south-africa-motors-marks-historic-r104-billion-investment-with-ninth-generation-hilux-line-off-ceremony` — **excluded.** JSON `published_at` **2026-07-16**. Capex/line-off plus skills/academy language from CEO Andrew Kirby. Not an appointment. **Cross-signal: S5**; **Cross-signal: S3?** (investment). Page is script-heavy; date recovered from embedded JSON.
- **Commercial gate:** Not scored for Signal 2 inclusion — wrong remit and/or date.
- **Flags:** none (Hilux page recovered via JSON despite JS shell).

### TTEC

- **Families:** 1, 2, 3, 5.
- **Queries (full strings):**
  - `TTEC ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR CHRO OR "Chief People Officer") (appointed OR joins OR named) September 2026`
  - `site:ttec.com (appointed OR appointment OR "chief people" OR "chief learning" OR CHRO) September 2026`
  - `"Julie Stone" OR "Laura Butler" TTEC (appointed OR named OR interview OR skills) September 2026`
  - `site:investors.ttec.com "TTEC" ("Chief People Officer" OR "Chief Learning Officer") 2026`
- **URLs fetched:**
  - `https://www.ttec.com/about-us/executive-team` — **RF-FETCH.** Cloudflare bot wall.
  - `https://www.ttec.com/newsroom/press-release/ttec-announces-laura-butler-chief-people-officer` — **RF-FETCH.** Cloudflare; search/index still dates CPO announcement **14 Jun 2023**.
  - `https://investors.ttec.com/corporate-governance/management` — **RF-FETCH.** HTTP timeout. Search snippets still list Laura Butler as CPO (returned 2023).
  - `https://www.ttec.com/newsroom/press-release/ttec-holdings-announces-leadership-transition-ttec-digital` — **excluded via search.** **23 Mar 2026** Chris Brown as President, TTEC Digital; not people/L&D.
- **Commercial gate:** Not scored for inclusion — incumbents (Butler 2023; Stone CLO since 2024 per LinkedIn/search) with no in-window appointment wire. Julie Stone / Laura Butler interviews found in search are not appointments; those podcast URLs were **not** opened this lane (out-of-window dates in snippets: May 2026 / 2025).
- **Flags:** `RF-FETCH` (ttec.com Cloudflare ×2; investors.ttec.com timeout).

### Viasat

- **Families:** 1, 2, 3, 5, 7.
- **Queries (full strings):**
  - `Viasat ("Chief Learning Officer" OR "Head of Talent" OR CHRO OR "Chief People Officer" OR "People Experience") (appointed OR joins OR named) September 2026`
  - `site:viasat.com (appointed OR names OR joins) ("Chief People" OR CHRO OR talent OR learning OR "People and Culture") 2026`
  - `"Rebecca Grattan" Viasat appointed OR "Chief People" September 2026`
  - `"Viasat" "Alana Lyon" OR "Anders Strothman" People September 2026`
- **URLs fetched:**
  - `https://www.viasat.com/news/latest-news/corporate/2026/viasat-appoints-shekar-ayyar-jinhy-yoon-board-directors-cooperation-carronade-capital/` — **excluded.** **7 May 2026** board directors; not people/L&D.
  - `https://investors.viasat.com/news-releases/news-release-details/viasat-announces-appointment-shekar-ayyar-and-jinhy-yoon-board` — **excluded.** Same 7 May 2026 board item.
  - `https://theorg.com/org/viasat-inc/org-chart/rebecca-grattan` — **excluded.** Directory: Rebecca Grattan Chief People & Culture Officer since Apr 2024; not an in-window appointment.
- **Commercial gate:** Not scored for inclusion. LinkedIn-only Alana Lyon “Leader Americas People Solutions” from **Aug 2026** was not company-corroborated and is before the window (unverified—excluded).
- **Flags:** none on fetched URLs. Shared `viasat.com` with Viasat Government; row-specific queries run.

### Viasat Government

- **Families:** 1, 2, 3, 5, 7.
- **Queries (full strings):**
  - `"Viasat Government" ("Chief People Officer" OR "People and Culture" OR CHRO OR Damion Moore) (appointed OR joins OR named) September 2026`
  - `site:viasat.com "Viasat Government" (appointment OR appointed OR named) ("People Operations" OR "People Strategy" OR talent OR learning OR HR) 2026`
  - `"Viasat Government" ("Chief Learning Officer" OR "Head of Talent" OR "HR transformation") (appointed OR joins OR named OR "new role") September 2026`
  - `"Anders Strothman" "Viasat Government" "People & Culture" 2026`
- **URLs fetched:**
  - `https://theorg.com/org/viasat-inc/teams/leadership-team-1` — **excluded.** Lists Damion Moore as CPO, Viasat Government; no in-window dated appointment.
  - `https://www.linkedin.com/in/damion-moore-249a818` — **excluded.** CPO Viasat Government since **Jul 2025**; LinkedIn profile only, not an in-window company announcement.
  - `https://www.linkedin.com/in/andersstrothman` — **excluded.** VP People & Culture, Viasat Government & Global Services from **Jul 2026**; LinkedIn-only, before this week, unverified without company newsroom. Unverified—excluded.
- **Commercial gate:** Not scored for inclusion — no company-dated in-window appointment for this row.
- **Flags:** none. Domain overlap with Viasat documented; queries used the exact row name.

### VON Canada

- **Families:** 1, 2, 3, 5.
- **Queries (full strings):**
  - `"VON Canada" ("Chief Learning Officer" OR "Head of Talent" OR CHRO OR "Chief People Officer" OR "human resources") (appointed OR joins OR named) September 2026`
  - `site:von.ca (appointed OR appointment OR "vice president" OR HR OR talent) September 2026`
  - `"VON Canada" "Wendy Steele" OR "Kimberly Byrne" appointment 2026`
  - `site:von.ca/en/news (appointed OR retirement OR "human resources") 2026`
- **URLs fetched:**
  - `https://www.von.ca/en/about-von/senior-leadership-team` — **excluded.** Wendy Steele listed as VP, Human Resources; undated directory.
  - `https://von.ca/en/about-von/senior-leadership-team/wendy-steele` — **excluded.** Bio: joined as VP HR in **2019**.
  - `https://www.von.ca/en/news/von-canada-president-and-ceo-jo-anne-poirier-announces-retirement-plans` — **excluded.** **15 Apr 2026** CEO retirement/search; not people/L&D appointment. **Cross-signal: S3?**
  - `https://www.von.ca/en/news/ceo-jo-anne-poirier-reflects-highlights-challenges` — **excluded.** **29 Jul 2026** CEO reflection; not an appointment.
- **Commercial gate:** Not scored for inclusion — incumbent VP HR; in-window news not found; CEO items wrong function/date.
- **Flags:** none.

### Wood Mackenzie

- **Families:** 1, 2, 3, 5.
- **Queries (full strings):**
  - `"Wood Mackenzie" ("Chief Learning Officer" OR "Head of Talent" OR CHRO OR "Chief People Officer") (appointed OR joins OR named) September 2026`
  - `site:woodmac.com (appointed OR appointment OR joins) (HR OR talent OR learning OR people) September 2026`
  - `site:woodmac.com/press-releases OR site:woodmac.com/about ("Human Resources" OR talent OR learning) 2026`
  - `"Wood Mackenzie" "Alex Reeves" OR "Eilish Henson" OR "Talent Development Partner" 2026`
- **URLs fetched:**
  - `https://www.woodmac.com/about/our-people/` — **excluded.** Leadership page lists Eilish Henson, EVP Head of Human Resources; Jenny Sadler quote is TA director branding, not an appointment. Simon Flowers “The Edge **10 September 2026**” is energy analysis, not HR.
  - `https://www.woodmac.com/profiles/people-profiles/eilish-henson/` — **excluded.** Incumbent people-strategy profile; no in-window appointment date.
  - `https://www.woodmac.com/press-releases/wood-mackenzie-appoints-new-chief-commercial-officer/` — **excluded.** Danny Dunn CCO **1 Dec 2025**; commercial, not people/L&D.
  - `https://www.linkedin.com/posts/jenny-sadler-24a8b69_talent-development-partner-activity-7500914989830938624-kvXm` — **excluded.** **2 Sep 2026** (before window) Talent Development Partner **vacancy** reporting to Alex Reeves. **Cross-signal: S4**
- **Commercial gate:** Not scored for inclusion — incumbents; Reeves VP Talent & OD is **May 2026** LinkedIn, out of window and unverified company wire.
- **Flags:** none.

### Woolworths

- **Families:** 1, 2, 3, 5, 6, 7. SA not AU.
- **Queries (full strings):**
  - `Woolworths ("South Africa" OR "SA") ("Chief Learning Officer" OR "Head of Talent" OR CHRO OR "Chief People Officer") (appointed OR joins OR named) September 2026`
  - **ISO `af` §7.1a:** `Woolworths ("Suid-Afrika" OR Holdings) (aangestel OR benoem OR "menslike hulpbronne" OR talent) September 2026 -Australia -"Woolworths Group"`
  - `site:woolworthsholdings.co.za ("Melanie Naidu" OR "Group People" OR appointed OR talent) September 2026`
  - `site:woolworths.co.za OR site:woolworthsholdings.co.za (appointment OR "human resources" OR "Group People Director") 2026`
- **URLs fetched:**
  - `https://www.woolworthsholdings.co.za/woolworths-announces-organisational-reset/` — **excluded.** Dated **23 Jun 2026**. Operating-model reset; People **remains** Group People Director Melanie Naidu. Not a new people/L&D appointment. **Cross-signal: S3**
  - `https://www.woolworthsholdings.co.za/directorate/directors/` — **excluded.** Melanie Naidu appointed Group People Director **6 May 2022**. Sam Ngumeni Group CEO June 2026 (prior HR & Transformation in résumé). Simphiwe Pato interim CMO July 2026 is marketing.
  - `https://www.woolworthsholdings.co.za/people/` — **excluded.** People-strategy boilerplate; no dated appointment.
  - `https://www.woolworthsholdings.co.za/wp-content/uploads/2026/09/Summary-of-the-Audited-Group-Results-for-the-52-weeks-ended-28-June-2026.pdf` — **excluded.** Dated Cape Town **1 Sep 2026** (before window). CEO succession only; no people/L&D appointment. Master §4.1 results update without new workforce-leader appointment.
- **Commercial gate:** Not scored for inclusion — people director unchanged; in-window results pack is financial/CEO, not Signal 2.
- **Flags:** none. Entity kept to Woolworths Holdings / woolworths.co.za (SA), not Woolworths Group AU.

### §7.1a local-language attempts (ISO 639-1 + full string)

| ISO | Account row | Full query string |
| --- | ----------- | ----------------- |
| `fr` | Orange Business | `"Orange Business" (nomination OR nommé OR nommée OR rejoint OR "prend la fonction") ("ressources humaines" OR talents OR formation OR DRH) septembre 2026` |
| `de` | Phoenix Contact | `"Phoenix Contact" (ernannt OR übernimmt OR "neue Leitung" OR Personalvorstand) (Personal OR Talent OR Weiterbildung OR Organisationsentwicklung) September 2026` |
| `fr` | Pierre Fabre Laboratories | `"Pierre Fabre" (nomination OR nommé OR nommée OR rejoint) ("ressources humaines" OR talents OR formation OR "apprentissage") septembre 2026` |
| `fr` | RATP Dev | `"RATP Dev" (nomination OR nommé OR nommée OR rejoint OR "prend la fonction") ("ressources humaines" OR talents OR formation OR "capital humain") septembre 2026` |
| `fr` | Schneider Electric | `"Schneider Electric" (nomination OR nommé OR nommée OR rejoint) ("ressources humaines" OR talents OR formation OR DRH) septembre 2026` |
| `af` | Stellenbosch University | `"Universiteit Stellenbosch" (aangestel OR benoem OR "Hoofmensebeampte" OR "menslike hulpbronne" OR CPO) September 2026` |
| `af` | Toyota SA | `"Toyota Suid-Afrika" OR "Toyota SA" (aangestel OR benoem OR "menslike hulpbronne" OR talent OR leer) September 2026` |
| `af` | Woolworths | `Woolworths ("Suid-Afrika" OR Holdings) (aangestel OR benoem OR "menslike hulpbronne" OR talent) September 2026 -Australia -"Woolworths Group"` |

### Cross-signal harvest (grep-friendly)

| Account | URL | Cross-signal |
| ------- | --- | ------------ |
| Orange Business | `https://www.orange-business.com/en/news-and-events/news/biggest-challenge-transformation-human-not-technical` | `S3, S5?` |
| Oscar Health | `https://www.hioscar.com/careers/8162815?gh_jid=8162815` | `S4` |
| Phoenix Contact | `https://update.phoenixcontact.com/bildung-mit-auszeichnung/` | `S1`, `S5?` |
| Schneider Electric | `https://www.linkedin.com/posts/charisele_a-chro-caio-conversation-reinventing-work-activity-7502572541417299969-HXA2` | `S1` |
| Schneider Electric | `https://www.linkedin.com/posts/heidrick-%26-struggles_ai-isnt-simply-changing-work-its-changing-activity-7500975909017985024-c52m` | `S1` |
| Sony Music Entertainment | `https://job-boards.greenhouse.io/sonymusicentertainment/jobs/8743612002` | `S4` |
| Stellenbosch University | `https://bebee.com/za/jobs/chief-people-officer-human-destiny-executive-search-and-recruitment-western-cape--techmap_za_4415214617` | `S4` |
| Toyota SA | `https://www.toyota.co.za/discover/news/toyota-south-africa-motors-marks-historic-r104-billion-investment-with-ninth-generation-hilux-line-off-ceremony` | `S5`, `S3?` |
| VON Canada | `https://www.von.ca/en/news/von-canada-president-and-ceo-jo-anne-poirier-announces-retirement-plans` | `S3?` |
| Wood Mackenzie | `https://www.linkedin.com/posts/jenny-sadler-24a8b69_talent-development-partner-activity-7500914989830938624-kvXm` | `S4` |
| Woolworths | `https://www.woolworthsholdings.co.za/woolworths-announces-organisational-reset/` | `S3` |

---

## Batch summary

- **Batch id:** `S2-B03`
- **Rows assigned:** 15 (all completed; families 1–3 plus extended 5–7 / §7.1a as required)
- **Rows with ≥1 Part A′ entry:** 0
- **Flags (count by type):**
  - `RF-FETCH`: 6 row-touches — Oscar Health (hioscar.com interstitial ×3 URLs); Stellenbosch University (su.ac.za Cloudflare); TTEC (ttec.com Cloudflare ×2 + investors.ttec.com timeout); Sony Music Entertainment (sonymusic.com Cloudflare)
  - `RF-BLOCKED-ATS`: 1 — Sony Music Greenhouse job board
  - `RF-PAYWALL`: 0
  - `RF-IDENTITY`: 0 (Viasat / Viasat Government queried separately on shared domain)
  - `RF-WAIVER`: 0
- **S1 hints:** Schneider Electric Charise LE / Heidrick teasers (mandatory 7.1b); Phoenix Contact Cindy Benzing apprenticeship quote (out of window).
- **Master §7.2 sweep:** pending orchestrator.

---

_File location:_ `runs/2026-W39/master-digest-log-2026-W39-s2-b03.md`
