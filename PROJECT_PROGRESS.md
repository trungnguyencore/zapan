# ZaPan v2 — Project Progress

## Canonical status
Project root: `D:\OTHERS\LATVAT\japan`
Current phase: Phase 5 — Release engineering and production migration
Current status: PLANNED — OWNER REVIEW REQUIRED
Last verified: 2026-09-24

## Hard scope boundary
All implementation writes are restricted to this project root.
`D:\STUDY\JAPANESE` and legacy ZaPan generations are reference-only.
No outside workspace file is modified by this project without explicit owner approval.

## Phase 1 result
Phase 1 implementation and verification gates are complete.
ZaPan v2 now has a greenfield React/TypeScript/Vite application, canonical domain foundation, architecture documents, responsive shell and automated test stack.
No Firebase backend, real learning content, GitHub push or deployment was performed.

## Verified completed work
- Canonical root docs: implementation, engineering roadmap, learning roadmap, decisions, evidence and agent rules.
- Local Git repository initialized inside the project root.
- React 19 + TypeScript + Vite greenfield scaffold under `app/`.
- Primary routes: Today, Learn, Review, Library, Progress.
- Desktop sidebar and mobile bottom navigation.
- Instagram owner mark for `@trunk.ng` on desktop and mobile.
- CSS semantic design tokens, visible focus, skip link, reduced-motion handling and browser zoom support.
- Stable Card ID create/parse foundation.
- One deterministic ZaPan SRS v1 engine.
- Canonical StudyEvent / StudySession / ProgressRecord types.
- Progress reducer with measured-response sample accounting.
- Runtime Firebase config validation boundary without real credentials/config.
- Vitest + Testing Library + Playwright test foundation.
## Final Phase 1 gate
- lint: PASS, 0 warnings / 0 errors;
- unit/component tests: PASS, 23/23;
- TypeScript + production Vite build: PASS;
- Playwright desktop smoke: PASS;
- Playwright mobile smoke: PASS;
- manual desktop/mobile screenshot inspection: PASS;
- Git status inspected: PASS;
- evidence updated: PASS.
See `PROJECT_EVIDENCE.md` for exact failures, corrections and observed output.

## Phase 2 result
Phase 2 implementation and verification gates are complete.
Verified Phase 2 slices:
- local-first IndexedDB persistence;
- versioned content pipeline with 92 audited basic Kana cards.
Verified Phase 2 backend/auth/sync:
- persistent Guest identity;
- Firebase v2 project separated from legacy backend;
- production Email/Password Auth enabled and signup/signin/cleanup verified;
- Anonymous Auth disabled and email-enumeration protection enabled;
- Firestore production database created in asia-southeast1 with delete protection;
- Firestore ownership/schema rules verified on emulator and deployed;
- local IndexedDB isolated per Guest/account identity;
- immutable StudyEvent cloud journal with deterministic replay reconciliation;
- two offline clients for one account converged to the same local/cloud progress in emulator tests.
Verified learning slice:
- real Today queue (due review first, then limited new cards);
- real Learn/Review/Progress pages backed by IndexedDB;
- real Kana typing session persisted as StudyEvent/ProgressRecord;
- browser reload persistence verified end-to-end;
- Account UI lazy-loads Firebase without blocking Guest;
- Firebase Auth/Firestore are capability-split so production build has no >500 kB chunk warning;
- verified N5 Vocabulary (923 cards / 15 topics) and Kanji (109 cards / 10 topics) are loaded as separate dynamic content chunks;
- Learn exposes all verified Kana/Vocabulary/Kanji topics with real per-topic progress;
- Vocabulary/Kanji typed-reading sessions write to the same StudyEvent/SRS pipeline and reveal audited metadata only after answering.

