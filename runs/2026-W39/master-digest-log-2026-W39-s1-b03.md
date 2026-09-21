Batch id: S1-B03 | Signal: 1 | Run id: 2026-W39

# Batch lane log — Signal 1 (CHRO / senior people-leader statements)

**Run id:** `2026-W39`  
**Signal # (1–6):** `1` `[chro-statement]`  
**Batch id:** `S1-B03`  
**Review period:** 2026-09-15 through 2026-09-21 inclusive  
**Date rule:** Publication date of the piece, per `sops/sop-1-chro-statement.md` §6 (not event date inside the piece).  
**Account rows in this batch:** Orange Business; Oscar Health; Phoenix Contact; Pierre Fabre Laboratories; RATP Dev; Schneider Electric; Sony Music Entertainment; Stellenbosch University; Toyota SA; TTEC; Viasat; Viasat Government; VON Canada; Wood Mackenzie; Woolworths

**SOP:** `sops/sop-1-chro-statement.md`  
**Master commercial gate:** `sops/sop-master-digest.md` §4.1 (18/25+; Relevance ≥3; Specificity ≥3)  
**Master trade-media sweep (`sop-master-digest.md` §7.2):** pending on orchestrator; not executed in this Signal 1 batch lane. No **RF-WAIVER**.

**Atomic-row notes:** Viasat and Viasat Government share `viasat.com` — exact-name queries run per row; shared-domain newsroom treated as **RF-BATCH-RISK** (documented, not a waiver). Woolworths is the **South Africa** row (`woolworths.co.za` / Woolworths Holdings), not Woolworths Australia.

**W38 parent watch-outs applied (not recycled into Part A′):** Schneider Electric Charise Le Heidrick teaser **7 Sep 2026** (LinkedIn activity `7502572541417299969`) and related August/early-September registration posts are **out of window**; Clayton Mohamed Schneider Digital VP HR blog/podcast **3 Apr 2026** is out of window. Sony Music Greenhouse VP People eXperience listings are **vacancies, not statements**. TTEC Julie A. Stone CLO April 2026 CXO Dispatch feature is out of window (May 2026 Strategic HR Show / Skilled podcasts also out of window).

---

## Part A′ — Verified entries (this signal × this batch only)

_No qualifying `[chro-statement]` entries in this batch after §8.1 verification and the §4.1 commercial gate. Near-misses (wrong publication date, wrong speaker band, vacancy/employer-brand, graduate/early-career, or investor/strategy noise) are logged in Part L._

---

## Part L — Execution log

**§7.1a (mandatory local language) — ISO 639-1 + full query string:**

| Account row | ISO 639-1 | Full query string |
| ----------- | --------- | ----------------- |
| Orange Business | `fr` | `"Orange Business Services" OR "Orange Business" OR "Orange SA" DRH "direction des ressources humaines" compétences formation talents IA interview septembre 2026` |
| Phoenix Contact | `de` | `"Phoenix Contact" (Personal OR Personalvorstand OR Personalwesen) (Kompetenzen OR Weiterbildung OR Transformation OR Interview OR Pressemitteilung) September 2026` |
| Pierre Fabre Laboratories | `fr` | `"Laboratoires Pierre Fabre" (DRH OR "direction des ressources humaines" OR "directrice des ressources humaines") (compétences OR formation OR talents OR IA) interview septembre 2026` |
| RATP Dev | `fr` | `"RATP Dev" OR "RATP Développement" (DRH OR "direction des ressources humaines" OR "directrice des ressources humaines") (compétences OR formation OR talents) septembre 2026` |
| Schneider Electric | `fr` | `"Schneider Electric" (DRH OR "direction des ressources humaines" OR CSE OR PSE) (compétences OR formation OR talents OR interview) septembre 2026` |
| Stellenbosch University | `af` | `"Universiteit Stellenbosch" ("menslike hulpbronne" OR CHRO OR "direkteur menslike hulpbronne" OR talent OR vaardighede) onderhoud September 2026` |
| Toyota SA | `af` | `"Toyota Suid-Afrika" OR "Toyota South Africa Motors" ("menslike hulpbronne" OR talent OR vaardighede OR opleiding) onderhoud September 2026` |
| Woolworths | `af` | `"Woolworths" "Suid-Afrika" ("menslike hulpbronne" OR talent OR vaardighede OR opleiding) onderhoud September 2026` |

September local-date tokens used as required (`septembre` / `September`). No August (`août` / `August`) tokens in the mandatory §7.1a strings.

### Orange Business (`orange-business.com`)

**Families run:** 1–3, 4 (Marion Dubos; Laurent Aufils as predecessor), 5–7 + §7.1a **fr** (group/legal name)

**Queries (full strings):**
1. `"Orange Business" (CHRO OR "Chief People Officer" OR DRH OR "VP Human Resources") (skills OR upskilling OR workforce OR AI OR talent) September 2026`
2. `site:orange-business.com (DRH OR "human resources" OR talent OR workforce OR "Chief People") September 2026`
3. `"Orange Business" (interview OR podcast) (HR OR talent OR people OR DRH) September 2026`
4. `"Marion Dubos" "Orange Business" (interview OR podcast OR compétences OR IA OR talent) 2026`
5. (F5) `"Laurent Aufils" "Orange Business" (interview OR podcast OR skills OR compétences OR IA) 2026`
6. (F7) `"Orange Business Services" "Marion Dubos" OR "Chief People Officer"`
7. §7.1a **fr:** `"Orange Business Services" OR "Orange Business" OR "Orange SA" DRH "direction des ressources humaines" compétences formation talents IA interview septembre 2026`

