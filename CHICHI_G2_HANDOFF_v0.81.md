# CURRENT — G2 Lions v0.79 (2 November 2026)

- Base v0.77, with all Week 1–4 study materials, 90 Week 4 Wheel Spin questions, and 36 Ryan recordings preserved.
- Final Exam Prep art approved: grayscale, only Chichi and red Coming Soon badge in colour. Exact 2-column banner at 1600×450 desktop and full image on mobile; Weeks 5–6 remain unavailable and hidden behind locked temporary card.
- Restored original normal homepage landscape and portrait artwork; robin chirps and church bell replace the Halloween-only goblin song and ghost effect.
- Preserved Halloween assets in ZIP for optional future seasonal rollback.
- Old base rollback: chichi-g2-lions_v0.77_FINAL_EXAM_PREP_COMING_SOON.zip.
- Pending: write and QC Final Exam Prep lessons before unlocking.

# Current G2 Lions build v0.77 (Final Exam Prep placeholder)

- Based on v0.76 Week 4 Wheel QC.
- Weeks 1-4 preserved.
- Week 5 and 6 cards hidden temporarily and replaced by one grayscale, locked Final Exam Prep card.
- Existing weeks 5 and 6 remain unavailable; no exam exercises or links are enabled.
- Halloween, Ryan narration, Wheel Spin questions and progress handling remain unchanged.
- Rollback: chichi-g2-lions_v0.76_WEEK4_WHEEL_QUESTION_QC.zip.
- Need to add reviewed final exam preparation content before unlocking the card.

# Chichi's English Town — G2 Lions Current Handoff
Updated 2026-10-29 | Build **v0.76 — Week 4 Wheel Question QC**

## Release / rollback
- Current build: `chichi-g2-lions_v0.76_WEEK4_WHEEL_QUESTION_QC.zip`
- Immediate previous build: `chichi-g2-lions_v0.75_WEEK4_WHEEL_SPIN_FIXED.zip`
- Upgrade v0.75 → v0.76 changes only `app.js`, `index.html`, this handoff and release notes.
- v0.75 remains the fallback if necessary, but its Week 4 questions have weaker/ambiguous distractors and an incorrect flag meaning for `field`.
- Do not delete the v0.74 Ryan correction backup.

## Student access
- Weeks 1–4 available; Weeks 5–6 locked, including direct URLs.
- Week 4: "America's Past" — What Is the Story of Our Flag? / The First American Flag.
- Wheel Spin:
  - Phonics: 30 questions (ow/ou /aʊ/ and ai/ay /eɪ/); ambiguous bare spelling item clarified.
  - Words: 30 curated questions, all 23 lesson vocabulary items, seven applied questions; no random distractor generation in Week 4.
  - Reading: 30 questions from ten original short passages; focus on U.S. flag history, comparisons, inference, and evaluating sources.
  - Each wheel uses 15 standard segments and 15 distinct Wheel+ segments.
- Corrected Week 4 word definitions for land, people, state, field. A field on a flag is an area of colour.
- These are original supplementary passages, not a direct transcription of MyView's published texts.
- Teacher-only 90-question review key: `G2_Week4_Wheel_Questions_QC_v0.76.md` (distributed outside the public deployment archive).

## Preserved features
- G2 Halloween home with desktop/mobile artwork.
- Goblin plays Chichi's Halloween; church plays a gentle ghost effect.
- All 36 Week 4 Ryan recordings intact: 23 vocabulary, five Words to Know, eight adventure; the four Taegukgi pronunciation corrections on adventure pages 2/5/6/7 are retained.
- Previous Weeks 1–3 content, other Week 4 activities, student progress, layout and wheel storage keys unchanged.

## QC
- All Week 4 banks 30/30/30; no duplicate prompts within a bank; each question has three distinct choices with the answer keyed.
- Word choices and reading inference/distractors manually reviewed; American flag facts cross-checked with USA.gov and Smithsonian.
- Node syntax check passed; browser Wheel Spin and Wheel+ tests passed on 1280×800 and 390×844 viewports.
- Week 5 direct-route lock test passed.
- Verify the published website after Cloudflare deployment. Browser checks ran in an in-memory local build, not against the live URL.
- Existing localStorage progress is preserved; never reset site storage during this upgrade.

## Sources for historical fact checks
- https://www.usa.gov/flag
- https://www.si.edu/spotlight/flag-day/flag-facts
- https://bensguide.gpo.gov/the-american-flag


## v0.79 update
- Desktop homepage uses the approved daytime Chichi-and-goblin illustration shared with G1.
- Robin hotspot retained for birdsong. Goblin hotspot added for Halloween song.
- Yellow signpost now links to Contact Teacher by email on desktop.
- Portrait/mobile homepage remains the original G2 image.


## v0.80 update
- Removed the floating "Click here" onboarding badge from the homepage.
- Retained the approved daytime homepage, goblin Halloween-song hotspot, robin sound, bell, and contact sign.


## v0.81 — Adventure page navigation
- Fixed narration gate: Chichi’s Adventure pages can now be turned without listening first, for all available weeks (1–4).
- Narration is optional and can be replayed; advancing still stops audio.
- Removed stale JavaScript for the deleted Click Here onboarding badge (v0.80 regression causing a null-element error at startup).
- End-of-story reading checks unchanged.
- Homepage and previously approved artwork, Ryan MP3s, wheel banks, and Week 5–6 exam placeholder unchanged.
- Rollback: v0.80.