## Final Phase 2 gate
- verified content repository: 1,124 cards total (92 Kana + 923 N5 Vocabulary + 109 N5 Kanji);
- lint: PASS, 0 warnings / 0 errors;
- normal unit/component tests: PASS, 71/71;
- TypeScript + production Vite build: PASS with no >500 kB chunk warning;
- local Playwright desktop/mobile matrix: 6 executed PASS, 6 intentional environment-specific skips;
- Firebase Auth/Firestore emulator integration: PASS, 12/12;
- production account/cloud-sync browser smoke: PASS across two isolated browser contexts;
- temporary production test Firestore data cleanup: PASS;
- temporary production test Auth account cleanup: PASS;
- production dependency audit: PASS, 0 vulnerabilities;
- git diff whitespace check: PASS.
See `PROJECT_EVIDENCE.md` for the production identity-race failures that were caught and corrected before this gate became green.

## Phase 3 result
Phase 3 implementation and verification gates are complete.
Verified Phase 3 scope:
- Library searches the full verified 1,124-card repository across real Kana/Vocabulary/Kanji fields and caps DOM rendering without truncating result counts;
- Custom Practice, Writing, Time Attack, Survival, Match and Confusables all emit canonical StudyEvents into the same SRS/progress model; measured timing is recorded only where a real interaction duration exists;
- Progress derives measured study time, streak, active days, weekly totals and a 28-day heatmap from persisted StudyEvents;
- Roadmap exposes only the four currently verified learner stages: Hiragana, Katakana, N5 Vocabulary and N5 Kanji; unavailable Grammar/Reading/Listening/N4/N3 remain inactive;
- secondary/heavier routes are lazy-loaded to protect the core bundle;
- explicit System/Light/Dark preference is persisted locally and applied before React render;
- pathname navigation moves keyboard/screen-reader focus to main content while query-only practice transitions preserve interaction focus;
- desktop/mobile Instagram ownership branding, 44px touch-target policy, mobile no-overflow checks, skip navigation, visible focus and reduced-motion behavior are verified;
- eight checked-in visual baselines cover Learn, Roadmap, Match setup and Writing setup on desktop/mobile.

## Final Phase 3 gate
- lint: PASS, 0 warnings / 0 errors;
- normal unit/component tests: PASS, 102/102 across 31 files;
- TypeScript + production Vite build: PASS;
- core production JS entry: 483.96 kB, below the Vite 500 kB warning threshold; no chunk-size warning;
- Playwright full matrix: 31 executed PASS, 7 intentional environment-specific skips;
- visual regression: PASS on 8 baselines after introducing a strict 30-pixel full-page tolerance for theme-icon rasterization noise; baselines were not regenerated to hide the difference;
- manual inspection of all 8 baseline PNGs: PASS for desktop/mobile layout, hierarchy and overflow;
- mobile audit: all visible actionable controls on nine secondary routes satisfy the 44px-height gate and no horizontal overflow was observed;
- Firebase Auth/Firestore emulator regression: PASS, 16/16;
- production dependency audit: PASS, 0 vulnerabilities;
- git diff whitespace check: PASS after removing one trailing blank line detected by the first closeout attempt.
See `PROJECT_EVIDENCE.md` E-045 for the exact final failures, corrections and reruns.

## Phase 4 result
Phase 4 hardening and the currently verified/source-gated content scope are VERIFIED.
Verified hardening slices:
- production builds emit a Vite manifest and `npm run check` includes a manifest-based JS bundle budget gate;
- the core entry budget is 490.00 kB raw and every JS chunk has a 500.00 kB raw upper bound;
- current production artifact after recovery hardening measures core 486.05 kB and largest non-entry chunk 434.97 kB;
- the blocking path was exercised against generated `dist` output: a temporary +7 kB entry probe produced 490.97 kB and `check:bundle` failed as designed; rebuilding restored the clean artifact and the gate passed again;
- reusable production-preview runtime profiler records cold-context local-lab baselines for Today, Learn, Progress, Roadmap, Writing setup and Match setup. On 2026-09-24, median FCP was 104–112 ms, task duration 143.11–162.19 ms and JS transfer 214.82–219.31 kB across those routes. No route showed enough separation in this 3-sample local run to justify a targeted optimization;
- Firestore rules are locally hardened to deny unused root-user/preferences documents, enforce nonnegative timestamps/nonempty event references, and preserve canonical progress timing/streak invariants. Canonical Auth/Firestore emulator regression is 21/21 PASS and normal `npm run check` remains 102/102 PASS. These hardened rules are not yet deployed to production;
- multi-device/offline/recovery stress is now verified: overlapping journals converge without duplicate shared events, conflicting same-event payloads fail closed, a 12-event offline journal survives IndexedDB close/reopen and later syncs, a missing progress snapshot rebuilds from the immutable event journal, and a loaded browser study session completes while network is offline. Emulator suite is 24/24 PASS, normal tests are 103/103 PASS, and the full Playwright matrix is 32 PASS / 8 intentional skips;
- loading/error/recovery UX is now hardened: application render failures keep a reload recovery surface, learning-snapshot loading/errors hide stale or fake-zero metrics, failed local snapshots expose retry, profile/repository switches cannot flash the previous profile snapshot, content bootstrap failure exposes an explicit retry control, and session/stroke loading states are announced accessibly. Final gate is lint 0 warnings/errors, 108/108 normal tests PASS, production build + bundle budget PASS at core 486.05 kB, and Playwright 32 PASS / 8 intentional skips with visual baselines stable.

