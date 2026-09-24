# ZaPan v2 — Project Progress

## Canonical status
Project root: `D:\OTHERS\LATVAT\japan`
Current phase: Phase 6 — Sourced N4/N3 content expansion
Current status: VERIFIED — LIVE PRODUCTION at `94db529`; LOCAL FOLLOW-UP `e4fb792` VERIFIED, PUSH PENDING
Last verified: 2026-09-25

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
- Firestore rules are locally hardened to deny unused root-user/preferences documents, enforce nonnegative timestamps/nonempty event references, and preserve canonical progress timing/streak invariants. Canonical Auth/Firestore emulator regression is 21/21 PASS and normal `npm run check` remains 102/102 PASS. At Phase 4 closeout these rules were not yet deployed; Phase 5 subsequently released the same verified ruleset to production;
- multi-device/offline/recovery stress is now verified: overlapping journals converge without duplicate shared events, conflicting same-event payloads fail closed, a 12-event offline journal survives IndexedDB close/reopen and later syncs, a missing progress snapshot rebuilds from the immutable event journal, and a loaded browser study session completes while network is offline. Emulator suite is 24/24 PASS, normal tests are 103/103 PASS, and the full Playwright matrix is 32 PASS / 8 intentional skips;
- loading/error/recovery UX is now hardened: application render failures keep a reload recovery surface, learning-snapshot loading/errors hide stale or fake-zero metrics, failed local snapshots expose retry, profile/repository switches cannot flash the previous profile snapshot, content bootstrap failure exposes an explicit retry control, and session/stroke loading states are announced accessibly. Final gate is lint 0 warnings/errors, 108/108 normal tests PASS, production build + bundle budget PASS at core 486.05 kB, and Playwright 32 PASS / 8 intentional skips with visual baselines stable.

Deferred / intentionally gated beyond Phase 4 closeout:
- hardened Firestore rules required a fresh owner review before production deployment; that review was completed in Phase 5 and the verified ruleset is now released to production;
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

## Phase 5 result
Phase 5 release engineering and production migration are VERIFIED. The live application is `https://trungnguyencore.github.io/zapan/`.

Verified release/migration state:
- local release candidate was verified with lint 0/0, normal tests 108/108, build/bundle PASS with core 486.10 kB, Firebase emulator 24/24, Playwright 32 PASS / 8 intentional skips, Pages artifact smoke 4/4, audit 0 vulnerabilities and `git diff --check` PASS;
- rollback branch `legacy/zapan-v1` and annotated tag `legacy-before-zapan-v2-2026-09-24` both resolve to legacy commit `a387e71351aa8266b6ae4751e89ae6be3e5ea1d9`;
- the unrelated legacy and v2 histories were connected by merge commit `a9dc8cdeeba5250414e5211033ca9a1b94d17d2c` using the `ours` strategy after verifying the v2 tree hash remained exactly `6bbd6cef6cb86f9f19960211c7c84c199d2fc7ae` before/after merge;
- `main` was pushed without force; legacy history remains reachable through merge ancestry plus the rollback branch/tag;
- GitHub Pages is deployed by Actions from the built `app/dist` artifact with production base `/zapan/`, BrowserRouter basename from `BASE_URL`, and a built `404.html` fallback;
- final release-infrastructure commit `e04844f3fdfca487067afb610b7fdf4df91d46c1` upgraded the official Pages actions, added live-URL test harness support, and limited Pages deploy triggers to `app/**` or the workflow file so docs-only commits do not redeploy the app;
- final GitHub Actions run `36007236330` completed SUCCESS with both build and deploy jobs successful. The previous Node 20 / ubuntu-latest warning strings were absent from that run log.

Verified production backend:
- GitHub repository variables contain all six `VITE_FIREBASE_*` values for the v2 Firebase web app;
- Firebase Auth authorized domains include `trungnguyencore.github.io`;
- hardened Firestore rules were released to project `zapan-v2-trunk`; Firebase reported the rules file already up to date and the scoped deployment completed successfully;
- real production cloud smoke PASS across two isolated browser contexts with 5 canonical events, followed by `firestoreCleanup=PASS` and `authCleanup=PASS`.

Verified live-site behavior:
- root URL returns HTTP 200 and serves the ZaPan v2 artifact;
- direct `/zapan/learn` returns the expected GitHub Pages HTTP 404 while serving the same SPA fallback artifact;
- live desktop/mobile Pages regression is 4/4 PASS, including direct deep-link load and reload;
- live Email/Password Auth + two-browser cloud sync PASS on the actual `trungnguyencore.github.io` origin, followed by successful cleanup;
- after the final infrastructure deployment, live Pages regression is again 4/4 PASS;
- final live runtime asset names remained `/zapan/assets/index-Wv0eqMsX.js` and `/zapan/assets/index-63ptnRvu.css`, confirming the test/workflow-only closeout did not change the application runtime bundle.

See `PROJECT_EVIDENCE.md` E-052 through E-055 for the local candidate, production preflight, merge/deploy and live verification trail.

## Phase 6 current state
Phase 6 expands the verified learning repository with sourced N4/N3 Vocabulary and Kanji while preserving the existing SRS/progress identity model.

