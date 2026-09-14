Batch id: S2-B03 | Signal: 2 | Run id: 2026-W38

# Batch lane log — Signal 2 (leadership appointment)

**Run id:** `2026-W38`  
**Signal # (1–6):** `2`  
**Batch id:** `S2-B03`  
**Review period:** 2026-09-08 through 2026-09-14 inclusive  
**Date rule:** Publication date of the appointment announcement, or effective date only if that is the sole dated field in the official release and it falls in-window.  
**Account rows in this batch:** Orange Business; Oscar Health; Phoenix Contact; Pierre Fabre Laboratories; RATP Dev; Schneider Electric; Sony Music Entertainment; Stellenbosch University; Toyota SA; TTEC; Viasat; Viasat Government; VON Canada; Wood Mackenzie; Woolworths

**Note:** Master SOP §7.2 HR / HR-tech trade-media sweep remains pending on the orchestrator; this lane did not substitute for it.

**§7.1a September local-language tokens used:** French `septembre`; German `September`; Afrikaans `September`.

---

## Part A′ — Verified entries (this signal × this batch only)

No qualifying `[leadership-appointment]` entry passed Signal 2 §8.1 verification and the master §4.1 commercial gate for this batch. In-window items were vacancies (Sony Music Greenhouse / Oscar People Strategy Lead), a 25 Aug 2026 Pierre Fabre US dermocosmetics CEO wire outside both remit and window, and several incumbent leadership pages with no first public appointment disclosure dated 8–14 September 2026.

---

## Part L — Execution log

### Orange Business

- **Families:** 1, 2, 3, 5, 6, 7 (extended pass after empty in-window appointment).
- **Queries run:**
  - `"Orange Business" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR "HR transformation" OR "organizational development") (appointed OR joins OR named OR "new role") September 2026`
  - `site:orange-business.com (appointed OR appointment OR named OR joins OR leadership) (HR OR talent OR learning OR "human resources" OR transformation) September 2026`
  - `site:orange-business.com/en/press (appointment OR appointed OR nomination) 2026 September OR septembre`
  - **ISO `fr`:** `"Orange Business" (nomination OR nommé OR rejoint OR "prend la fonction") ("ressources humaines" OR talents OR apprentissage OR transformation) septembre 2026`
  - `"Orange Business" "Marion Dubos" OR "Laurent Aufils" (appointed OR nomination OR "Head of Human Resources") 2026`
- **URLs fetched/opened:**
  - `https://www.orange-business.com/en/about-us/executive-committee` — fetched. Marion Dubos listed as Head of Human Resources and Employee Experience; Eka Kamushadze Head of Transformation. No dated in-window appointment.
  - `https://www.orange-business.com/en/press/evolution-orange-business-services-leadership-team` — fetched. Laurent Aufils appointed Head of HR and Employee Experience; page dated **21 September 2022**.
  - `https://www.orange-business.com/en/press/orange-business-further-strengthens-executive-management-team-two-key-appointments` — search-opened. Wassila Zitoune-Dumontet / Mireille Helou effective **1 April 2025**; operations, not people/L&D.
  - `https://www.linkedin.com/posts/orange-business_in-this-interview-laurent-aufils-chief-activity-7465770059672600576-dCYF` — search-opened. Dated **2026-05-28**. Laurent Aufils (then CPO) on continuous learning/certifications. **Not an appointment.**
  - `https://www.linkedin.com/posts/laurent-aufils_new-chapter-ai-future-of-work-orange-activity-7477669776325017600-8uAE` — search-opened. Aufils as SVP AI & Future of Work at **Orange Group** (skills/upskilling commentary). Not an Orange Business in-window appointment.
  - `https://www.linkedin.com/in/gurpreetgulati` — search-opened. LinkedIn-only “Head – Learning Experience (Global)” from February 2026; unverified company announcement.
- **Outcome:** Excluded. No first public learning/talent/HR-transformation appointment dated 8–14 September 2026.
- **Commercial gate score / reason:** Not scored for inclusion: Signal 2 §8.1 date/scope failed.
- **Cross-signal hint:** `S1` on the 28 May 2026 Aufils interview (VP+/CPO-tier people commentary; not an appointment — 7.1b). `S1?` on the Group SVP AI & Future of Work post (Orange Group row, not this account).
- **Flags:** none.

### Oscar Health

- **Families:** 1, 2, 3, 5.
- **Queries run:**
  - `"Oscar Health" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR "HR transformation" OR "Chief People Officer" OR "organizational development") (appointed OR joins OR named OR "new role") September 2026`
  - `site:hioscar.com OR site:ir.hioscar.com (appointed OR appointment OR named OR joins) (HR OR talent OR learning OR People OR "human resources") 2026`
  - `site:ir.hioscar.com (People OR talent OR learning OR "human resources" OR CHRO) (appointed OR appointment) 2026`
  - `"Oscar Health" "People Strategy Lead" OR "VP, People Strategy" 2026`