| Account row | Families (1–7) | Queries (full strings) | URLs fetched | Outcome | Commercial gate score / reason | Cross-signal hint | Flags |
| ----------- | -------------- | ---------------------- | ------------ | ------- | ------------------------------ | ----------------- | ----- |
| Orange Business | 1–7, 7.1a fr | see list above | https://www.orange-business.com/en/about-us/executive-committee | excluded — fetched ExCom bio confirms **Marion Dubos, Head of Human Resources and Employee Experience**; undated leadership page, not a 15–21 Sep 2026 attributed §5 statement | excluded before scoring: identity page, not a dated statement | | |
| Orange Business | 4, 5 | named + retry | https://www.orange.com/en/our-news/building-skills-tomorrows-jobs | excluded — **published 20 April 2026**; quotes Vincent Lecerf (Group EVP HR) and Laurent Aufils as **Chief People Officer at Orange Business** on career transitions / skills. Aufils is now Group Chief AI & Future of Work (LinkedIn 22 May 2026). Out of window | excluded: §6 date (April) | S5 (Group skills program; Orange Group/SA rows) | |
| Orange Business | 3, 4 | podcast | https://joshbersin.com/podcast/laurent-aufiels-chief-people-officer-at-orange-business-ai-transformation-is-a-people-project/ | excluded — **Published May 28, 2026** (updated May 29); Aufils still titled CPO Orange Business on that episode; AI-as-people-project. OOW | excluded: §6 date (May) | S5, S6? for May AI/reskilling episode (outside window) | |
| Orange Business | 2, 5 | newsroom | https://www.orange-business.com/en/news-and-events/news/biggest-challenge-transformation-human-not-technical | excluded — **January 07, 2026**; people/skills culture copy; no new 15–21 Sep first-publication; no in-window Dubos quote | excluded: §6 date (January) | S3? | |
| Orange Business | 4 | LinkedIn extract | https://fr.linkedin.com/posts/mariondubos_il-y-a-cinq-ans-je-rejoignais-orange-france-activity-7468626812542152704-bQ_l | excluded — **2026-06-05** Dubos post on taking Orange Business HR responsibilities; appointment-adjacent, not 15–21 Sep | excluded: §6 date (June) | S2 (June role move; outside window) | |
| Orange Business | 4 | LinkedIn extract | https://fr.linkedin.com/posts/laurent-aufils_breaking-news-after-4-rich-and-engaging-activity-7463597064204169217-zw7E | excluded — **2026-05-22** Aufils leaving Orange Business DRH for Group AI & Future of Work | excluded: §6 date (May) | S2 | |
| Orange Business | 3 | §7.1a fr hit | https://podscan.fm/podcasts/besoin-de-rien-envie-dia-intelligence-artificielle-transformation-rh/episodes/ia-amp-competences-comment-orange-cartographie-les-competences-de-120-000-collaborateurs | excluded — Orange **Group** compétences/IA cartography podcast (directeur parcours professionnel / mobilité interne), not Orange Business CHRO/CPO Dubos, and no 15–21 Sep first-publication confirmed | excluded: wrong entity/speaker + date not in window | S5? (Orange Group skills mapping) | |

No in-window Dubos/Aufils first-published §5 statement. §7.1a **fr** executed with group/legal names. No S1 Part A′.

### Oscar Health (`hioscar.com`)

**Families run:** 1–3, 4 (Rebecca Krouse), 5, 7 (extended)

**Queries (full strings):**
1. `"Oscar Health" (CHRO OR "Chief People Officer" OR "Rebecca Krouse") (interview OR podcast OR talent OR workforce) September 2026`
2. `site:hioscar.com "Chief People" OR "human resources" OR talent September 2026`
3. `"Oscar Health" (interview OR podcast OR fireside) (HR OR talent OR people OR workforce) September 2026`
4. `"Rebecca Krouse" "Oscar Health" September 2026 interview`
5. (F5) `"Oscar Health" "Chief People Officer" after:2026-09-14 before:2026-09-22`
6. (F7) `"Oscar Health" (Investor Day OR Bertolini) people talent workforce September 2026`

| Account row | Families (1–7) | Queries (full strings) | URLs fetched | Outcome | Commercial gate score / reason | Cross-signal hint | Flags |
| ----------- | -------------- | ---------------------- | ------------ | ------- | ------------------------------ | ----------------- | ----- |
| Oscar Health | 4 | named | https://www.hioscar.com/about/team/rebecca-krouse | excluded — **RF-FETCH:** WebFetch returned Oscar interstitial “You're about to visit {host}…”; search extract still identifies Rebecca Krouse as EVP, Chief People Officer. Not a dated 15–21 Sep statement | excluded: interceptor page, not a dated §5 statement | | **RF-FETCH** |
| Oscar Health | 2 | ATS | http://www.hioscar.com/careers/8162815?gh_jid=8162815 | excluded — **RF-FETCH / RF-BLOCKED-ATS:** same interstitial; Greenhouse `job-boards.greenhouse.io/oscarhealth/jobs/8162815` **404**. Search extract: **People Strategy Lead**, **Published: 2026-09-02**, reports to VP People Strategy and HR — **vacancy**, and **before 15 Sep** | excluded: master §4.1 single generic posting + §6 date | **S4** | **RF-FETCH**, **RF-BLOCKED-ATS** |
| Oscar Health | 3, 7 | in-window media | https://www.cnbc.com/video/2026/09/18/watch-cnbcs-full-interview-with-oscar-health-ceo-mark-bertolini.html | excluded — **Fri, Sep 18 2026**; **CEO Mark Bertolini** on expanding coverage to 400–600 counties by 2029. Not CHRO/CPO/VP+ people leader | excluded: §5 speaker (CEO, not people leader); investor/strategy noise | | |
| Oscar Health | 7 | Investor Day | https://seekingalpha.com/article/4947222-oscar-health-inc-oscr-analyst-investor-day-transcript | excluded — **September 16, 2026** Analyst/Investor Day transcript; speakers Chris Potochar (IR), Bertolini, Blackley (CFO), Liang, Schlosser. **Krouse not on the dais**. Strategy/expansion, not people-leader §5 voice | excluded: master §4.1 investor/strategy noise without workforce-capability detail from a people leader | | |
| Oscar Health | 5 | Q1 recycle | https://www.stocktitan.net/news/OSCR/oscar-health-announces-strong-financial-results-for-first-quarter-9ima0aergmrw.html | excluded — Q1 2026 earnings; Bertolini “the workforce is shifting” is **consumer/gig-market** language, not a CPO statement; not first published this week | excluded: wrong speaker + old earnings + strategy noise | | |

No in-window Krouse statement. No S1 Part A′.

### Phoenix Contact (`phoenixcontact.com`)

**Families run:** 1–3, 4 (Cindy Benzing; Klaus Lütkemeier), 5–7 + §7.1a **de**