Locally verified implementation:
- pinned OpenJLPT snapshot commit `c42fd9fa3777bfc1775446f7c418d549dfd6e4cf` is stored under `app/content-sources/openjlpt/` with upstream `NOTICE.md`, CC BY-SA 4.0 `LICENSE`, SHA-256 source manifest and duplicate-exclusion report;
- raw imported source contains 798 N4 records and 2,151 N3 records;
- ZaPan applies lower-level-prompt-wins deduplication (existing N5 > N4 > N3) because Vocabulary is quizzed by term and Kanji by character; 206 higher-level duplicate prompts are excluded from SRS identities while raw source records remain preserved;
- retained N4: 569 Vocabulary + 140 Kanji = 709 cards;
- retained N3: 1,668 Vocabulary + 366 Kanji = 2,034 cards;
- total learner repository is now 3,867 cards: 92 Kana + 923 N5 Vocabulary + 109 N5 Kanji + 709 N4 + 2,034 N3;
- N4/N3 meanings remain source-backed English when reviewed Vietnamese is unavailable; the content schema permits `vi` or `en` but requires at least one nonempty meaning;
- Learn, Library, Roadmap, Custom Practice, Writing, Match, Time Attack and Survival can consume the new sourced topics through the same canonical StudyEvent/SRS/progress model;
- Roadmap now contains six active stages: Hiragana, Katakana, N5 Vocabulary, N5 Kanji, N4 open study set and N3 open study set;
- Grammar, Reading, Listening and exam-practice remain inactive because separate sourced/content-flow verification has not been completed;
- generated OpenJLPT modules are split into small chunks; content bootstrap and Learn route remain lazy-loaded enough to keep the core entry under the executable 490 kB budget.

Local Phase 6 integrated gate:
- OpenJLPT data-contract/repository tests: PASS;
- lint: PASS, 0 warnings / 0 errors;
- normal unit/component tests: PASS, 113/113 across 35 files;
- TypeScript + production build: PASS;
- bundle budget: PASS. The deployed Phase 6 slice passed its release budget; the current local follow-up further reduces the core entry to 390.48 kB <= 490.00 kB, with every JS chunk <= 500.00 kB;
- Firebase Auth/Firestore emulator regression: PASS, 24/24;
- Playwright Chromium desktop/mobile matrix: 34 PASS / 10 intentional project-specific skips;
- built GitHub Pages artifact smoke: 6/6 PASS, including direct N4/N3 deep-link sessions on desktop/mobile;
- production dependency audit: 0 vulnerabilities;
- `git diff --check`: PASS.

Failures caught before the local gate became green:
- raw OpenJLPT N4/N3 overlaps with existing lower-level prompts would have created duplicate SRS identities; generator now deduplicates with a deterministic lower-level-wins rule and records every exclusion;
- first repository expectation incorrectly used pre-dedupe total 4,073; corrected verified total is 3,867;
- TypeScript build caught an insufficient content-type narrowing in the new dataset test;
- initial generated imports pushed core entry above budget (494.56–495.03 kB) and Vite reported ineffective dynamic imports; generated catalog/loader were split and Learn was lazy-loaded, first reducing core to 481.43 kB; the later async content-bootstrap follow-up removes the concrete repository/loader from the entry and reduces the current local core to 390.48 kB;
- full-suite contention caused one identity test to hit the default 5s timeout although the focused test passed in ~1.3s; only that test received a 10s timeout and the full 113/113 suite then passed;
- Learn/Roadmap visual baselines failed because the intentionally expanded pages became much taller; semantic/mobile-overflow checks passed, then only the affected Learn/Roadmap desktop/mobile baselines were regenerated and the full browser matrix passed.

Production status:
- Phase 6 content is live at commit `94db52960c2ca771e8b9450100724715773d4371`; GitHub Pages Actions run `36026433186` completed successfully and live Pages regression is 6/6 PASS including direct N4/N3 sessions on desktop/mobile;
- Firebase schema/rules are unchanged by this slice;
- local follow-up commit `e4fb7928ee1906f2bf5527b20e4f419534969ad4` contains the verified content-bootstrap/runtime-profiler optimization and is not yet pushed;
- no additional production cloud mutation is required for that follow-up beyond the normal Pages deploy if/when it is approved for push.

## Scope / local artifact notes
All project source, generated build output, browser binaries and maintained caches are now configured under the canonical workspace.
The initial npm bootstrap occurred before the local `.npmrc` cache guard existed, so npm may have touched its normal user cache outside the workspace; this was not inspected or cleaned because outside-workspace access/change was not approved.
Future npm commands resolve cache to `D:\\OTHERS\\LATVAT\\japan\\.npm-cache` (verified with `npm config get cache`).

An initial malformed Playwright environment command created an ignored generated directory matching `app/0*`.
It is not used by the application or final browser tests and is excluded from Git.
It has not been deleted because project rules prohibit unapproved deletion.

## Deferred / unverified
- current N5 Vocabulary/Kanji bundles are verified against the audited legacy reference and v2 invariants, but have not been independently benchmarked against an external canonical JLPT corpus;
- N4/N3 Vocabulary/Kanji are implemented locally from a pinned open-data source, but Phase 6 production deployment/live verification is still pending at this state;
- N4/N3 Vietnamese meaning enrichment is not claimed; imported cards use source-backed English unless a reviewed Vietnamese meaning exists;
- Grammar, Reading, Listening and JLPT exam-practice content are still not implemented as active sourced learning flows;
- a real Dexie schema migration remains untested because the production local database still uses schema version 1 and no migration exists yet;
- Firefox/Safari support remains unverified; the release/browser gates currently cover Chromium desktop/mobile.