- **URLs fetched/opened:**
  - `https://www.hioscar.com/about/team` — fetched. Rebecca Krouse remains CPO (TA, people strategy, L&D, HR systems). Undated directory, not an appointment wire.
  - `https://www.hioscar.com/about/team/rebecca-krouse` — search-opened. Incumbent CPO bio.
  - `http://www.hioscar.com/careers/8162815?gh_jid=8162815` — search snippet used. **People Strategy Lead vacancy published 2026-09-02** (reports to VP, People Strategy and HR). Direct fetch of `https://www.hioscar.com/careers/8162815?gh_jid=8162815` returned **HTTP 422**.
  - `https://ir.hioscar.com/news-events-presentations/news-press-releases/news-details/2026/Oscar-Health-Inc--Appoints-Director-Siddhartha-Sankaran-as-Independent-Chair-of-the-Board/default.aspx` — search-opened. Board chair effective **4 June 2026**; not people/L&D.
- **Outcome:** Excluded. No in-window appointment. The 2 Sep People Strategy Lead item is a job posting, not a named hire.
- **Commercial gate score / reason:** Vacancy excluded under master §4.1 (single generic/cluster posting without a named appointment). Not scored as Signal 2.
- **Cross-signal hint:** `S4` on the People Strategy Lead Greenhouse/Oscar careers listing.
- **Flags:** `RF-FETCH` (Oscar careers 422); `RF-BLOCKED-ATS` (Greenhouse script/ATS for the People Strategy Lead posting).

### Phoenix Contact

- **Families:** 1, 2, 3, 5, 6, 7 (extended pass).
- **Queries run:**
  - `"Phoenix Contact" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR "HR transformation" OR Personal OR "organizational development") (appointed OR joins OR named OR ernannt) September 2026`
  - `site:phoenixcontact.com (appointment OR appointed OR named OR ernannt OR Leitung) (HR OR Personal OR talent OR learning) 2026`
  - **ISO `de`:** `"Phoenix Contact" (ernannt OR übernimmt OR Leitung OR neuer) (Personal OR Talent OR Lernen OR Organisationsentwicklung OR "Human Resources") September 2026`
  - `"Phoenix Contact" Geschäftsführer Personal Talent September 2026`
- **URLs fetched/opened:**
  - `https://www.phoenixcontact.com/de-de/unternehmen/phoenix-contact-gruppe/geschaeftsfuehrung-unternehmensgruppe` — fetched. Axel Wachholz (CFO since Jan 2018) still owns Corporate Human Relations. Stephan Volgmann CSO since **May 2026** (sales, not people).
  - `https://update.phoenixcontact.com/bildung-mit-auszeichnung/` — search-opened. Cindy Benzing (People & Organization worldwide) quoted on IT-apprenticeship redesign; DIHK prize context, not an appointment.
  - `https://assets.phoenixcontact.com/file/2b880a1b-d489-4a7d-807b-f3c96f404cff/media/original?5850_DIHK.pdf=` — search-opened. Same Ausbildung award; Benzing attributed comment.
  - `https://update.phoenixcontact.com/en/the-hr-manager/` — search-opened. Profile of Ines Ludwig, Head of Human Resources; not dated as a September 2026 appointment.
- **Outcome:** Excluded. No in-window learning/talent/HR-transformation appointment.
- **Commercial gate score / reason:** Not scored: Signal 2 §5/§8.1 failed.
- **Cross-signal hint:** `S5?` on the IT-Ausbildung / self-learning award pages (skills/capability narrative, not an appointment).
- **Flags:** none.

### Pierre Fabre Laboratories

- **Families:** 1, 2, 3, 5, 6, 7 (extended pass).
- **Queries run:**
  - `"Pierre Fabre" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR CHRO OR "HR transformation" OR "Chief Human Resources") (appointed OR joins OR named OR nomination) September 2026`
  - `site:pierre-fabre.com (nomination OR nommé OR appointed OR joins) (ressources humaines OR talent OR formation OR CHRO OR "human resources") 2026`
  - **ISO `fr`:** `"Pierre Fabre" (nomination OR nommé OR rejoint OR "prend la fonction") ("ressources humaines" OR talents OR apprentissage OR DRH OR formation) septembre 2026`
  - `"Nicolas Zombré" "Pierre Fabre" PRNewswire 2026`
  - `"Pierre Fabre" directeur talent nomination 2026`