**Queries (full strings):**
1. `"Phoenix Contact" (CHRO OR "Cindy Benzing" OR Personalvorstand OR "Klaus Lütkemeier") (Interview OR Kompetenzen OR Weiterbildung) September 2026`
2. `site:phoenixcontact.com Personal OR HR OR "People & Organization" September 2026`
3. `"Phoenix Contact" (interview OR podcast OR fireside) (HR OR Personal OR talent) September 2026`
4. `"Cindy Benzing" "Phoenix Contact" (Interview OR KI OR Weiterbildung) 2026`
5. `"Ines Ludwig" "Phoenix Contact" Personalleiterin Interview 2026`
6. §7.1a **de:** `"Phoenix Contact" (Personal OR Personalvorstand OR Personalwesen) (Kompetenzen OR Weiterbildung OR Transformation OR Interview OR Pressemitteilung) September 2026`

| Account row | Families (1–7) | Queries (full strings) | URLs fetched | Outcome | Commercial gate score / reason | Cross-signal hint | Flags |
| ----------- | -------------- | ---------------------- | ------------ | ------- | ------------------------------ | ----------------- | ----- |
| Phoenix Contact | 2, 7 | ExCom | https://www.phoenixcontact.com/en-pc/company/phoenix-contact-group/executive-board-of-the-corporate-group | excluded — fetched board: **Axel Wachholz (CFO)** holds **Corporate Human Relations**; no dedicated Personalvorstand. Undated governance, not a 15–21 Sep statement | excluded: identity/governance page | | |
| Phoenix Contact | 4, 6 | named + de | https://update.phoenixcontact.com/bildung-mit-auszeichnung/ | excluded — **21. Mai 2026**; Cindy Benzing (People & Organization worldwide) quoted on IT-Ausbildung / KI-Zeitalter. **Ausbildung/early-career award**; also OOW | excluded: §6 date (May) + master §4.1 internships/graduate/apprenticeship-type | S5? (vocational IT training concept; outside window) | |
| Phoenix Contact | 6 | IHK | https://www.ihk-bildungspreis.de/nominierte/phoenix-contact-gmbh-co-kg/ | excluded — 2026 IHK Bildungspreis nomination page; no 15–21 Sep first-publication of a VP+ people-leader interview | excluded: award/employer-brand + no in-window dated quote | | |
| Phoenix Contact | 4 | local recap | https://blomberg-nachrichten.de/neues-it-ausbildungskonzept-von-phoenix-contact-ausgezeichnet/ | excluded — same May DIHK award; Benzing quote recycled; Ausbildung | excluded: date + early-career | | |
| Phoenix Contact | 4 | historic | https://www.handelsblatt.com/karriere/serie-was-personaler-fragen-warum-dieser-personalchef-neue-manager-nach-ihren-fehlentscheidungen-fragt/27523908.html | excluded — **17.08.2021** Klaus Lütkemeier hiring-interview feature | excluded: §6 date (2021) | | |

No in-window VP+ people statement. Named pass used Benzing + Lütkemeier. No S1 Part A′.

### Pierre Fabre Laboratories (`pierre-fabre.com`)

**Families run:** 1–3, 4 (Maud Vimeux), 5–7 + §7.1a **fr**

**Queries (full strings):**
1. `"Pierre Fabre" (CHRO OR "Maud Vimeux" OR DRH) (interview OR podcast OR compétences OR talents) septembre 2026`
2. `site:pierre-fabre.com (DRH OR "ressources humaines" OR talent OR compétences) septembre 2026`
3. `"Pierre Fabre" (interview OR podcast OR fireside) (HR OR DRH OR talent) September 2026`
4. `"Maud Vimeux" "Pierre Fabre" (interview OR compétences OR formation OR IA) 2026`
5. §7.1a **fr:** `"Laboratoires Pierre Fabre" (DRH OR "direction des ressources humaines" OR "directrice des ressources humaines") (compétences OR formation OR talents OR IA) interview septembre 2026`

| Account row | Families (1–7) | Queries (full strings) | URLs fetched | Outcome | Commercial gate score / reason | Cross-signal hint | Flags |
| ----------- | -------------- | ---------------------- | ------------ | ------- | ------------------------------ | ----------------- | ----- |
| Pierre Fabre Laboratories | 2, 7 | employer brand | https://www.pierre-fabre.com/fr-fr/nouvelle-marque-employeur-wecaremovement | excluded — **HTTP 404** on this path; search extract of sister URL `pierre-fabre.com/fr-fr/…` / careers quotes Maud Vimeux on We Care Movement (employer brand, 2024/2025 campaign) — not 15–21 Sep 2026 | excluded: fetch fail + employer-brand + date | | **RF-FETCH** (404) |
| Pierre Fabre Laboratories | 2 | careers | https://www.pierre-fabre.com/fr/nous-rejoindre | excluded — search-opened evergreen careers; Vimeux boilerplate “collaborateurs = richesse”; not a first-published 15–21 Sep interview | excluded: undated employer-brand | | |
| Pierre Fabre Laboratories | 4 | LinkedIn extract | https://fr.linkedin.com/posts/maud-vimeux_very-proud-to-see-the-3rd-edition-of-our-activity-7399731062186323968-AffT | excluded — **2025-11-27** Skill Week 3rd edition; L&D event recap, OOW | excluded: §6 date (Nov 2025) | S5 (Skill Week; outside window) | |
| Pierre Fabre Laboratories | 4 | LinkedIn extract | https://www.linkedin.com/posts/maud-vimeux_pierrefabre-leadership-culture-activity-7484863076257787905-VlBY | excluded — **2026-07-20** leadership-model post (60 leaders with Marie-Andrée Gamache); OOW | excluded: §6 date (July) | S3? | |
| Pierre Fabre Laboratories | 5 | vendor case | https://www.talenco.com/cas-clients-transformation-entreprise/laboratoires-pierre-fabre-strategie-intelligence-artificielle | excluded — TalenCo vendor case on IA / workforce-planning workshops; **no in-window publication date** and not a CHRO-attributed public interview this week | excluded: undated vendor content / no verified 15–21 Sep first-pub | S6? | |
| Pierre Fabre Laboratories | 5 | annual report | https://www.pierre-fabre.com/sites/default/files/2025-06/Rapport-annuel-2025-Pierre-Fabre-Fr.pdf | excluded — **June 2025** annual report lists Vimeux as DRH; IA comments in the extract are **Éric Ducournau / R&D**, not a Sep 2026 CHRO statement | excluded: filing date + wrong speaker on AI quotes | | |

