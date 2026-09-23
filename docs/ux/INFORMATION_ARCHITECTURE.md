# ZaPan v2 — Information Architecture & UX Foundation

## Status
Phase 1 foundation. Current screens are truthful placeholders for not-yet-implemented learning data.
Visual polish may change; navigation and product hierarchy are the important contract.

## Product hierarchy
Primary learning destinations:
1. Today / Home
2. Learn
3. Review
4. Library
5. Progress
Practice modes are secondary tools and do not replace the main learning flow.
Settings/Profile is utility navigation, not a sixth learning destination.

## Desktop navigation
Persistent sidebar when viewport permits.
Brand at top, primary destinations in the middle, low-noise ownership/status at bottom.
Current Instagram mark: `@trunk.ng` -> `https://www.instagram.com/trunk.ng/`.
Sidebar must not compete visually with the study surface.

## Mobile navigation
Bottom navigation contains the same five primary destinations.
A compact top bar preserves ZaPan identity and makes the Instagram owner mark discoverable.
Controls must remain usable at narrow supported widths without horizontal overflow.

## Today / Home target
Future real dashboard may show:
- due reviews;
- limited new material;
- weak/slow reinforcement;
- estimated session duration;
- active learning path;
- real daily/weekly activity.
No metric appears until its event/update pipeline exists.
## Learn target
Organize by curriculum and progress state, not by a wall of game buttons.
N5 initial structure:
- Kana: Hiragana, Katakana, Confusables
- Vocabulary topics
- Kanji topics
Future Grammar/Reading/Listening appear only when content exists.
Custom multi-group practice remains available as an advanced/secondary path.

## Review target
Review is a first-class destination.
Show real due/weak counts and explain why an item is in the queue when useful.
A review session ends with a concise evidence-based summary and mistake recovery option.

## Library target
One searchable reference space for Kana/Vocab/Kanji and later Grammar/Reading/Listening/PDF references.
Library browsing does not automatically grant mastery credit.
Flashcards/reference views are distinct from scored learning events unless the interaction explicitly becomes practice.

## Progress target
Use canonical event/progress data only.
Target views: domain mastery, weak items, accuracy, measured response time, review forecast, weekly activity, heatmap/streak.
Avoid one vague global score that hides which skill is weak.

## Visual semantics
Brand/primary: blue/indigo family.
Kana accent: pink.
Vocabulary accent: green.
Kanji accent: orange/amber.
Success/error/due colors retain semantic meaning and are not reused randomly per game.
Current implementation uses CSS custom-property tokens, not a component-library dependency.

## Accessibility baseline
- browser zoom remains enabled;
- visible keyboard focus;
- skip link;
- semantic links/buttons/headings;
- icon-only controls need accessible names;
- no color-only correctness signal;
- touch targets around 44px or greater where practical;
- reduced-motion media preference respected;
- responsive layout tested in a mobile browser profile.
## Owner branding requirement
Instagram is an ownership mark, not a disruptive ad.
Desktop: visible in sidebar metadata.
Mobile: visible in compact top bar.
Link opens a new tab and uses `noopener noreferrer`.
The exact icon may be refined later, but destination and accessibility behavior are release requirements.

## Truthful placeholder policy
During phased development, unfinished screens may explain their current state.
They must not fabricate:
- streak counts;
- mastery percentages;
- due counts;
- study minutes;
- leaderboard entries;
- cloud sync success.
When a data path becomes verified, placeholder copy is replaced with real behavior.

## Interaction feedback direction
Correct/incorrect feedback should be fast but not visually overwhelming.
Session modes share core card interaction patterns where possible.
Animations are optional enhancement and must respect reduced motion.
Error messages explain recovery rather than expose raw backend details.

## Responsive acceptance baseline
At minimum during active development:
- desktop Chromium profile;
- mobile Chromium profile;
- no unintended horizontal overflow;
- primary navigation accessible;
- ownership link accessible;
- focus and tap targets remain usable.
Release phase expands browser/device coverage.