- **URLs fetched/opened:**
  - `https://www.prnewswire.com/news-releases/laboratoires-pierre-fabre-appoints-nicolas-zombre-ceo-of-us-dermocosmetics-business-signaling-next-phase-of-growth-302859667.html` — fetched. **25 Aug 2026.** Nicolas Zombré appointed CEO, U.S. Dermocosmetics (Avène / René Furterer / Klorane). Commercial leadership, not people/L&D; **outside this window**.
  - `https://www.pierre-fabre.com/en/our-company/governance` — fetched. Maud Vimeux Human Resources Director (joined September 2022). Alexandre Falconnier HRIS/HR data since January 2024.
  - `https://www.pierre-fabre.com/fr/notre-entreprise/gouvernance` — fetched. French governance; Vimeux still DRH.
  - `https://fr.linkedin.com/posts/sebastientranchanthr_pierrefabre-wecaremovement-drh-activity-7479944226286415873-bu3i` — search-opened. Dated **2026-07-06**. Sébastien Tranchant LinkedIn-only “DRH Business Unit Opérations”; unverified company newsroom; outside window.
  - `https://www.pierre-fabre.com/fr/article/nouvelle-marque-employeur-wecaremovement` — search-opened. Employer-brand “We Care Movement” with CHRO quote; not an appointment.
- **Outcome:** Excluded. Zombré is US dermocosmetics CEO (wrong remit + 25 Aug). No in-window people/L&D/HR-transformation appointment.
- **Commercial gate score / reason:** Zombré excluded: wrong signal type and date. Tranchant excluded: LinkedIn-only + date + BU operations HR.
- **Cross-signal hint:** none for Zombré (commercial CEO). Employer-brand page is branding noise (master §4.1 exclude).
- **Flags:** none.

### RATP Dev

- **Families:** 1, 2, 3, 5, 6, 7 (extended pass).
- **Queries run:**
  - `"RATP Dev" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR "HR transformation" OR "capital humain" OR "ressources humaines") (appointed OR joins OR named OR nomination) September 2026`
  - `site:ratpdev.com (nomination OR nommé OR appointed OR leadership OR gouvernance) (RH OR "ressources humaines" OR talent OR formation) 2026`
  - **ISO `fr`:** `"RATP Dev" (nomination OR nommé OR rejoint OR "prend la fonction") ("ressources humaines" OR talents OR formation OR "capital humain") septembre 2026`
  - `"RATP Dev" "Florence Yvan" OR "Directeur du Capital Humain" nomination 2026`
- **URLs fetched/opened:**
  - `https://www.ratpdev.com/en/our-governance/` — fetched. Florence Yvan listed as Senior VP – Human Resources. Directory, no in-window appointment date.
  - `https://www.ratpdev.com/fr/notre-gouvernance/` — search-opened. Same ExCom; Florence Yvan Directrice Exécutive des Ressources Humaines.
  - `https://fr.linkedin.com/posts/carole-martinez-69521a169_je-suis-ravie-de-vous-annoncer-que-depuis-activity-7420115406398484480-Of6Y` — search-opened. Dated **2026-01-22**. Carole Martinez DRH BU France & Suisse effective **1 January 2026**.
  - `https://drh.ma/nomination-moulay-youssef-elouedghiri-idrissi-nomme-directeur-du-capital-humain-de-ratp-dev-casablanca/` — search-opened. Dated **30 January 2026**. Casablanca human-capital director.
  - `https://www.cegid.com/global/case-studies/ratp-dev/` — search-opened. Historical Talentsoft case; not an appointment.
- **Outcome:** Excluded. 2026 HR moves found are January–February; none in 8–14 September.
- **Commercial gate score / reason:** Not scored: date rule failed.
- **Cross-signal hint:** none.
- **Flags:** none on fetched governance pages.

### Schneider Electric

- **Families:** 1, 2, 3, 4, 5, 6, 7 (extended pass).
- **Queries run:**
  - `"Schneider Electric" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR "HR transformation" OR CHRO OR "Chief Human Resources") (appointed OR joins OR named) September 2026`
  - `site:se.com/ww/en/about-us/newsroom (appoints OR appointed) (HR OR talent OR learning OR "human resources" OR CHRO) 2026`
  - **ISO `fr`:** `"Schneider Electric" (nomination OR nommé OR rejoint OR "prend la fonction") ("ressources humaines" OR talents OR formation OR DRH) septembre 2026`
  - `"Schneider Electric" "Frederic Thau" OR "Niharika Mohan" OR "Clémentine Al-Elimat" HR 2026`