No in-window Vimeux §5 statement. No S1 Part A′.

### RATP Dev (`ratpdev.com`)

**Families run:** 1–3, 4 (Florence Yvan; Carole Martinez), 5–7 + §7.1a **fr**

**Queries (full strings):**
1. `"RATP Dev" OR "RATP Développement" (DRH OR "Florence Yvan" OR "Carole Martinez") (compétences OR formation OR talents) septembre 2026`
2. `site:ratpdev.com (DRH OR "ressources humaines" OR talent OR Florence Yvan) 2026`
3. `"RATP Dev" (interview OR podcast OR fireside) (HR OR DRH OR talent) September 2026`
4. `"Florence Yvan" "RATP Dev" (interview OR compétences OR talents) 2026`
5. §7.1a **fr:** `"RATP Dev" OR "RATP Développement" (DRH OR "direction des ressources humaines" OR "directrice des ressources humaines") (compétences OR formation OR talents) septembre 2026`

| Account row | Families (1–7) | Queries (full strings) | URLs fetched | Outcome | Commercial gate score / reason | Cross-signal hint | Flags |
| ----------- | -------------- | ---------------------- | ------------ | ------- | ------------------------------ | ----------------- | ----- |
| RATP Dev | 4 | appointment | https://rh.newstank.fr/article/view/428311/ratp-dev-carole-martinez-drh-business-unit-france-suisse.html | excluded — **Publié le 29/01/2026**; Carole Martinez DRH BU France & Suisse **depuis 01/01/2026**. Appointment, not an in-window §5 statement | excluded: §6 date (January) + Signal 2 shape not S1 | **S2** | |
| RATP Dev | 4 | appointment historic | https://rh.newstank.fr/article/view/268286/ratp-dev-florence-yvan-directrice-executive-ressources-humaines.html | excluded — **21/10/2022** Florence Yvan named directrice exécutive RH | excluded: §6 date (2022) | **S2** (historic) | |
| RATP Dev | 4 | LinkedIn extract | https://fr.linkedin.com/posts/carole-martinez-69521a169_je-suis-ravie-de-vous-annoncer-que-depuis-activity-7420115406398484480-Of6Y | excluded — **2026-01-22** Martinez self-announcement of 1 Jan 2026 DRH BU France & Suisse | excluded: §6 date (January) | **S2** | |
| RATP Dev | 4 | LinkedIn extract | https://www.linkedin.com/posts/carole-martinez-69521a169_depuis-janvier-2026-jai-la-chance-dexercer-activity-7464963660038324224-w9eN | excluded — **2026-05-26** Martinez on DRH in a fast-changing environment / management; **May**, not 15–21 Sep | excluded: §6 date (May) | S1 shape but OOW — leave for harvest only if another week | |

French September queries did not surface a 15–21 Sep Yvan/Martinez interview. No S1 Part A′.

### Schneider Electric (`se.com`)

**Families run:** 1–3, 4 (Charise Le; Clayton Mohamed watch), 5–7 + §7.1a **fr**. W38: include **only** if a **new** VP+ people statement is **first published** 15–21 Sep.

**Queries (full strings):**
1. `"Charise Le" "Schneider Electric" (Heidrick OR interview OR podcast OR CHRO) September 2026`
2. `site:se.com (CHRO OR "Charise Le" OR "human resources" OR talent) September 2026`
3. `"Schneider Electric" (interview OR podcast OR webinar) (CHRO OR "Charise Le" OR "Clayton Mohamed") 2026`
4. `"A CHRO-CAIO Conversation" Schneider Heidrick recap OR recording OR replay September 2026`
5. `"Clayton Mohamed" "Schneider Electric" (podcast OR blog OR "VP HR") 2026`
6. §7.1a **fr:** `"Schneider Electric" (DRH OR "direction des ressources humaines" OR CSE OR PSE) (compétences OR formation OR talents OR interview) septembre 2026`

| Account row | Families (1–7) | Queries (full strings) | URLs fetched | Outcome | Commercial gate score / reason | Cross-signal hint | Flags |
| ----------- | -------------- | ---------------------- | ------------ | ------- | ------------------------------ | ----------------- | ----- |
| Schneider Electric | 4 | W38 teaser | https://www.linkedin.com/posts/charisele_a-chro-caio-conversation-reinventing-work-activity-7502572541417299969-HXA2 | excluded — LinkedIn dated **2026-09-07**; Charise LE (CHRO) **pre-event** teaser for Heidrick conversation with Peter Weckesser (CDO). Network posts place the live session **14 Sep 2026** (day **before** this window). **No recap/recording/transcript first published 15–21 Sep** found | excluded: §6 first-publication is 7 Sep teaser / 14 Sep event; not a new 15–21 Sep statement. Recycled teaser would violate “new or meaningfully updated” | S6? (AI/HR partnership theme if a recap later appears) | |
| Schneider Electric | 3 | Heidrick promo | https://www.linkedin.com/posts/heidrick-%26-struggles_ai-isnt-simply-changing-work-its-changing-activity-7500975909017985024-c52m | excluded — **2026-09-02** registration post; not an attributed CHRO interview; before window | excluded: §6 date (2 Sep) + promo not statement | | |
| Schneider Electric | 3 | Heidrick promo | https://www.linkedin.com/posts/heidrick-%26-struggles_ai-hr-leadership-activity-7495925117949071361-NxJD | excluded — **2026-08-19** registration | excluded: §6 date (August) | | |
| Schneider Electric | 6 | FR CSE/GEPP | https://www.cfdt-schneider-electric.fr/gestion-des-emplois-et-des-parcours-professionnels-comment-schneider-electric-traite-le-sujet/ | excluded — CFDT page on **commission de suivi GEPP 26 mars 2026**; union tract, not a named VP+ people-leader public statement in 15–21 Sep | excluded: wrong date + union commentary, not CHRO voice | S3, S5? (GEPP / AI métiers; March) | |
| Schneider Electric | 6 | FR tract PDF | https://www.cfdt-schneider-electric.fr/wp-content/uploads/tract-Cfdt-GEPP-avril-2026-fren.pdf | excluded — **avril 2026** CFDT GEPP tract (Coursera, reconversion, IA); Direction quoted via union, not a new Sep CHRO interview | excluded: §6 date (April) + attribution | S5 | |
| Schneider Electric | 6 | historic DRH | https://www.decideurs-magazine.com/ressources-humaines/62159-christian-lambert-schneider-electric-nous-sommes-passes-d-une-logique-de-plan-social-a-une-logique-de-transformation-continue.html | excluded — Christian Lambert interview on continuous transformation vs plan social; **not dated 15–21 Sep 2026** in retrieved evidence | excluded: date not in window | S3 | |
| Schneider Electric | 5 | appointment historic | https://rh.newstank.fr/article/view/176966/schneider-electric-charise-nommee-directrice-generale-ressources-humaines.html | excluded — **05/03/2020** Charise Le named DGRH | excluded: §6 date (2020) | **S2** (historic) | |