Deferred / intentionally gated beyond Phase 4 closeout:
- hardened Firestore rules are emulator-verified but production deployment is a production change and requires a fresh owner review immediately before execution;
- migration tests remain gated until a real Dexie/schema version change exists. Current local database schema is version 1, so no migration result is claimed;
- Grammar, listening, reading, JLPT practice, N4 and N3 content expansion remains gated until real source/content is inspected, versioned and verified; no placeholder level is promoted into active learning content.

Performance guard:
- secondary/heavier routes remain lazy-loaded;
- bundle budgets are now executable release gates rather than advisory observations: core <= 490.00 kB raw; every JS chunk <= 500.00 kB raw.

## Final Phase 4 gate
- lint: PASS, 0 warnings / 0 errors;
- normal unit/component tests: PASS, 108/108 across 34 files;
- TypeScript + production Vite build: PASS;
- bundle budget: PASS, core 486.05 kB raw <= 490.00 kB and every JS chunk <= 500.00 kB;
- Firebase Auth/Firestore emulator regression: PASS, 24/24 across auth, rules and sync/stress suites;
- Playwright full Chromium desktop/mobile matrix: 32 PASS, 8 intentional project-specific skips; checked-in visual baselines remain PASS;
- production dependency audit: PASS, 0 vulnerabilities;
- git diff whitespace check: PASS and working tree clean after the integrated closeout command;
- Phase 4 content gate: PASS by keeping unavailable Grammar/Reading/Listening/JLPT/N4/N3 inactive; no unsourced placeholder content was promoted.
See `PROJECT_EVIDENCE.md` E-051 for the integrated closeout command and limitations.

## Phase 5 next
No Phase 5 production mutation has started.
Before any Firebase production rule deployment, GitHub legacy working-tree replacement, push or live deployment, the owner must receive and approve a fresh migration/release review with exact scope and rollback path.
The reviewed release sequence should cover production configuration/rules verification, rollback tag/branch, release-candidate regression, legacy working-tree replacement, push/deploy, live smoke tests and recorded rollback evidence.

## Scope / local artifact notes
All project source, generated build output, browser binaries and maintained caches are now configured under the canonical workspace.
The initial npm bootstrap occurred before the local `.npmrc` cache guard existed, so npm may have touched its normal user cache outside the workspace; this was not inspected or cleaned because outside-workspace access/change was not approved.
Future npm commands resolve cache to `D:\\OTHERS\\LATVAT\\japan\\.npm-cache` (verified with `npm config get cache`).

An initial malformed Playwright environment command created an ignored generated directory matching `app/0*`.
It is not used by the application or final browser tests and is excluded from Git.
It has not been deleted because project rules prohibit unapproved deletion.

## Deferred / unverified
- GitHub push/deployment migration has not started;
- production GitHub Pages configuration/live behavior remains unverified;
- current N5 Vocabulary/Kanji bundles are verified against the audited legacy reference and v2 invariants, but have not been independently benchmarked against an external canonical JLPT corpus;
- N4/N3 learning content is not implemented;
- Firefox/Safari support remains unverified.