- **URLs fetched/opened:**
  - `https://www.se.com/ww/en/about-us/newsroom/news/` — search-opened. Latest 2026 newsroom items (3 Aug arc-flash study; 30 Jul H1 results) contain no people-leader appointment.
  - `https://www.hrobserver.com/schneider-electric-appoints-niharika-mohan-as-the-chro-for-india/` — search-opened. Greater India CHRO effective **1 January 2026**.
  - `https://www.linkedin.com/posts/cxo-tech-bot_fredericthau-schneiderelectric-hrtransformation-activity-7470663606293155840-xLPG` — search-opened. Dated **2026-06-11**. Frederic Thau VP, HR Transformation (LinkedIn/aggregator; no company newsroom corroboration in this pass).
  - `https://hrtoday.in/clementine-al-elimat-appointed-vice-president-hr-power-systems-at-schneider-electric/` — search-opened. February 2026 VP HR Power Systems.
  - `https://www.linkedin.com/posts/jeanette-bardrum-8039485_i-am-proud-and-grateful-to-share-that-i-am-activity-7490402346028474368-mMT8` — search-opened. Dated **2026-08-04**. Jeanette Bardrum HR Director Denmark (LinkedIn; country HR; outside window).
  - `https://www.escpalumni.org/fr/mobilites/michael-fossat-est-promu-directeur-des-ressources-humaines-france-de-schneider-electric-a-ce-poste-depuis-octobre-2025-en-remplacement-de-dominique-laurent-michael-est-sous-la-responsabilite-directe-de-dominique-laurent-directeur-des-ressources-humain-4064` — search-opened. Michaël Fossat DRH France since **October 2025**.
- **Outcome:** Excluded. Charise Le remains group CHRO (since April 2020). No verified September 2026 learning/talent/HR-transformation appointment.
- **Commercial gate score / reason:** Thau item would be in-scope *if* dated in-window with company confirmation; June LinkedIn fails date + corroboration.
- **Cross-signal hint:** none for in-window URLs. Thau post is not an appointment in this window (`S2` near-miss, date fail).
- **Flags:** none.

### Sony Music Entertainment

- **Families:** 1, 2, 3, 4, 5.
- **Queries run:**
  - `"Sony Music Entertainment" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR "People Experience" OR CHRO OR "HR transformation") (appointed OR joins OR named) September 2026`
  - `site:sonymusic.com OR site:boards.greenhouse.io (appointed OR appointment OR "People eXperience" OR "Head of Talent" OR CHRO) Sony Music 2026`
  - `Sony Music "VP People eXperience" OR "Vice President People Experience" Greenhouse job OR vacancy OR hiring 2026`
  - `"Sony Music" "Andrew Davis" OR "Maria Neve-Brownlee" appointed 2026`
- **URLs fetched/opened:**
  - `https://job-boards.greenhouse.io/sonymusicentertainment/jobs/8777995002` — fetch **HTTP 409**. Search/snippet: VP, People eXperience, The Orchard / West Coast **vacancy published 2026-09-03**.
  - `https://diversityjobs.com/career/18089693/Vice-President-People-Experience-West-Coast-California-Los-Angeles` — fetched. Same VP People eXperience West Coast **job listing** (aggregator date 26 Aug 2026; Greenhouse published 3 Sep). Text is a vacancy (“You join…”) not a named appointment.
  - `https://www.sonymusic.com/executives/` — fetch **timed out**. Search snippet lists Andrew Davis as incumbent EVP & Global Chief People Experience Officer.
  - `https://www.sonymusic.com/sonymusic/andrew-davis-sony-music-entertainment-evp-global-chief-human-resources-officer/` — search-opened. Appointment dated **15 December 2020**.
  - `https://www.sonymusic.com/inside-sony-music/hr-is-now-px-heres-why/` — search-opened. 2022 PX rebrand, not a 2026 appointment.
  - `https://www.bizasialive.com/sony-pictures-networks-india-appoints-amit-mehta-as-chief-human-resources-officer/` — search-opened. **10 September 2026** CHRO appointment at **Sony Pictures Networks India** — wrong legal entity vs Sony Music Entertainment row.
- **Outcome:** Excluded. Greenhouse/aggregator items are **vacancies**, not appointments (per batch caution). Amit Mehta is SPNI, not this row. Incumbent PX leadership unchanged in-window.
- **Commercial gate score / reason:** Vacancy excluded (master §4.1 single posting). Wrong-entity CHRO excluded (`RF-IDENTITY`).
- **Cross-signal hint:** `S4` on Greenhouse VP People eXperience listings.
- **Flags:** `RF-BLOCKED-ATS` (Greenhouse 409); `RF-FETCH` (sonymusic.com/executives timeout); `RF-IDENTITY` (SPNI vs Sony Music Entertainment).

### Stellenbosch University

- **Families:** 1, 2, 3, 5, 6, 7 (extended pass).
- **Queries run:**
  - `"Stellenbosch University" ("Chief Learning Officer" OR "Head of Talent" OR "HR transformation" OR "Chief Human Resources" OR "Director: Human Resources") (appointed OR joins OR named) September 2026`
  - `site:sun.ac.za OR site:su.ac.za (appointed OR appointment OR "Chief People Officer" OR "Human Resources") September 2026`
  - **ISO `af`:** `"Universiteit Stellenbosch" (aangestel OR benoem OR "nuwe") (HR OR talent OR "menslike hulpbronne" OR leer OR opleiding) September 2026`
  - `"Stellenbosch University" "Acting Chief People Officer" OR "Miriam Hoosain" 2026`