No **new** 15–21 Sep VP+ people statement (no Heidrick recap; no France CSE/PSE people-leader quote first published this week). Clayton Mohamed April blog not re-included. No S1 Part A′.

### Sony Music Entertainment (`sonymusic.com`)

**Families run:** 1–3, 4 (Andrew Davis), 5, 7. W38: VP People eXperience Greenhouse listings are vacancies.

**Queries (full strings):**
1. `"Sony Music" ("Andrew Davis" OR CHRO OR "Chief People" OR "People eXperience") September 2026`
2. `site:sonymusic.com ("Chief People" OR "Andrew Davis" OR "human resources" OR talent) 2026`
3. `"Sony Music Entertainment" (interview OR podcast) (HR OR "people experience" OR talent) September 2026`
4. `"Andrew Davis" "Sony Music" (interview OR podcast OR workforce OR skills) after:2026-09-14`
5. `"Sony Music" OR "The Orchard" "VP People eXperience" Greenhouse 2026`

| Account row | Families (1–7) | Queries (full strings) | URLs fetched | Outcome | Commercial gate score / reason | Cross-signal hint | Flags |
| ----------- | -------------- | ---------------------- | ------------ | ------- | ------------------------------ | ----------------- | ----- |
| Sony Music Entertainment | 2 | executives | https://www.sonymusic.com/executives/ | excluded — **Cloudflare block** (“Sorry, you have been blocked”). Search extract lists **Andrew Davis, EVP & Global Chief People Experience Officer**. Not a dated statement | excluded: RF-FETCH; identity only | | **RF-FETCH** |
| Sony Music Entertainment | 5, 7 | vacancy | https://job-boards.greenhouse.io/sonymusicentertainment/jobs/8777995002 | excluded — Greenhouse **VP, People eXperience, The Orchard**; search metadata **Published: 2026-09-03** (before 15 Sep). **Vacancy, not a statement**. JD describes PX strategy/workforce planning for ~800 employees | excluded: master §4.1 single posting + §6 date | **S4** | |
| Sony Music Entertainment | 7 | vacancy mirror | https://diversityjobs.com/career/18204403/Vp-People-Experience-The-Orchard-New-York-New-York | excluded — syndicate dated **Sep 04, 2026**; same vacancy | excluded: vacancy + date before window | **S4** | |
| Sony Music Entertainment | 4 | LinkedIn extract | https://www.linkedin.com/in/davisatl | excluded — Davis still EVP Global CPXO; recent shares (e.g. **2026-06-09** CHRO-as-enterprise-leader commentary) are not 15–21 Sep first-published Sony statements | excluded: §6 date | | |

No in-window Davis interview. Greenhouse items remain vacancies. No S1 Part A′.

### Stellenbosch University (`sun.ac.za`)

**Families run:** 1–3, 4 (Miriam Hoosain; Nico Koopman Acting CPO), 5–7 + §7.1a **af**

**Queries (full strings):**
1. `"Stellenbosch University" OR "Universiteit Stellenbosch" (CHRO OR "Miriam Hoosain" OR "Nico Koopman" OR "human resources") September 2026`
2. `site:sun.ac.za OR site:su.ac.za ("Chief People Officer" OR "human resources" OR Hoosain OR Koopman) 2026`
3. `"Stellenbosch University" (interview OR podcast) (HR OR "Chief People" OR talent) September 2026`
4. `"Miriam Hoosain" "Stellenbosch" (interview OR human resources) 2026`
5. §7.1a **af:** `"Universiteit Stellenbosch" ("menslike hulpbronne" OR CHRO OR "direkteur menslike hulpbronne" OR talent OR vaardighede) onderhoud September 2026`

| Account row | Families (1–7) | Queries (full strings) | URLs fetched | Outcome | Commercial gate score / reason | Cross-signal hint | Flags |
| ----------- | -------------- | ---------------------- | ------------ | ------- | ------------------------------ | ----------------- | ----- |
| Stellenbosch University | 2 | governance | https://www.su.ac.za/en/about/governance/executive-management | excluded — **WebFetch timeout**. `https://r.jina.ai/https://www.su.ac.za/en/about/governance/executive-management` returned **Cloudflare bot challenge**. Search extract lists **Prof Nico Koopman, Acting Chief People Officer** and (on management-team pages) **Miriam Hoosain, Chief Director: Human Resources** | excluded: RF-FETCH; identity pages not dated 15–21 Sep statements | | **RF-FETCH** |
| Stellenbosch University | 2 | HR Afrikaans | https://www.su.ac.za/af/personeel/menslike-hulpbronne | excluded — evergreen Menslike Hulpbronne CoE/BP model copy; no 15–21 Sep attributed CPO/CHRO interview | excluded: undated functional page | | |
| Stellenbosch University | 4 | Acting CPO | https://www.linkedin.com/posts/prof-nico-koopman-a4360260_so-tuesday-30-june-was-my-last-day-as-activity-7479919642749140992-_wlP | excluded — fetched LinkedIn **2026-07-06**: last day as DVC 30 June; **Acting CPO from 1 July 2026**; recruitment for permanent CPO underway. Appointment/role transition, **July**, not a Sep 15–21 skills/workforce statement | excluded: §6 date (July) + Signal 2 shape | **S2** | |

Afrikaans September query returned HR-function pages, not an in-window onderhoud with Hoosain/Koopman. No S1 Part A′.

