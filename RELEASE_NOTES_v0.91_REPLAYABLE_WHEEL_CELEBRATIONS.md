## Latest update: G2 v0.91 (2026-11-08) — persistent, replayable Wheel-only Chichi
- Based strictly on the previous three-celebration release (chichi-g2-lions_v0.90_Three_Celebrations.zip).
- A Chichi reward now appears ONCE on newly completing an entire normal Wheel level or a 15-segment Wheel+ level; no reward for individual correct answers.
- The character remains in a small, non-blocking lower-right panel until the student closes it with × or leaves the Wheel activity.
- Clicking/tapping Chichi replays the same animation and sound; the next completed wheel selects a different animation (no immediate repeats).
- Existing question scoring, unlocking and normal milestone text remain intact; ordinary answers still play their original correctness sound.
- Static Wheel Master art in the milestone text remains static; it does not automatically dance just because a saved completion screen was revisited.
- Panel supports mouse, touch and keyboard, visible focus and reduced-motion preferences. No app-wide backgrounds, hotspots or lesson content altered.
- QC: changed sources and ZIP integrity verified; targeted interaction/browser QC in this session (see release notes). Not deployed.

How to test: complete a normal Starter/Challenge/Master Wheel or a Wheel+ 15th segment. Chichi appears, can be tapped repeatedly to replay, and remains until × or leaving the Wheel page. Correct intermediate answers and wrong answers never trigger the dancing panel. This is a full Cloudflare Pages ZIP; do not combine files from earlier builds.