- **URLs fetched/opened:**
  - `https://www.su.ac.za/en/about/governance/executive-management` — fetch blocked by Cloudflare bot-check (`RF-FETCH`). Search snippet: Prof Nico Koopman **Acting Chief People Officer**; Prof Liezl van Dyk DVC Learning and Teaching. Acting CPO effective **1 July 2026** per LinkedIn.
  - `https://www.linkedin.com/posts/prof-nico-koopman-a4360260_so-tuesday-30-june-was-my-last-day-as-activity-7479919642749140992-_wlP` — search-opened. 30 June last DVC day; Acting CPO from 1 July; permanent CPO recruitment underway.
  - `https://bebee.com/za/jobs/chief-people-officer-human-destiny-executive-search-and-recruitment-western-cape--techmap_za_4415214617` — search-opened. CPO vacancy; applications closed **22 June 2026**.
  - `https://chro.co.za/articles/stellenbosch-universitys-newly-appointed-chief-director-of-human-resources-miriam-hoosain-says-her-curious-nature-thrives-in-academia/` — search-opened. Miriam Hoosain Chief Director: HR, **26 January 2024**.
  - `https://files.su.ac.za/public/governance/documents/2026-06/annual-report-2025.pdf` — fetched (large PDF). 2025 integrated report / June 2026 file; Performance Advancement Framework training in 2026 — not an appointment announcement.
- **Outcome:** Excluded. Acting CPO is July 2026; permanent CPO still a search as of snippets. No 8–14 September appointment.
- **Commercial gate score / reason:** Not scored: date + vacancy/acting status.
- **Cross-signal hint:** `S4?` on the still-open/closed CPO search (hiring, not an appointment). `S5?` on annual-report Performance Advancement Framework (skills/performance, not appointment).
- **Flags:** `RF-FETCH` (su.ac.za Cloudflare on executive-management page).

### Toyota SA

- **Families:** 1, 2, 3, 5, 6, 7 (extended pass).
- **Queries run:**
  - `"Toyota SA" OR "Toyota South Africa" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR "HR transformation" OR "Chief People Officer") (appointed OR joins OR named) September 2026`
  - `site:toyota.co.za (appointed OR appointment OR "vice president" OR HR OR talent OR learning) 2026`
  - **ISO `af`:** `"Toyota Suid-Afrika" OR "Toyota South Africa" (aangestel OR benoem OR "nuwe") ("menslike hulpbronne" OR talent OR leer OR HR) September 2026`
  - `"Toyota South Africa Motors" "Khaya Ngcwembe" OR "Abey Kgotle" 2026`
- **URLs fetched/opened:**
  - `https://www.linkedin.com/posts/toyota-sa_toyotasouthafrica-leadership-corporateaffairs-activity-7498017533824954369-07-2` — search-opened. Dated **2026-08-25**. Abey Kgotle VP: Corporate Affairs **effective 1 September 2026**. Remit is government/society/governance/reputation — **not** learning/talent/HR transformation. Publication **25 Aug** (outside window).
  - `https://www.toyota.co.za/discover/about-toyota/leadership` — search returned “Failed to fetch module data”.
  - `https://www.toyota.co.za/connect/article/toyota-hilux-investment-south-africa` — fetch **timed out**. Search snippet: manufacturing talent pipeline / Global Skills Training; Nigel Ward VP Manufacturing. Not an appointment.
  - `https://www.bizcommunity.com/article/toyota-sa-opens-applications-for-2027-graduate-programme-523960a` — search-opened. Graduate programme; Khaya Ngcwembe quoted as VP Human Resources Management. Applications closed 21 Aug 2026. Master §4.1 graduate-programme exclude.
  - `https://www.linkedin.com/posts/avela-gronemeyer-8b03799_upcoming-orada-leadership-conversation-activity-7425467296258621440-3hiy` — search-opened. Dated **2026-02-06**. ORADA conversation with Ngcwembe on AI/workforce transition. **Not an appointment.**
- **Outcome:** Excluded. Kgotle is Corporate Affairs (wrong remit + announcement 25 Aug). Ngcwembe remains VP HR; no in-window people appointment.
- **Commercial gate score / reason:** Kgotle not scored as Signal 2 (wrong scope). Graduate programme excluded by gate.
- **Cross-signal hint:** `S1` on the February ORADA Ngcwembe conversation (VP+ HR commentary; not an appointment — 7.1b; also outside this window). `S5?` on Hilux/manufacturing skills snippets.
- **Flags:** `RF-FETCH` (toyota.co.za leadership module fail; Hilux article timeout).

### TTEC