### Toyota SA (`toyota.co.za`)

**Families run:** 1–3, 4 (Thami Msubo GM Group HR; Nsikelelo Radebe GM L&D), 5–7 + §7.1a **af**

**Queries (full strings):**
1. `"Toyota South Africa" OR "Toyota SA" ("Thami Msubo" OR CHRO OR "human resources" OR talent) September 2026`
2. `site:toyota.co.za ("human resources" OR talent OR skills OR training OR Msubo) 2026`
3. `"Toyota South Africa Motors" (interview OR podcast) (HR OR talent OR people OR skills) September 2026`
4. `"Thami Msubo" Toyota (interview OR skills OR "human resources") 2026`
5. §7.1a **af:** `"Toyota Suid-Afrika" OR "Toyota South Africa Motors" ("menslike hulpbronne" OR talent OR vaardighede OR opleiding) onderhoud September 2026`

| Account row | Families (1–7) | Queries (full strings) | URLs fetched | Outcome | Commercial gate score / reason | Cross-signal hint | Flags |
| ----------- | -------------- | ---------------------- | ------------ | ------- | ------------------------------ | ----------------- | ----- |
| Toyota SA | 2, 7 | Hilux | https://www.toyota.co.za/connect/article/toyota-hilux-investment-south-africa | excluded — **WebFetch timeout**. Search extract: **July 28, 2026** (Engineering News **17 Jul 2026** for 16 Jul line-off). Speakers **Andrew Kirby (President & CEO)** and minister/industry; skills/employment as industrial-policy language, **not GM Group HR** | excluded: §6 date (July) + §5 speaker (CEO) + capex | **S3**, **S5?** (skills creation in industrial investment; OOW) | **RF-FETCH** (timeout; recovered date via search extract) |
| Toyota SA | 5 | graduate | https://www.linkedin.com/posts/toyota-sa_calling-all-ambitious-graduateselevate-activity-7491396554583339008-vwlB | excluded — **2026-08-07** 2027 Graduate Training Programme; close **21 August 2026**; speaker in related imoto coverage is **Khaya Ngcwembe, Vice President** (not Msubo). Master excludes graduate programs | excluded: §6 date + master §4.1 graduate/early-career | **S4?** weak / graduate exclusion | |
| Toyota SA | 2 | development programmes | https://jobs.toyota.co.za/go/Development-Programmes/5314901/ | excluded — evergreen apprenticeship/learnership ATS; no VP+ HR statement this week | excluded: early-career ATS + undated | | |
| Toyota SA | 4 | named identity | https://www.linkedin.com/in/thami-msubo-81764913a | excluded — confirms **GM Group HR, Toyota South Africa** since Jan 2019; no 15–21 Sep public interview located | excluded: identity only | | |

Named pass **not skipped** (Msubo publicly resolvable). Afrikaans query returned graduate/opleiding noise. No S1 Part A′.

### TTEC (`ttec.com`)

**Families run:** 1–3, 4 (Laura Butler CPO; Julie A. Stone CLO), 5, 7. Parent: Stone April 2026 feature is OOW.

**Queries (full strings):**
1. `TTEC ("Laura Butler" OR "Julie A. Stone" OR "Chief People Officer" OR CLO) (interview OR podcast OR skills) September 2026`
2. `site:ttec.com OR site:investors.ttec.com (CHRO OR "Chief People" OR "Laura Butler" OR learning) 2026`
3. `"TTEC" (interview OR podcast) (HR OR talent OR learning OR "Julie Stone") after:2026-09-14`
4. `"Julie A. Stone" TTEC (CXO OR podcast OR "human-AI") 2026`
5. `"Laura Butler" TTEC (interview OR podcast OR AI OR culture) 2026`

| Account row | Families (1–7) | Queries (full strings) | URLs fetched | Outcome | Commercial gate score / reason | Cross-signal hint | Flags |
| ----------- | -------------- | ---------------------- | ------------ | ------- | ------------------------------ | ----------------- | ----- |
| TTEC | 2 | IR management | https://investors.ttec.com/corporate-governance/management | excluded — **WebFetch timeout**. Search extract still lists **Laura Butler, Chief People Officer** (returned 2023). Undated bio, not 15–21 Sep statement | excluded: RF-FETCH; identity | | **RF-FETCH** |
| TTEC | 4 | CLO podcast | https://futuresolvepodcast.podbean.com/e/episode-20-ai-transformation-in-ld-and-skill-intelligence-with-julie-stone/ | excluded — **May 20, 2026** Strategic HR Show; Julie Stone CLO/Group VP on AI in L&D, workforce roles. Strong S1 shape, **wrong week** | excluded: §6 date (May) | S5, S6 (OOW) | |
| TTEC | 4 | CLO podcast | https://www.growthspace.com/podcasts/julie-stone | excluded — Skilled/Growthspace “AI-powered learning… Julie Stone”; Apple listing **15 May 2026**. OOW | excluded: §6 date (May) | S5, S6 | |
| TTEC | 4 | CPO podcast | https://csuiteconversations.podbean.com/e/laura-butler-leading-people-and-culture-through-the-ai-era/ | excluded — **Nov 7, 2025** Laura Butler CPO on AI-era leadership. OOW | excluded: §6 date (2025) | | |
| TTEC | 4 | LinkedIn identity | https://www.linkedin.com/in/laurabutler | excluded — CPO since Jun 2023; no 15–21 Sep attributed public statement in retrieved activity | excluded: identity only | | |

April 2026 CXO Dispatch Stone feature not re-fetched/recycled. No in-window CPO/CLO statement. No S1 Part A′.

### Viasat (`viasat.com`) — group row

**Families run:** 1–3, 4 (Rebecca Grattan CPCO), 5, 7

**Queries (full strings):**
1. `Viasat ("Rebecca Grattan" OR "Chief People" OR CHRO) (interview OR talent OR workforce) September 2026`
2. `site:viasat.com ("Chief People" OR "Rebecca Grattan" OR "human resources" OR talent) September 2026`
3. `"Viasat" (interview OR podcast) (HR OR "people and culture" OR Grattan) 2026`
4. `"Rebecca Grattan" Viasat (interview OR STEM OR workforce OR skills) 2026`

