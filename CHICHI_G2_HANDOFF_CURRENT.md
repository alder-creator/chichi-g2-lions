## Latest update: G2 v0.91 (2026-11-08) — persistent, replayable Wheel-only Chichi
- Based strictly on the previous three-celebration release (chichi-g2-lions_v0.90_Three_Celebrations.zip).
- A Chichi reward now appears ONCE on newly completing an entire normal Wheel level or a 15-segment Wheel+ level; no reward for individual correct answers.
- The character remains in a small, non-blocking lower-right panel until the student closes it with × or leaves the Wheel activity.
- Clicking/tapping Chichi replays the same animation and sound; the next completed wheel selects a different animation (no immediate repeats).
- Existing question scoring, unlocking and normal milestone text remain intact; ordinary answers still play their original correctness sound.
- Static Wheel Master art in the milestone text remains static; it does not automatically dance just because a saved completion screen was revisited.
- Panel supports mouse, touch and keyboard, visible focus and reduced-motion preferences. No app-wide backgrounds, hotspots or lesson content altered.
- QC: changed sources and ZIP integrity verified; targeted interaction/browser QC in this session (see release notes). Not deployed.

## Latest update: G2 v0.90 (2026-11-05)
- Based on the user-uploaded approved G2 portrait ZIP (v0.89).
- Three exact approved source GIFs: dancing, jump-and-cheer, and spin. Transparent animated WebP display copies remove the solid pale background; exact original GIFs remain bundled. Random selection avoids immediate repeats.
- Wheel correct answers (including Wheel+) show a brief musical celebration overlay; incorrect answers and spins do not. Existing scoring and progress storage unchanged.
- Existing Wheel Master visual stays intact and features the animated mascot.
- Desktop and mobile homepage artwork, navigation hotspots, exam status, Ryan/Maisie recordings all preserved.
- New CSS/JS standalone: chichi-celebrations.css/js; original GIFs and optimized transparent WebPs under assets/celebrations/.
- Rollback: user's original approved ZIP for this version.

### Verification status (2026-11-05)
- In-memory Chromium interaction tests passed at 1280×800, 390×844 and 360×640 for both grades: correct Wheel answer gave 10 points and showed a celebration; wrong answer gave none. Random selector produced all three assets with no immediate repeats.
- Standalone celebration display checked at desktop, phone portrait and phone landscape sizes; animation display fit within viewport and images decoded.
- Inline G1 JavaScript and G2 app.js syntax checked with Node; package CRC check passed. All other original source files preserved byte-identically (585 G1, 417 G2).
- LIMITATION: Environment blocks Chromium navigation to local test servers, file URLs and actual live-site pages. These are targeted in-memory tests, not a fully navigated desktop/mobile visual end-to-end audit. Live Cloudflare deployment not performed. Verify the published site after deploying.
- Rollback: retain supplied approved source ZIP (G1 v76.71, G2 v0.89).

v0.89: Exact user-approved 941x1672 portrait art, updated portrait-only hotspots; desktop unchanged; based on v0.88. Image SHA256 01094f3282882b6b032bae1d5935b8fec71c6824166f7cafcc6fbe11c3ff0581

## Latest update: G2 v0.87 (2026-11-04)
- Base: v0.86 with all lesson, Ryan audio, wheel and mobile layout fixes retained.
- Exact approved 941×1672 portrait with Chichi and goblin preserved and colour saturation gently reduced by a pixel-level operation.
- Left-pointing yellow Contact Teacher sign and its timber post composed from approved v76.62 desktop asset; no image recreation.
- Mobile contact hotspot now aligns with yellow sign. Existing desktop art / hotspot positions are unchanged.
- Rollback: v0.86.

## Latest build
- **Version:** v0.86
- **Change:** Verified full-bleed mobile portrait without beige top gap; moved Contact Teacher link onto the noticeboard. Approved desktop art and all lessons unchanged.
- **QC:** 360×640, 390×644, 412×745 and 390×844 local render/hit-target checks; JS syntax and ZIP integrity; live Cloudflare not tested.

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


## v0.84 — approved portrait used unchanged in G1 and G2
- Replaced `assets/home_g2_portrait.png` with exact user-supplied 941x1672 PNG.
- Desktop landscape image untouched.
- Calibrated phone Chichi, robin, goblin, and bell touch areas; restored visible Contact Teacher email control because portrait has no painted signpost.
- Ryan audio, Week 4 Wheel Spin, exam prep placeholder, and adventure free-turning remain unchanged.
- Rollback: v0.83, though its alternate portrait artwork is not approved.


## v0.85 (2026-11-04) — Mobile blue border removed
- Changed portrait canvas from `min()` (letterboxing with blue bars) to full-bleed viewport cover at the native 941×1672 aspect ratio.
- Keeps the approved art unchanged; portrait Chichi, robin, goblin, bell and Contact Teacher hotspots travel with the image canvas.
- Moved the contact control slightly higher to remain visible on wide phone viewports.
- Desktop art, Ryan audio, Week 4 Wheel questions, all lessons, adventure free-turning and progress unchanged.
- Rollback: v0.84.


## v0.86 — Mobile homepage layout correction (2026-11-04)
- G2 mobile portrait canvas is anchored to viewport edges, eliminating the beige top gap. Contact Teacher now uses the noticeboard instead of a cut-off floating label. Hotspots are positioned from cover-rendered portrait geometry. Desktop assets and activities remain unchanged.
- Rollback: v0.85.


## v0.88 — exact approved portrait image
- Replaced only mobile portrait art with byte-identical chichi_s_storybook_village_garden.png (941x1672); no regeneration.
- Aligned Chichi, robin, goblin, bell and yellow Contact Teacher sign tap zones.
- Desktop artwork, all week content and Adventure free-page-turning unchanged.
- Rollback: G2 v0.87.