- **Families:** 1, 2, 3, 4, 5.
- **Queries run:**
  - `"TTEC" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR "HR transformation" OR "Chief People Officer" OR CHRO) (appointed OR joins OR named) September 2026`
  - `site:ttec.com OR site:investors.ttec.com (appointed OR appointment OR named) (HR OR People OR talent OR learning OR CHRO) 2026`
  - `"Julie Stone" TTEC Perform RealSkill 2026 date OR September OR August`
  - `"TTEC" "Laura Butler" "Chief People Officer" 2026`
- **URLs fetched/opened:**
  - `https://www.ttec.com/about-us/executive-team` — fetch **timed out**.
  - `https://investors.ttec.com/corporate-governance/management` — fetch **timed out**. Search snippet: Laura Butler CPO, returned 2023.
  - `https://investors.ttec.com/news-releases/news-release-details/ttec-announces-laura-butler-chief-people-officer` — search-opened. **14 June 2023** CPO appointment.
  - `https://www.ttec.com/newsroom/press-release/ttec-sets-new-standard-for-ai-driven-frontline-performance` — fetch Cloudflare-blocked. Search: dated **16 February 2026**; Julie Stone quoted as Group VP and CLO. Product launch, not an appointment.
  - `https://thetechbriefs.com/ttec-realskill-wins-gold-for-best-use-of-ai-for-learning-at-2026-brandon-hall-group-hcm-excellence-awards/` — search-opened. **24 August 2026** award; Stone quoted. Not an appointment; outside window.
  - `https://www.linkedin.com/posts/julie-stone-talent-leader_aiforlearning-humanperformance-futureofwork-activity-7499139198172499969-s0T3` — search-opened. Dated **2026-08-28**. CLO award post. **Not an appointment.**
- **Outcome:** Excluded. CLO/CPO are incumbents. August award posts are outside window and are not appointments.
- **Commercial gate score / reason:** Not scored as Signal 2.
- **Cross-signal hint:** `S1` on Stone 28 Aug LinkedIn (VP+ CLO commentary; not an appointment — 7.1b; date is prior week). `S6?` on RealSkill/Perform product (HR-tech learning platform; customer-corroboration still required for S6).
- **Flags:** `RF-FETCH` (ttec.com executive-team timeout; investors management timeout; ttec.com newsroom Cloudflare).

### Viasat

- **Families:** 1, 2, 3, 5 (extended pass).
- **Queries run:**
  - `"Viasat" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR "HR transformation" OR CHRO OR "Chief People Officer") (appointed OR joins OR named) September 2026`
  - `site:viasat.com (appointed OR appointment OR named OR joins) (People OR HR OR talent OR learning OR CHRO) 2026`
  - `"Rebecca Grattan" Viasat "Chief People" 2026`
  - `"Viasat" "Senior Director, Talent, Performance & Development"`
- **URLs fetched/opened:**
  - `https://www.viasat.com/content/dam/us-site/legal/documents/Viasat-UK-Gender-Pay-Gap-Report-2026.pdf` — fetched. **March 2026** UK gender pay report. Rebecca Grattan, Chief People, Brand & Culture Officer, on Performance/Development/Reward cycle and manager training. **Not an appointment.**
  - `https://www.viasat.com/news/latest-news/corporate/2026/viasat-appoints-shekar-ayyar-jinhy-yoon-board-directors-cooperation-carronade-capital/` — search-opened. **7 May 2026** board appointments; not people/L&D.
  - `https://www.linkedin.com/posts/deborah-potter-a04876_i-am-pleased-to-announce-that-i-have-accepted-activity-7485061652649009152-bhAO` — search-opened. Dated **2026-07-20**. Interim Head of EMEA & APAC – People Solutions (LinkedIn; outside window).
  - `https://careers.viasat.com/jobs/6558?lang=en-us` — search-opened (iCIMS shell). Senior Director, Talent, Performance & Development **vacancy**.
  - `https://www.linkedin.com/in/jon-grimaud-8509987` — search-opened. Director, Learning and Leadership Development since **December 2025** (LinkedIn-only).
- **Outcome:** Excluded. Grattan remains CPCO (since April 2024). No in-window named appointment.
- **Commercial gate score / reason:** Gender-pay PDF is a statement, not an appointment. Vacancy excluded by gate.
- **Cross-signal hint:** `S1` on Grattan gender-pay foreword (VP+/CPO-tier people commentary; not an appointment — 7.1b; March 2026 date). `S4` on Senior Director Talent vacancy. `S3?` on Performance, Development and Reward cycle language in the pay-gap report.
- **Flags:** `RF-BLOCKED-ATS` (Viasat iCIMS careers shell for job 6558).

### Viasat Government