| Account row | Families (1–7) | Queries (full strings) | URLs fetched | Outcome | Commercial gate score / reason | Cross-signal hint | Flags |
| ----------- | -------------- | ---------------------- | ------------ | ------- | ------------------------------ | ----------------- | ----- |
| Viasat | 4 | identity | https://www.linkedin.com/in/rebecca-grattan-6b986b5 | excluded — CPCO since Apr 2024; likes on **Aug 2026 intern Q&A** and talent-attraction hiring posts; no 15–21 Sep attributed statement | excluded: identity + early-career likes | | **RF-BATCH-RISK** (shared domain with Viasat Government) |
| Viasat | 3 | TA Q&A | https://recruitingheadlines.com/competing-against-better-known-brands-qa-with-viasat-on-standing-out-to-tech-talent/ | excluded — **January 6, 2026**; internships/early-career engineering hiring (85% early career). Master excludes internships/graduate | excluded: §6 date + early-career | S4? | |
| Viasat | 4 | The Org | https://theorg.com/org/viasat-inc/org-chart/rebecca-grattan | excluded — directory/org chart, not a dated statement | excluded: undated directory | | |

No in-window Grattan §5 statement. STEM challenge / GPG materials from earlier 2026 not re-included. No S1 Part A′.

### Viasat Government (`viasat.com`) — atomic government row

**Families run:** 1–3, 4 (Damion Moore CPO Viasat Government; Anders Strothman VP P&C Government & Global Services), 5, 7. **Not batched** with the group row except shared-domain note.

**Queries (full strings):**
1. `"Viasat Government" ("Damion Moore" OR "Anders Strothman" OR "Chief People Officer" OR "VP People") 2026`
2. `site:viasat.com "Viasat Government" ("human resources" OR "people and culture" OR "Chief People") 2026`
3. `"Viasat Government" (interview OR podcast) (HR OR talent OR people) September 2026`
4. `"Damion Moore" "Viasat Government" (interview OR workforce OR talent) September 2026`

| Account row | Families (1–7) | Queries (full strings) | URLs fetched | Outcome | Commercial gate score / reason | Cross-signal hint | Flags |
| ----------- | -------------- | ---------------------- | ------------ | ------- | ------------------------------ | ----------------- | ----- |
| Viasat Government | 2, 7 | business president | https://www.viasat.com/about/company/leadership/craig-miller/ | excluded — **Craig Miller, President, Viasat Government**; strategy/defense bio, **not a people leader**, undated as a Sep 15–21 statement | excluded: §5 speaker | | **RF-BATCH-RISK** |
| Viasat Government | 4 | CPO identity | https://www.linkedin.com/in/damion-moore-249a818 | excluded — **Chief People Officer, Viasat Government since Jul 2025**; 2026 posts are contract/hiring shares, not a 15–21 Sep §5 interview | excluded: identity only | | |
| Viasat Government | 4 | VP P&C identity | https://www.linkedin.com/in/andersstrothman | excluded — **VP People & Culture, Viasat Government & Global Services from Jul 2026**; Mar 2026 P&C BP hiring post. Role identity, not in-window statement | excluded: identity / OOW hiring post | **S2?** (Jul 2026 remit expansion — not a public appointment article this week) | |
| Viasat Government | 4 | hiring post | https://www.linkedin.com/posts/andersstrothman_pc-business-partner-temporary-in-multiple-activity-7437107367454076928-BwA4 | excluded — **2026-03-10** temporary P&C BP vacancy | excluded: vacancy + March date | **S4** | |

Government people-leader identity **established** (Moore CPO; Strothman VP P&C). No in-window attributed statement. No S1 Part A′.

### VON Canada (`von.ca`)

**Families run:** 1–3, 4 (Wendy Steele VP HR), 5, 7

**Queries (full strings):**
1. `"VON Canada" ("Wendy Steele" OR CHRO OR "Vice President" HR OR "human resources") September 2026`
2. `site:von.ca ("human resources" OR "Wendy Steele" OR talent) 2026`
3. `"VON Canada" (interview OR podcast) (HR OR people OR workforce) September 2026`
4. `"Wendy Steele" "VON" (interview OR workforce OR talent OR skills) 2026`

| Account row | Families (1–7) | Queries (full strings) | URLs fetched | Outcome | Commercial gate score / reason | Cross-signal hint | Flags |
| ----------- | -------------- | ---------------------- | ------------ | ------- | ------------------------------ | ----------------- | ----- |
| VON Canada | 4 | bio | https://von.ca/en/about-von/senior-leadership-team/wendy-steele | excluded — fetched **VP, Human Resources** bio (joined 2019); undated leadership page, not a 15–21 Sep statement | excluded: identity bio | | |
| VON Canada | 2 | SLT | https://www.von.ca/en/about-von/senior-leadership-team | excluded — lists Steele among SLT with **Jo-Anne Poirier still titled President and CEO** on this page; no dated people-leader interview this week | excluded: undated org list | | |
| VON Canada | 2 | FR bio | https://von.ca/fr/notre-sujet/la-haute-direction/wendy-steele | excluded — French bio of VP RH; same undated identity content | excluded: identity | | |

No in-window Steele statement. No S1 Part A′.

### Wood Mackenzie (`woodmac.com`)

**Families run:** 1–3, 4 (Eilish Henson EVP HR), 5, 7

**Queries (full strings):**
1. `"Wood Mackenzie" ("Eilish Henson" OR CHRO OR "Chief People" OR "EVP Human Resources") September 2026`
2. `site:woodmac.com ("human resources" OR "Eilish Henson" OR talent OR people) 2026`
3. `"Wood Mackenzie" (interview OR podcast) (HR OR talent OR people OR workforce) September 2026`
4. `"Eilish Henson" "Wood Mackenzie" (interview OR podcast OR skills) 2026`
5. (F5) `"Energy Gang" "Wood Mackenzie" September 2026`

| Account row | Families (1–7) | Queries (full strings) | URLs fetched | Outcome | Commercial gate score / reason | Cross-signal hint | Flags |
| ----------- | -------------- | ---------------------- | ------------ | ------- | ------------------------------ | ----------------- | ----- |
| Wood Mackenzie | 2, 4 | leadership | https://www.woodmac.com/about/our-people/ | excluded — fetched: **Eilish Henson, Executive Vice President, Head of Human Resources** (“strategic HR business partner… people strategy”). Undated leadership directory. In-week analyst content on same page is **Simon Flowers, The Edge 10 September 2026** (oil/shale), not HR | excluded: identity page; in-window analyst piece is not people-leader | | |
| Wood Mackenzie | 3, 5 | Energy Gang | https://www.woodmac.com/podcasts/energy-gang/eare-power-markets-fit-for-purpose/ | excluded — **15 September 2026** Energy Gang episode **is in window** but guests are **Ed Crooks / Amy Myers Jaffe / Stacey Doré (Vistra CSO)** on power-market design. **Not WoodMac HR** and not §5 people topics | excluded: §5 speaker/topic | | |
| Wood Mackenzie | 5 | Energy Gang prior | https://www.woodmac.com/podcasts/energy-gang/americas-new-gas-boom/ | excluded — **19 August 2026**; EQT CEO guest; not HR | excluded: §6 date + wrong speaker | | |

No in-window Henson statement. No S1 Part A′.

### Woolworths (`woolworths.co.za`) — SA, not AU

**Families run:** 1–3, 4 (Melanie Naidu Group People Director), 5–7 + §7.1a **af**

**Queries (full strings):**
1. `"Woolworths" "South Africa" OR Suid-Afrika ("Melanie Naidu" OR "People Director" OR CHRO OR "menslike hulpbronne") September 2026`
2. `site:woolworths.co.za OR site:woolworthsholdings.co.za ("People Director" OR "human resources" OR Naidu OR talent) 2026`
3. `"Woolworths South Africa" (interview OR podcast) (HR OR people OR talent) September 2026`
4. `"Melanie Naidu" Woolworths (interview OR people OR skills OR workforce) 2026`
5. §7.1a **af:** `"Woolworths" "Suid-Afrika" ("menslike hulpbronne" OR talent OR vaardighede OR opleiding) onderhoud September 2026`

| Account row | Families (1–7) | Queries (full strings) | URLs fetched | Outcome | Commercial gate score / reason | Cross-signal hint | Flags |
| ----------- | -------------- | ---------------------- | ------------ | ------- | ------------------------------ | ----------------- | ----- |
| Woolworths | 2, 4 | WHL leadership | https://www.woolworthsholdings.co.za/directorate/directors/ | excluded — fetched: **Melanie Naidu, Group People Director** (appointed 6 May 2022); member of Woolworths SA Board. Undated directorate page, not a 15–21 Sep statement. **Caryn Katsikogianis not used** (AU Woolworths Group risk) | excluded: identity/governance | | |
| Woolworths | 5 | org reset | https://www.hpcmagmea.com/2026/06/30/woolworths-realigns-leadership-structure-under-ceo-sam-ngumeni/ | excluded — **Published June 30, 2026**; operating-model reset under CEO Sam Ngumeni effective 1 Jul 2026; **People remains under Melanie Naidu** (unchanged). CEO-led OM, not a People Director §5 interview; OOW | excluded: §6 date (June) + CEO/strategy voice; People “unchanged” is not a new people-leader statement | **S3** (OM reset; outside window) | |
| Woolworths | 5 | BusinessTech | https://businesstech.co.za/news/business/864461/end-of-an-era-for-woolworths-2/ | excluded — **WebFetch timeout**. Search extract restates same leadership map (People = Naidu). Not verified as 15–21 Sep first-publication | excluded: RF-FETCH; likely same June reset recap | **S3?** | **RF-FETCH** |
| Woolworths | 6 | af query | Afrikaans search returned L&D specialist / WFS Head of Talent LinkedIn profiles (Connie Pilane, Yakupha Nkosinkulu, Lydia Mohlala) — not Group People Director interviews dated this week | excluded — no 15–21 Sep Naidu onderhoud; specialist L&D profiles are not VP+ statements this week | excluded: speaker band / no dated statement | | |

SA vs AU identity controlled (WHL / woolworths.co.za / Naidu). No S1 Part A′.

---

## Batch summary

- **Batch id:** S1-B03  
- **Rows assigned:** 15  
- **Rows completed (families 1–3 + named 4 when resolvable + extended 5–7 / §7.1a where mandatory):** 15  
- **Rows with ≥1 Part A′ entry:** 0  
- **Included Part A′ entries:** 0  
- **Flags (count by type):**  
  - **RF-FETCH:** 8 (Oscar Krouse bio interstitial; Oscar careers interstitial + Greenhouse 404; Pierre Fabre We Care URL 404; Sony executives Cloudflare; Stellenbosch executive-management timeout + jina Cloudflare; Toyota Hilux timeout; TTEC IR management timeout; Woolworths BusinessTech timeout)  
  - **RF-BLOCKED-ATS:** 1 (Oscar People Strategy Lead careers interceptor)  
  - **RF-BATCH-RISK:** 2 (Viasat group; Viasat Government — shared `viasat.com`, separate exact-name queries)  
  - **RF-IDENTITY:** 0 (named pass used on all rows where a public people leader was resolvable, including Thami Msubo / Damion Moore / Anders Strothman)  
  - **RF-PAYWALL:** 0 (News Tank RATP Martinez body retrieved)  
  - **RF-WAIVER:** 0  
- **§7.1a languages logged:** `fr` ×4 (Orange Business, Pierre Fabre, RATP Dev, Schneider Electric); `de` ×1 (Phoenix Contact); `af` ×3 (Stellenbosch University, Toyota SA, Woolworths)  
- **Cross-signal hints harvested:** Orange Business → S5 / S2 / S6?; Oscar Health → S4 (People Strategy Lead vacancy); Phoenix Contact → S5? (May Ausbildung); Pierre Fabre → S5 Skill Week, S3?, S6?; RATP Dev → **S2** (Martinez Jan 2026 DRH); Schneider Electric → S3/S5 GEPP, S6? Heidrick AI if recap appears later, S2 historic Charise; Sony Music → **S4** (VP PX Greenhouse); Stellenbosch → **S2** (Acting CPO 1 Jul 2026); Toyota SA → S3/S5? Hilux (CEO, July); TTEC → S5/S6 May Stone podcasts (OOW); Viasat Government → S2?/S4 Strothman; Woolworths → **S3** June OM reset  
- **Master §7.2 HR trade-media sweep:** pending on orchestrator

No CHECKPOINT — all 15 assigned rows completed.