- **Families:** 1, 2, 3, 5, 7 (atomic row; dedicated name used; shared viasat.com domain documented).
- **Queries run:**
  - `"Viasat Government" ("Chief People Officer" OR "Head of Talent" OR "HR transformation" OR learning) (appointed OR joins OR named) 2026`
  - `"Viasat Government" (Damion Moore OR "People & Culture" OR CHRO) (appointed OR joins OR named) September 2026`
  - `site:viasat.com "Viasat Government" (People OR HR OR talent) (appointed OR appointment) 2026`
  - `"Anders Strothman" "Viasat Government" People 2026`
- **URLs fetched/opened:**
  - `https://www.linkedin.com/in/damion-moore-249a818` — search-opened. Chief People Officer, Viasat Government since **July 2025**.
  - `https://www.linkedin.com/in/andersstrothman` — search-opened. VP People & Culture, Viasat Government & Global Services; prior interim CPO 2022–2024. No September 2026 appointment announcement.
  - `https://theorg.com/org/viasat-inc/person/anders-strothman` — search-opened. Directory, undated appointment.
  - `https://www.linkedin.com/in/harsha` — search-opened. Sr. Director, People Strategy, Viasat Government HRLT (AI/workforce planning). Profile, not an in-window appointment wire.
  - `https://www.linkedin.com/posts/viasat-government_viasat-is-pleased-to-share-it-has-been-selected-activity-7470810862950264832-oATW` — search-opened. **11 June 2026** Space Force contract; not people leadership.
- **Outcome:** Excluded. Government CPO is a 2025 incumbent. No 8–14 September appointment. Corporate Viasat newsroom does not substitute for this row; dedicated queries run.
- **Commercial gate score / reason:** Not scored: no in-window appointment.
- **Cross-signal hint:** `S1?` on Harsha Raghavan profile (people-strategy/AI commentary; not an appointment; LinkedIn-only).
- **Flags:** none beyond LinkedIn-only incumbents (unverified as appointments).

### VON Canada

- **Families:** 1, 2, 3, 5.
- **Queries run:**
  - `"VON Canada" OR "Victorian Order of Nurses" ("Chief Learning Officer" OR "Head of Talent" OR "HR transformation" OR CHRO OR "Chief People Officer") (appointed OR joins OR named) September 2026`
  - `site:von.ca (appointed OR appointment OR named OR joins) (HR OR People OR talent OR learning OR "human resources") 2026`
  - `"VON Canada" "Wendy Steele" OR "Director Labour" 2026`
- **URLs fetched/opened:**
  - `https://von.ca/en/about-von/senior-leadership-team` — fetched. Wendy Steele listed as VP, Human Resources. Directory.
  - `https://von.ca/en/about-von/senior-leadership-team/wendy-steele` — search-opened. Joined VON as VP HR in **2019**.
  - `https://von.ca/en/news/introducing-vons-new-director-professional-practice-and-education` — fetched. Thien Trang Director, Professional Practice and Education; dated **3 May 2024**.
  - `https://www.von.ca/en/news/von-canada-president-and-ceo-jo-anne-poirier-announces-retirement-plans` — search-opened. **15 April 2026** CEO retirement/search; not people/L&D appointment.
  - `https://www.linkedin.com/posts/von-canada_hiring-liveeveryday-voncanada-activity-7495841583481782274-JTmD` — search-opened. Dated **2026-08-19**. **Hiring** Director Labour and Employee Relations (Nova Scotia). Vacancy.
- **Outcome:** Excluded. No in-window people/L&D/HR-transformation appointment.
- **Commercial gate score / reason:** Labour-relations vacancy excluded (posting, not appointment). CEO search is not Signal 2.
- **Cross-signal hint:** `S4` on Director Labour and Employee Relations hiring post.
- **Flags:** none.

### Wood Mackenzie

- **Families:** 1, 2, 3, 5.
- **Queries run:**
  - `"Wood Mackenzie" ("Chief Learning Officer" OR "Head of Learning" OR "Head of Talent" OR "HR transformation" OR CHRO OR "Chief People Officer") (appointed OR joins OR named) September 2026`
  - `site:woodmac.com (appointed OR appointment OR joins) (HR OR talent OR learning OR "human resources") 2026`
  - `"Wood Mackenzie" "Director, Talent Development" OR "Alex Reeves" OR "Eilish Henson" 2026`
- **URLs fetched/opened:**
  - `https://www.woodmac.com/about/our-people/` — fetched. Eilish Henson still EVP, Head of Human Resources; Jenny Sadler Director of Talent Acquisition. Danny Dunn CCO / Bernardo Rodriguez CPTO are commercial/tech (2025 appointments).
  - `https://www.woodmac.com/profiles/people-profiles/eilish-henson/` — search-opened. Incumbent people-strategy bio; no 2026 appointment date.
  - `https://www.woodmac.com/press-releases/wood-mackenzie-appoints-new-chief-commercial-officer/` — search-opened. **1 December 2025** CCO; not people/L&D.
  - `https://www.linkedin.com/posts/jenny-sadler-24a8b69_director-talent-development-activity-7437788642900639744-d4YG` — search-opened. Dated **2026-03-12**. **Vacancy** Director, Talent Development reporting to Henson.
  - `https://www.linkedin.com/in/alex-reeves-0771a6141` — search-opened. VP Talent and Organisational Development (LinkedIn; AI in learning). Not an in-window company announcement.
- **Outcome:** Excluded. No September 2026 people/L&D appointment. March Talent Development Director item is a job ad.
- **Commercial gate score / reason:** Commercial/product officer wires excluded (no workforce/HR remit). Vacancy excluded by gate.
- **Cross-signal hint:** `S4` on Director Talent Development vacancy. `S1?` on Reeves LinkedIn (VP+ talent/OD commentary; not an appointment).
- **Flags:** none.

### Woolworths

- **Families:** 1, 2, 3, 5, 6, 7 (extended pass; SA entity `woolworths.co.za` / WHL, not AU).
- **Queries run:**
  - `"Woolworths" South Africa OR woolworths.co.za ("Chief People Officer" OR "Head of Talent" OR "HR transformation" OR "Chief Human Resources" OR "Head of Learning") (appointed OR joins OR named) September 2026`
  - `site:woolworthsholdings.co.za (People OR HR OR talent OR "Group People Director") (appointed OR appointment) 2026`
  - **ISO `af`:** `"Woolworths" (aangestel OR benoem OR "nuwe") ("menslike hulpbronne" OR talent OR leer OR HR) September 2026 site:woolworths.co.za OR "Suid-Afrika"`
  - `"Woolworths Holdings" "Melanie Naidu" OR "organisational reset" 2026`
- **URLs fetched/opened:**
  - `https://www.woolworthsholdings.co.za/woolworths-announces-organisational-reset/` — fetched. Dated **23 June 2026**. Operating-model reset under CEO Sam Ngumeni. **“People is led by Group People Director, Melanie Naidu” — unchanged.** Other new roles are Food CEO, FBH CEO, COO, CDTO, interim CMO — not people/L&D.
  - `https://www.woolworthsholdings.co.za/category/group-executives/` — fetched. Melanie Naidu Group People Director appointed **6 May 2022**.
  - `https://www.woolworthsholdings.co.za/directorate/directors/` — search-opened. Same People Director bio.
  - `https://careers.woolworths.co.za/applicant/index.php?controller=Listings&listingid=bf9bb429-a555-4f8c-a90a-c5fff1e5868b&method=view` — search-opened. Training Specialist: Food Academy vacancy (apply-by 27 June **2025**).
  - `https://www.woolworths.co.za/content/article/employee-benefits/development-opportunities/_/A-cmp100617` — search-opened. Evergreen L&D/employer-brand page; not an appointment.
- **Outcome:** Excluded. June reset explicitly keeps People leadership unchanged. No 8–14 September people appointment. SA entity confirmed (WHL / woolworths.co.za), not Woolworths AU.
- **Commercial gate score / reason:** Org reset is operating-model (possible S3) but People lane is unchanged; not Signal 2.
- **Cross-signal hint:** `S3` on the 23 June organisational reset (accountability/operating model; People function unchanged).
- **Flags:** none on WHL pages. Careers listings are vacancies (`S4` not used — dated 2025 / generic HRBP).

---

## Batch summary

- **Batch id:** S2-B03
- **Rows assigned:** 15
- **Rows with ≥1 Part A′ entry:** 0
- **Flags (count by type):**
  - **RF-FETCH:** 6 account contexts (Oscar careers 422; Stellenbosch Cloudflare; Toyota leadership/Hilux; TTEC executive/newsroom/investors; Sony executives timeout)
  - **RF-BLOCKED-ATS:** 3 (Sony Greenhouse 409; Oscar Greenhouse People Strategy Lead; Viasat iCIMS job 6558)
  - **RF-IDENTITY:** 1 (Sony Pictures Networks India Amit Mehta CHRO vs Sony Music Entertainment row)
- **§7.1a logged:** Orange Business `fr`; Pierre Fabre `fr`; RATP Dev `fr`; Schneider Electric `fr`; Phoenix Contact `de`; Stellenbosch University `af`; Toyota SA `af`; Woolworths `af`.
- **Master §7.2 sweep:** pending orchestrator (not waived).
- **Cross-signal harvest for orchestrator:** S1 (Orange Aufils May interview; Toyota Ngcwembe Feb ORADA; Viasat Grattan pay-gap; TTEC Stone Aug CLO post); S3 (Woolworths June reset); S4 (Oscar People Strategy Lead; Sony VP PX Greenhouse; VON labour-relations vacancy; WoodMac Talent Development vacancy; Viasat Senior Director Talent vacancy); S5?/S6? as marked above.
