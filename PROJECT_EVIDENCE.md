# ZaPan v2 — Verification Evidence

## Evidence rules
Only actual command output, inspected artifacts, browser behavior, or source inspection belongs here as verification.
A planned test is not evidence.
A command exit code alone is insufficient when readable output/artifacts can be inspected.
Implemented is not silently upgraded to Verified.

## Phase 1

### E-001 — Workspace baseline
Date: 2026-09-24
Scope: `D:\OTHERS\LATVAT\japan`
Method: Remote Desktop Commander directory listing.
Observed: directory contained no listed files or subdirectories at Phase 1 start.
Result: PASS

### E-002 — Toolchain baseline
Date: 2026-09-24
Working directory: project root.
Observed: Node v22.23.2; npm 10.9.8.
Result: PASS

### E-003 — Canonical documentation verification
Date: 2026-09-24
Method: re-read root planning/state documents after creation.
Verified: AGENTS.md, implementation.md, WEB_ROADMAP.md, LEARNING_ROADMAP.md, PROJECT_PROGRESS.md, PROJECT_EVIDENCE.md, PROJECT_DECISIONS.md.
Observed: greenfield boundary, continuous gates, five phases, learner roadmap, GitHub-preservation policy and Instagram requirement present.
Result: PASS
### E-004 — Greenfield scaffold baseline
Date: 2026-09-24
Method: `npm create vite@latest app -- --template react-ts`, then `npm install`.
Observed scaffold generator: create-vite 9.2.1.
Initial dependency install: 27 packages added, 28 audited, 0 vulnerabilities reported by npm.
Baseline lint: 0 warnings, 0 errors.
Baseline TypeScript + Vite production build: PASS.
Result: PASS

### E-005 — Domain foundation test gate
Date: 2026-09-24
Scope: Card ID, SRS v1, Progress reducer, runtime config validation.
First test attempt: FAIL because `progress.test.ts` missed a closing brace; 13 other tests passed.
Action: fixed only the test syntax, then re-ran the entire suite.
Verified rerun: 4 test files passed, 20/20 tests passed.
Follow-up lint: 0 warnings, 0 errors.
Follow-up TypeScript + production build: PASS.
Result: PASS after blocking defect was fixed.

### E-006 — UI foundation full check
Date: 2026-09-24
Scope: responsive shell, routes, design tokens, Instagram ownership component.
Command: `npm run check`.
Observed: lint 0 warnings/errors; 6 test files passed; 23/23 unit/component tests passed; TypeScript + Vite production build passed.
Build output observed: generated `dist/index.html`, one CSS asset and one JS asset.
Result: PASS.
### E-007 — Hermetic Playwright browser install
Date: 2026-09-24
Goal: keep browser test binaries in the project workspace.
First Windows env command accidentally produced a path displayed as `app\\0 \\...`; install completed inside project but path was malformed.
The accidental directory remains local and ignored because deletion was not owner-approved.
Corrected install used exact `PLAYWRIGHT_BROWSERS_PATH=0` under cmd.exe.
Observed correct browser path: `app\\node_modules\\playwright-core\\.local-browsers\\...`.
Installed: Chromium/Chrome for Testing 153.0.8010.12 (Playwright chromium v1243), headless shell, FFmpeg and Winldd.
Result: PASS with one documented non-blocking local artifact from the first attempt.

### E-008 — Browser smoke test design failure and correction
Date: 2026-09-24
First Playwright run: 4 executions, 2 passed and 2 failed.
Failure cause from output: desktop-only test was also run in mobile project and mobile-only test in desktop project.
Matching-environment tests passed, showing responsive behavior itself was not the failing condition.
Action: explicitly skip each environment-specific test outside its intended Playwright project; mobile Instagram mark was also made discoverable in the mobile top bar.
Rerun through hermetic npm script: 2 passed, 2 intentional cross-project skips.
Result: PASS after test-design correction.

### E-009 — Final Phase 1 regression gate
Date: 2026-09-24
Command: `npm run check && npm run test:e2e` from `app/`.
First final attempt: FAIL because Vitest discovered `e2e/foundation.spec.ts`; 23 unit/component tests themselves passed.
Action: restricted Vitest include pattern to `src/**/*.test.{ts,tsx}`.
Final rerun observed:
- lint: 0 warnings, 0 errors across 27 files;
- Vitest: 6 files passed, 23/23 tests passed;
- TypeScript + Vite build: PASS;
- Playwright: desktop smoke PASS, mobile smoke PASS, 2 cross-project executions skipped intentionally.
Result: PASS.
### E-010 — Git/workspace status
Date: 2026-09-24
Method: `git status --short --branch` and `git ls-files --others --exclude-standard` from project root.
Observed: local Git repository initialized; branch has no commits yet; all project source/docs are currently untracked.
Ignored/generated material such as node_modules, dist, npm cache, Playwright test output and accidental `app/0*` browser artifact does not appear in the untracked list.
No Git remote was configured or contacted during Phase 1.
No push/deploy was performed.
Result: PASS for local state inspection.

## Phase 1 verified scope
Verified in this phase:
- greenfield React/TypeScript/Vite foundation;
- stable card identity helper;
- single deterministic SRS v1 foundation;
- canonical progress reducer with timed-sample accounting;
- optional Firebase runtime-config validation boundary (no real Firebase connection yet);
- desktop/mobile application shell and five primary routes;
- accessible Instagram owner link on desktop and mobile;
- continuous lint/unit/component/build/browser gates;
- architecture/data/Firebase/UX/testing plans.

## Explicitly not verified / not implemented yet
- Firebase Authentication or Firestore sync;
- IndexedDB/local persistence;
- real N5 content bundles;
- real learning sessions/review queue;
- study minutes/streak/heatmap/mastery dashboards from persisted data;
- N4/N3 learning content;
- GitHub Pages deployment or live production behavior;
- Firefox/Safari browser support.

### E-011 — Manual visual browser inspection
Date: 2026-09-24
Method: headless Chromium screenshots generated from the running Vite app and read back for visual inspection.
Desktop viewport: 1440x1000. Observed: persistent sidebar, active Today state, readable hierarchy, owner Instagram link visible, no horizontal overflow (`scrollWidth=clientWidth=1440`).
Mobile profile: Pixel 5 / 393px wide. Observed: compact ZaPan top bar, Instagram link visible, five-item fixed bottom navigation, single-column cards, no horizontal overflow (`scrollWidth=clientWidth=393`).
Note: full-page screenshot stitching shows the fixed bottom navigation over the stitched page at one viewport position; this is expected fixed-element capture behavior, not horizontal/layout overflow.
Result: PASS.

### E-012 — Final integrated regression rerun
Date: 2026-09-24
Command: `npm run check && npm run test:e2e` from `app/` after clearing the visual-check Vite child process from port 4173.
Observed:
- lint: 0 warnings, 0 errors across 27 files;
- Vitest: 6 files passed, 23/23 tests passed;
- TypeScript + Vite production build: PASS, 34 modules transformed;
- Playwright: desktop smoke PASS, mobile smoke PASS, 2 cross-project executions intentionally skipped;
- total Playwright runtime reported: 2.4s.
Result: PASS.

### E-013 — Package-manager workspace guard
Date: 2026-09-24
Action: added `app/.npmrc` with project-relative cache path `../.npm-cache`.
Verification: `npm config get cache` from `app/` resolved to `D:\\OTHERS\\LATVAT\\japan\\.npm-cache`.
Limitation: the first npm bootstrap happened before this guard existed, so npm may have used/touched its normal user cache outside the workspace. No outside path was inspected or cleaned.
Result: PASS for all future npm cache resolution inside the canonical workspace.

### E-014 — Post-guard closeout check
Date: 2026-09-24
After adding the project-local npm cache guard, `npm run check` was executed again.
Observed: lint 0 warnings/errors; 23/23 Vitest tests passed; TypeScript + Vite production build passed.
Port check after browser work returned no LISTENING entry for 127.0.0.1:4173.
Git status: local repository still has no commits; source/docs are untracked by design for owner review; generated/cache artifacts remain ignored.
Result: PASS.

## Phase 2

### E-015 — Phase 1 Git baseline and GitHub tooling
Date: 2026-09-24
Baseline commit: `ae5c15a` — `chore: establish verified ZaPan v2 phase 1 foundation`.
Local branch renamed to `main` to match the existing GitHub repository default branch.
GitHub CLI status: authenticated as `trunnguyencore`; repository `trunnguyencore/zapan` verified public with default branch `main`.
Local `origin` set to `https://github.com/trunnguyencore/zapan.git`.
No push, fetch-based replacement, deploy, or remote mutation performed.
Result: PASS.

### E-016 — Local-first IndexedDB persistence gate
Date: 2026-09-24
Implementation: Dexie-backed IndexedDB adapter behind domain `LearningRepository` port.
Focused repository suite: 7/7 PASS covering atomic event/progress/session persistence, reopen persistence, event idempotency, duplicate conflict rejection, missing-session rollback, due query, and session completion rules.
First full gate: 30/30 tests passed but TypeScript build FAILED because constructor parameter properties are disallowed by the current `erasableSyntaxOnly` config.
Action: replaced parameter property with an explicit class field; no behavior change.
Final full gate: lint 0 warnings/errors across 31 files; 30/30 tests PASS; TypeScript + Vite production build PASS.
npm install for `dexie` and `fake-indexeddb` reported 0 vulnerabilities.
Result: PASS after blocking compile issue was corrected.

### E-017 — Versioned content pipeline gate
Date: 2026-09-24
Source inspection: legacy Kana/Vocab/Kanji data read-only for reference; no legacy file modified.
Implemented: domain content types/port, Zod runtime schemas, static content repository, provenance document, and `foundation-kana-main-v1` bundle.
Verified imported scope: 92 basic Kana cards (46 Hiragana + 46 Katakana main rows only).
Focused content suite: 8/8 PASS covering bundle cardinality, stable/unique card IDs, romanization variants, duplicate/source-version validation, repository querying and cross-bundle duplicate rejection.
Full gate: lint 0 warnings/errors across 39 files; 38/38 tests PASS; TypeScript + Vite production build PASS.
Legacy dakuten/yōon, vocabulary and kanji content remain explicitly unverified/not imported.
Result: PASS.

### E-018 — Firebase v2 project separation and backend creation
Date: 2026-09-24
Verified legacy mapping: Firebase project `zapan-app` matches the legacy gd9 Firebase project/app identifiers and was treated as immutable legacy backend.
Created new Firebase project: `zapan-v2-trunk` (display name `ZaPan v2`) and a separate web app `ZaPan v2 Web`.
Created Firestore `(default)` database in `asia-southeast1`, Native mode, Standard edition, free tier, realtime updates enabled, delete protection enabled.
Local Firebase web config is stored only in ignored `app/.env.local`; `.env.example` contains empty placeholders. Temporary SDK config JSON is ignored.
Result: PASS.

### E-019 — Firebase dependency and tooling audit
Date: 2026-09-24
Installed Firebase Web SDK 12.19.0, firebase-tools 15.30.2 and rules-unit-testing 5.0.2.
`npm audit --omit=dev`: 0 production vulnerabilities.
Full npm audit: 7 moderate vulnerabilities in the dev-only `firebase-tools` dependency chain. The suggested all-fix path would downgrade firebase-tools to 10.1.1; no forced downgrade was applied.
Status: documented non-blocking development-tooling risk; production dependency tree remains clean.

### E-020 — Firebase Auth/Firestore emulator gate
Date: 2026-09-24
Runtime: project-local Temurin 21.0.12.1 LTS under `firebase/.runtime`; Firestore emulator v1.22.0 cached under `firebase/.emulators` using `FIREBASE_EMULATORS_PATH`.
Firestore rules integration tests: 8/8 PASS covering owner access, unauthenticated rejection, cross-user rejection, schema/counter validation, session ownership and immutable event updates.
Auth emulator tests: 2/2 PASS covering email/password signup, sign-out, sign-in and password-reset request using `FirebaseAccountAuthService`.
Combined emulator gate: 10/10 PASS; emulators shut down after execution.
Result: PASS.

### E-021 — Production Firestore rules deployment and verification
Date: 2026-09-24
Target: `zapan-v2-trunk` only.
Firebase deploy compiled and released `firebase/firestore.rules` and `firebase/firestore.indexes.json` successfully.
Post-deploy database describe verified: Firestore Native, Standard, `asia-southeast1`, delete protection enabled, free tier true, realtime updates enabled.
Legacy `zapan-app` was not modified.
Result: PASS.

### E-022 — Auth/backend foundation full regression
Date: 2026-09-24
After Firebase/Guest/Auth adapter changes: lint 0 warnings/errors across 52 files; 45/45 normal unit/component tests PASS; TypeScript + Vite production build PASS.
Production Email/Password provider activation remains unverified because the Firebase Auth console initialization/toggle is not exposed by the stable local CLI path used here; emulator Auth behavior is verified.
Result: PASS for implemented local/emulator/backend-foundation scope; production Auth provider toggle remains BLOCKED/UNVERIFIED.

### E-023 — Real local learning session gate
Date: 2026-09-24
Implemented: pure Today/Review/New queue builders, typed-answer validation, real Today/Learn/Review/Progress pages, AppServices composition, and a persisted Kana session route.
Initial full gate: 54/54 tests and build passed but lint reported 4 React Compiler warnings (impure render-time clock calls, mixed Fast Refresh exports, and effect-triggered state update). Progression was blocked.
Corrections: split services context/hook from provider component, moved snapshot time outside render, initialized question timer only after session preparation, and rewrote async external-store loading to avoid synchronous effect state updates.
Corrected gate: lint 0 warnings/errors across 62 files; 54/54 tests PASS; TypeScript + Vite production build PASS.
Result: PASS after blocking lint quality issues were corrected.

### E-024 — Today mode Firestore rule regression
Date: 2026-09-24
Canonical StudyMode now includes `today` for mixed due+new daily sessions instead of mislabeling them as `learn` or `review`.
Auth + Firestore emulator regression after rule change: 10/10 integration tests PASS.
Updated Firestore rules compiled and were deployed successfully to `zapan-v2-trunk` only.
Result: PASS.

### E-025 — Browser learning + persistence end-to-end
Date: 2026-09-24
Playwright Chromium matrix after real learning UI:
- desktop navigation/Instagram smoke: PASS;
- mobile navigation/no-horizontal-overflow/Instagram smoke: PASS;
- desktop real-learning flow: answered 5 real Hiragana cards (`あいうえお`) correctly, session summary reached 100%, Progress showed `5/92`, browser reload preserved `5/92` from IndexedDB: PASS.
Overall: 3 executed tests PASS; 3 cross-project environment-specific executions intentionally skipped.
Result: PASS.

### E-026 — Identity-separated local stores and event-journal sync convergence
Date: 2026-09-24
Implemented:
- local IndexedDB name is derived from active identity (`zapan-v2:<userId>`), separating Guest and account data on the same browser;
- local repository can list/merge immutable StudyEvents and deterministically rebuild affected ProgressRecords;
- Firestore sync uploads local events idempotently, downloads the cloud event journal, replays/merges locally, then writes derived progress snapshots.
Two-client emulator scenario: two independent IndexedDB clients for the same Firebase uid each studied the same card offline (one correct, one incorrect); after sequential sync both local stores and cloud progress converged to attempts=2, correct=1, incorrect=1.
Firebase emulator gate including Auth, rules and convergence: 11/11 PASS.
Result: PASS.

### E-027 — Production Firebase Authentication provider and security verification
Date: 2026-09-24
Firebase CLI 15.30.2 supports Auth provider configuration as code. `firebase.json` now enables Email/Password and disables Anonymous auth; `firebase deploy --only auth` reported `Auth providers enabled: email/password`.
Production lifecycle verification used a temporary random test account against Firebase Auth REST: signup=PASS, signin=PASS, cleanup=PASS. The test account was deleted in the same verification flow.
Identity Toolkit config was then patched and re-read:
- email.enabled=True;
- email.passwordRequired=True;
- anonymous.enabled=False;
- emailPrivacy.enabled=True.
Production signup/signin/cleanup was rerun after the security patch and passed again.
Result: PASS.

### E-028 — Firebase lazy-loading and bundle gate
Date: 2026-09-24
Problem: eager Firebase imports increased the production JS bundle to ~1,019 kB and triggered Vite's >500 kB chunk warning. A first dynamic split reduced the initial bundle but left a 543.34 kB Firebase chunk, so progression remained blocked.
Correction: split Firebase App, Auth, and Firestore Sync into separate dynamic boundaries. Guest/core learning no longer imports Firebase Auth/Firestore eagerly.
Final production build chunks observed:
- core index: 475.45 kB (147.83 kB gzip);
- Firebase app shared: 29.41 kB (9.86 kB gzip);
- Auth infrastructure: 79.67 kB (23.71 kB gzip);
- Firestore sync infrastructure: 434.39 kB (127.94 kB gzip).
Final build produced no chunk-size warning.
Result: PASS.

### E-029 — Account surface and final integrated Phase 2 regression checkpoint
Date: 2026-09-24
Account UI now lazy-loads Firebase Auth, keeps Guest usable during cloud loading, provides email/password signup/signin/reset controls, manual sync for authenticated accounts, and clearly states that Guest progress is not automatically merged into account progress.
Session completion preserves local-first semantics: local completion succeeds first; account cloud sync is best-effort and a sync failure does not roll back local study data.
Final integrated command sequence: `npm run check && npm run test:firebase:emulated && npm run test:e2e && npm audit --omit=dev`.
Observed:
- lint: 0 warnings/errors across 71 files;
- normal unit/component tests: 58/58 PASS;
- TypeScript + Vite production build: PASS with no size warning;
- Firebase emulator tests: 11/11 PASS;
- Playwright: 4 executed PASS, 4 environment-specific skips; includes desktop/mobile shell, Account lazy-load surface, real Kana learning, and IndexedDB reload persistence;
- production dependency audit: 0 vulnerabilities.
Result: PASS.

### E-030 — N5 Vocabulary audit and versioned bundle gate
Date: 2026-09-24
Legacy reference read-only: `D:\STUDY\JAPANESE\WEB\gd9\src\data\vocab_data.js`.
Audit parser removed only the static ESM export wrapper and used `JSON.parse`; legacy source code was not executed.
Audit result: 15 groups, 923 items, 0 missing terms/readings/Vietnamese meanings, 0 duplicate terms, 0 exact duplicates, 2 packed-reading cases.
The two packed readings were normalized only by delimiter split: `二十歳` -> `はたち` / `にじゅっさい`; `一日` -> `いちにち` / `ついたち`.
Generated versioned bundle: `app/src/data/n5/vocabN5.ts`, source version `vocab-n5-legacy-audit-v1`, 923 cards and 998 accepted reading entries.
Focused bundle tests: 4/4 PASS.
Full gate: lint 0 warnings/errors across 73 files; 62/62 normal tests PASS; TypeScript + Vite production build PASS; production runtime chunks unchanged because the bundle is not exposed/imported yet.
Result: PASS. Vocabulary bundle is verified for pipeline use but remains intentionally unavailable in runtime Learn until the subsequent wiring gate.

### E-031 — N5 Kanji audit and versioned bundle gate
Date: 2026-09-24
Legacy reference read-only: `D:\STUDY\JAPANESE\WEB\gd9\src\data\kanji_data.js`.
Audit parser removed only the static ESM export wrapper and used `JSON.parse`; legacy source code was not executed.
Audit result: 10 groups, 109 unique single-character Kanji, 0 duplicate characters, 0 packed accepted readings, 0 missing on/kun fields, 0 missing VI/EN/Hán Việt/mnemonic fields, and 0 invalid stroke counts.
Eight source records have explicit empty kunyomi strings and were preserved: 百, 万, 週, 午, 毎, 気, 校, 電.
Generated versioned bundle: `app/src/data/n5/kanjiN5.ts`, source version `kanji-n5-legacy-audit-v1`, 109 cards.
Focused bundle tests: 5/5 PASS.
Full gate: lint 0 warnings/errors across 75 files; 67/67 normal tests PASS; TypeScript + Vite production build PASS; production runtime chunks unchanged because the bundle is not exposed/imported yet.
Result: PASS. Kanji bundle is verified for pipeline use but remains intentionally unavailable in runtime Learn until the subsequent wiring gate.

### E-032 — Verified Vocab/Kanji runtime wiring and browser gate
Date: 2026-09-24
Runtime content repository now loads all verified content packs: 92 Kana + 923 N5 Vocabulary + 109 N5 Kanji = 1,124 cards.
Performance design: Vocab and Kanji are dynamically imported as separate content chunks; the app waits for all verified bundles before showing learning metrics so totals are never a misleading partial 92-card snapshot.
Learn now exposes 2 Kana topics, 15 Vocabulary topics and 10 Kanji topics with live IndexedDB-backed progress. Existing Today/Review builders automatically operate over the complete verified repository.
Session UX distinguishes answer type: Kana asks for romaji; Vocabulary/Kanji ask for a kana reading. Vocabulary feedback reveals the audited Vietnamese meaning. Kanji feedback reveals audited meaning, Hán Việt, on/kun, stroke count and mnemonic explicitly labeled as a memory aid.
Full static/unit/build gate: lint 0 warnings/errors across 79 files; 69/69 tests PASS; TypeScript + Vite production build PASS.
Production chunk sizes observed after runtime wiring: core 479.17 kB, Vocab 220.98 kB, Kanji 40.71 kB, Firestore sync 434.39 kB, Auth 79.67 kB, Firebase App 29.41 kB. No >500 kB Vite chunk warning.
First Playwright run: all non-Kanji flows passed; Kanji test failed only because a non-exact accessible-name selector matched both `Học Số đếm` and `Học Số đếm & Lượng từ`. Progression was blocked and the selector was corrected to exact matching.
Corrected Playwright matrix: 6 executed tests PASS, 6 environment-specific skips. Verified desktop/mobile shell, Account lazy-loading, Kana persistence across reload with total `5/1124`, N5 Vocabulary reading/meaning flow, and N5 Kanji reading/Hán Việt/stroke/mnemonic flow.
Result: PASS.

### E-033 — Production cloud-sync smoke exposed cross-identity session split
Date: 2026-09-24
Production test target: Firebase project `zapan-v2-trunk`; temporary random account only.
Initial production browser smoke: FAIL. Browser A completed five real Hiragana answers, but browser B downloaded only 3 cloud events.
The cleanup path still completed: Firestore cleanup PASS and Auth cleanup PASS.
A diagnostic rerun inspected IndexedDB before cloud sync and found the five local StudyEvents split across two identity databases: 3 events in the authenticated account database and 2 events in the Guest database.
Conclusion: events were not lost by Firestore; one StudySession was writing across different local identity repositories.
Progression remained blocked.
Result: FAIL — root cause isolated to session/identity lifetime handling; temporary production data was cleaned.

### E-034 — Session owner pinning and initial Auth restoration gate
Date: 2026-09-24
Correction 1: `SessionPage` now pins content, LearningRepository and userId at session start. createSession/recordEvent/completeSession use the pinned repository for the lifetime of that session. Automatic cloud sync is permitted only when the current identity still matches the session owner.
Focused regression: a five-question account session was forced to receive Guest AppServices after question 2. Expected/observed: account repository retained all 5 events, Guest repository retained 0. Test PASS.
A second production diagnostic then showed all five events in the Guest database after a full-page navigation, proving a deeper boot race: the UI could render Guest learning before Firebase restored the persisted account on page reload.
Correction 2: `AppServicesProvider` now gates the learning UI on both verified-content readiness and the initial Firebase Auth state. On reload, ZaPan waits for authenticated/signed-out resolution before exposing a learning route.
Post-correction local gate: lint 0 warnings/errors; 71/71 normal tests PASS; TypeScript + Vite build PASS; Playwright desktop/mobile matrix 6 executed PASS with 6 intentional environment-specific skips.
Result: PASS.

### E-035 — Final production account/cloud-sync convergence gate
Date: 2026-09-24
Production browser smoke used a new random temporary Email/Password account and two isolated Chromium contexts.
Observed before sync: account state remained stable after reload; the active account IndexedDB contained exactly 5 StudyEvents and no identity split.
Browser A: completed five audited Hiragana questions and auto-synced to production Firestore.
Browser B: signed into the same temporary account in an isolated context, manually synced, received all 5 cloud events, and Progress reflected the synced study history.
Playwright production result: 1/1 PASS.
Cleanup verification after the test:
- temporary Firestore user subtree cleanup: PASS;
- temporary Firebase Auth account cleanup: PASS.
No temporary production test account/data remained according to the cleanup verification.
Result: PASS.

### E-036 — Final Phase 2 closeout gate
Date: 2026-09-24
Verified runtime content: 1,124 cards = 92 Kana + 923 N5 Vocabulary + 109 N5 Kanji.
Final normal regression after identity fixes:
- lint: 0 warnings/errors;
- unit/component tests: 71/71 PASS across 22 files;
- TypeScript + Vite production build: PASS;
- largest observed production chunks remained below the Vite 500 kB warning threshold;
- local Playwright desktop/mobile: 6 executed PASS, 6 intentional environment-specific skips.
Final Firebase emulator rerun:
- Auth + Firestore rules + sync suites: 12/12 PASS;
- includes five-event upload/download and two-offline-client convergence.
Production account/cloud-sync browser smoke and cleanup: PASS per E-035.
Production dependency audit: `npm audit --omit=dev` => 0 vulnerabilities.
Git whitespace/diff check: PASS.
Result: PASS — Phase 2 is VERIFIED.

### E-037 — Phase 3 verified Library search/filter slice
Date: 2026-09-24
Scope: real Library over the verified 1,124-card repository.
Implementation: pure `filterLibraryCards` domain helper plus responsive Library UI. Search matches only fields present in audited bundles: Kana character/romanization metadata, Vocabulary term/readings/meanings, and Kanji character/readings/on/kun/meanings/Hán Việt. No AI-generated content is inserted.
Rendering guard: filtering evaluates the complete repository, while the UI renders at most the first 60 matches and reports the complete result count.
Focused domain tests: 4/4 PASS.
Full static/unit/build gate: lint 0 warnings/errors; 75/75 tests PASS across 23 files; TypeScript + Vite production build PASS; largest core chunk observed 482.99 kB with no >500 kB warning.
Browser Library gate: Chromium desktop PASS and Chromium mobile PASS. Verified 1,124 total results, Vocabulary search for `いつつ` -> `五つ` with audited Vietnamese meaning, Kanji filter 109 results, and Hán Việt search for `Nhất` -> `一`.
Result: PASS.

### E-038 — Phase 3 verified Custom Practice slice
Date: 2026-09-24
Scope: explicit multi-topic Custom Practice over the canonical verified repository.
Domain behavior: `buildCustomPracticeQueue` selects only explicitly requested topics, preserves canonical repository order for deterministic behavior, respects the requested limit, and returns no queue when no topic is selected.
UI behavior: user can select individual or whole Kana/Vocabulary/Kanji topic groups and choose 5/10/20 questions. Selection is serialized as repeated `topic=` query parameters plus `limit=`, so the session scope is URL-addressable and reload-safe.
Learning behavior: SessionPage maps the route to canonical StudyMode `custom`; answers continue through the existing StudyEvent/SRS/Progress pipeline with no parallel mastery store.
Focused domain queue tests: 7/7 PASS in `sessionBuilder.test.ts`.
First mobile browser attempt failed only because the test selector for visible `あ` also matched the hidden desktop brand mark. Product behavior was correct; selector was scoped to `.question-glyph` and the gate was rerun.
Corrected Custom Practice browser gate: desktop PASS and mobile PASS. Both completed five Hiragana questions and direct IndexedDB inspection verified exactly five events with `mode=custom` and `inputKind=typing`.
Full regression: lint 0 warnings/errors; 77/77 normal tests PASS; TypeScript + Vite production build PASS; Playwright full matrix 10 executed PASS and 6 intentional environment-specific skips.
Build note: core JS chunk observed at 487.97 kB, still below the Vite 500 kB warning threshold but close enough that further Phase 3 features should prefer route/capability splitting.
Firebase emulator regression: 13/13 PASS; added direct verification that a canonical Custom Practice event is accepted by rules, uploaded, downloaded and preserved with `mode=custom`.
Production dependency audit: 0 vulnerabilities. Git diff whitespace check: PASS.
Result: PASS.

### E-039 — Phase 3 verified activity metrics and Progress dashboard slice
Date: 2026-09-24
Source of truth: immutable persisted StudyEvents; no synthetic activity records were added.
Measured-study-time semantics: only real `responseTimeMs` values present on StudyEvents are summed. Events without measured response time contribute to event/day/streak counts but add zero measured time. Session wall-clock duration is intentionally not presented as active study time because it can include idle time and is not the cloud reconciliation authority.
Calendar semantics: day keys use the browser-resolved IANA timezone. Current streak counts consecutive active calendar days ending today, or ending yesterday when today has not yet been studied; a fully missed yesterday resets current streak to zero.
Domain tests: 4/4 PASS, including Asia/Ho_Chi_Minh midnight boundary, leap-day calendar arithmetic, measured-time-only aggregation, today/yesterday streak behavior and 28-day heatmap generation.
Progress UI now shows canonical mastery metrics plus measured study minutes, current streak, active days, 7-day event count, 28-day StudyEvent heatmap and explicit timezone explanation.
Browser verification: the persisted five-answer Kana flow produced one active heatmap day with exactly 5 events and streak=1 before and after reload. Custom Practice browser tests verify the same Progress activity behavior on both desktop and mobile after five canonical custom events.
Full gate: lint 0 warnings/errors; 81/81 normal tests PASS across 24 files; TypeScript + Vite production build PASS; Playwright full matrix 10 executed PASS and 6 intentional environment-specific skips.
Build observation: core JS chunk reached 491.54 kB, still below the Vite 500 kB warning threshold but sufficiently close that further Phase 3 feature work must first reduce entry-bundle pressure.
Git diff whitespace check: PASS.
Result: PASS.

### E-040 — Phase 3 route-level bundle split
Date: 2026-09-24
Trigger: after Library, Custom Practice and activity metrics, the measured core production JS chunk reached 491.54 kB, close to Vite's 500 kB warning threshold.
Change: Library, Progress and Custom Practice routes now load through React lazy/Suspense boundaries. Today/Home, Learn, Review and Session remain eager because they are the primary learning loop.
Measured production build after split:
- core entry: 480.09 kB (down from 491.54 kB);
- CustomPracticePage: 3.10 kB;
- LibraryPage: 4.30 kB;
- ProgressPage: 5.04 kB.
Existing Vocab/Kanji/Auth/Sync capability chunks remain separate and no >500 kB Vite warning was emitted.
Static/unit gate: lint 0 warnings/errors; 81/81 tests PASS; TypeScript + Vite build PASS.
Full browser regression after lazy-route change: 10 executed PASS, 6 intentional environment-specific skips. Library, Progress activity/reload and Custom Practice lazy-route flows remained operational.
Git diff whitespace check: PASS.
Result: PASS.

### E-041 — Phase 3 verified Writing / stroke-order fallback slice
Date: 2026-09-24
Scope: Kana/Kanji Writing with Trace, Copy and Recall modes.
Domain behavior: Writing queue accepts only explicitly selected Kana/Kanji topics and is deterministic. Vocabulary is intentionally excluded from the single-character writing surface.
Learning semantics: Writing self-grade emits canonical StudyEvents with `mode=writing`, `inputKind=drawing`, and user-selected correct/incorrect rating into the same SRS/progress pipeline. No `responseTimeMs` is written because the current self-grade drawing flow has no validated active-response timing definition.
Stroke order: ZaPan derives the KanjiVG asset path from the Unicode codepoint and renders the remote SVG as an external image rather than injecting remote SVG markup. Asset loading is auxiliary; network/error fallback leaves the drawing canvas and self-grade flow fully usable.
Initial static gate found two React Compiler warnings: synchronous state reset inside a stroke-image effect and render-time `Date.now()`. Progression remained blocked. Corrections removed the effect reset through character-keyed load state and moved session start time to a lazy state initializer. Lint rerun: 0 warnings/errors.
Initial Writing browser gate then FAILed on both desktop/mobile with IndexedDB `ConstraintError: Key already exists`. Error-context inspection showed StrictMode could concurrently execute identical `createSession()` calls; repository creation used non-atomic get-then-add.
Correction: `LocalLearningRepository.createSession` now serializes existence check + add inside an IndexedDB transaction. Added concurrent identical-session regression; focused repository suite 11/11 PASS. Corrected Writing browser gate then passed desktop + mobile.
Browser gate explicitly aborts KanjiVG network, draws on the canvas, reveals Recall reference, verifies visible stroke fallback, self-grades one card, and directly inspects IndexedDB. Observed exactly one event with `mode=writing`, `inputKind=drawing`, `result=correct`, and no `responseTimeMs`.
Full gate:
- lint: 0 warnings/errors;
- normal tests: 85/85 PASS across 25 files;
- TypeScript + Vite build: PASS;
- Writing lazy chunk: 11.78 kB; core entry: 480.53 kB; no >500 kB warning;
- Playwright full matrix: 12 executed PASS, 6 intentional environment-specific skips;
- Firebase emulator: 14/14 PASS, including a Writing event round-trip without invented response timing;
- production dependency audit: 0 vulnerabilities;
- git diff whitespace check: PASS.
Result: PASS.

### E-042 — Phase 3 verified Time Attack + Survival slice
Date: 2026-09-24
Scope: two arcade practice surfaces over the canonical verified content repository.
Shared domain behavior: deterministic topic queue, absolute-deadline countdown helper, and Survival life transition helper. Score, countdown and lives are presentation state only; neither creates a parallel mastery/progress store.
Learning behavior: every answered arcade card uses the existing typed-answer validator and writes a canonical StudyEvent with measured `responseTimeMs`, `inputKind=typing`, and mode `time-attack` or `survival`. The same Progress/SRS reducer consumes those events.
Time Attack UX: 30/60/120 second choices. Browser gate starts a 30-second session, answers one audited Hiragana card, advances the Playwright clock past the absolute deadline, and verifies the session ends by timer rather than queue exhaustion.
Survival UX: starts with 3 lives, wrong answers decrement exactly one life, correct answers do not consume a life, and the session ends when lives reach zero or the bounded queue is exhausted.
Focused domain tests: 3/3 PASS.
Focused browser gate: 4/4 PASS across Chromium desktop/mobile (Time Attack + Survival on both viewports). Direct IndexedDB inspection verified Time Attack writes a measured correct event and Survival writes three measured incorrect events with canonical modes/input kind.
Full static/unit/build gate: lint 0 warnings/errors; 88/88 normal tests PASS across 26 files; TypeScript + Vite production build PASS.
Bundle observation: Arcade lazy route chunk 8.96 kB; core production entry 481.06 kB; no >500 kB warning.
Full Playwright regression: 16 executed PASS, 6 intentional environment-specific skips.
Firebase emulator regression: 15/15 PASS. Added cloud round-trip verification for measured Time Attack and Survival events through the same immutable event journal/rules.
Production dependency audit: 0 vulnerabilities.
Git diff whitespace check: PASS.
Result: PASS.

### E-043 — Phase 3 verified Match + Confusables slice
Date: 2026-09-24
Scope: canonical Match and Confusables practice modes with no parallel mastery state.

Confusables provenance: the exact 15 group definitions were migrated from read-only legacy source `D:\STUDY\JAPANESE\WEB\gd9\src\data\gameData.js` as source version `legacy-gd9-game-data-v1`. No additional “confusable” groups were invented. The migrated data contains 31 target entries total: 16 Katakana and 15 Hiragana.
Canonical integrity: domain construction resolves every legacy character back to the verified v2 Kana repository and requires the legacy romanization to be present in the canonical card. Missing/mismatched data throws instead of silently accepting a divergent source. Domain tests verified all 31 entries.
Match behavior: builds up to six deterministic topic pairs from canonical card fields only and skips duplicate answer labels to avoid ambiguous answer tiles. Kana uses canonical primary romaji; Vocabulary/Kanji use the audited Vietnamese meaning already present in the v2 bundle.
Initial Match unit gate failed because the new test incorrectly shortened canonical `五つ` meaning to `năm cái`; inspected v2 source is `năm cái ( đếm đồ vật nói chung)`. The test expectation was corrected to the source value; production content was not rewritten.
Initial React static gate then found six purity warnings from direct component-level `Date.now()` / `performance.now()` access. A minimal `services/time/clock.ts` boundary was introduced and the new practice pages use explicit epoch/monotonic clock functions; no lint suppression was added. Corrected lint gate: 0 warnings/errors.
Match browser gate: deliberately records one wrong pairing for あ, then six correct pairs. Desktop + mobile PASS. Direct IndexedDB inspection observed 7 events: 1 incorrect + 6 correct, all `mode=match`, `inputKind=matching`, with nonnegative measured `responseTimeMs`.
Confusables browser gate: first verified target is シ/shi; test deliberately chooses ツ once, then completes the remaining first-ten deterministic targets correctly. Desktop + mobile PASS with 90% result. IndexedDB observed 10 events: 1 incorrect + 9 correct, all `mode=confusable`, `inputKind=multiple-choice`, with nonnegative measured timing.
Full static/unit/build gate: 94/94 normal tests PASS across 28 files; TypeScript + Vite build PASS. Lazy chunks: Match 7.47 kB, Confusables 8.80 kB; core entry 481.80 kB; no >500 kB warning.
Full Playwright matrix: 20 executed PASS, 6 intentional environment-specific skips.
Firebase emulator: 16/16 PASS, including Match/Confusable event round-trip through existing ownership/schema rules and immutable journal.
Production dependency audit: 0 vulnerabilities.
Git diff whitespace check: PASS.
Result: PASS.

### E-044 — Phase 3 verified canonical Roadmap slice
Date: 2026-09-24
Learner-journey authority: `LEARNING_ROADMAP.md`. Current verified content authority: the v2 content repository/topic catalog.
Active roadmap stages are intentionally restricted to content that exists and has been audited: Hiragana 46 cards, Katakana 46 cards, N5 Vocabulary 923 cards, N5 Kanji 109 cards; total 1,124.
Roadmap semantics: stage metrics are derived from canonical ProgressRecord data through the existing learning-overview logic. Status is `not-started` until an eligible card has attempts, `in-progress` after study begins, and `complete` only when every card in that stage is currently `mastered`. The suggested stage is the first non-complete stage; this is guidance only and does not hard-lock other Learn content.
Unavailable roadmap material: Grammar, Reading/Listening, N5 consolidation/exam and N4/N3 remain explicitly inactive because corresponding verified content/review flows do not exist. They are not rendered as active learning stages or unlock links.
Focused domain tests: 3/3 PASS. Verified exact stage totals (46/46/923/109 = 1,124), that seeing/studying all Hiragana is insufficient when one card is not mastered, and that suggestion advances to Katakana only after all 46 Hiragana cards are mastered.
Focused browser gate: fresh Roadmap PASS on Chromium desktop/mobile with exactly four active stage cards, 1,124 total cards and Hiragana suggested. Existing real five-answer Kana browser flow was extended and verified Roadmap shows 5 studied but 0/46 mastered, so Hiragana remains suggested.
Full static/unit/build gate: lint 0 warnings/errors; 97/97 normal tests PASS across 29 files; TypeScript + Vite production build PASS.
Bundle observation: Roadmap lazy chunk 5.11 kB; core entry 482.50 kB; no >500 kB warning.
Full Playwright regression: 22 executed PASS, 6 intentional environment-specific skips.
Production dependency audit: 0 vulnerabilities.
Git diff whitespace check: PASS.
Result: PASS.

### E-045 — Final Phase 3 theme/accessibility/visual closeout
Date: 2026-09-24
Scope: final Phase 3 responsive/theme/accessibility polish and integrated regression.

Theme behavior:
- explicit `System / Light / Dark` preference is persisted under `zapan-v2:theme`;
- the persisted preference is applied before React root rendering;
- System follows `prefers-color-scheme`, explicit Light is not overridden by a dark OS preference, and explicit Dark works independently of OS preference;
- desktop sidebar and mobile topbar controls stay synchronized and retain accessible names.

Focus/interaction behavior:
- pathname navigation focuses `#main-content` for keyboard/screen-reader continuity;
- query-string-only transitions inside the same practice route do not steal focus from the active control; Time Attack verifies its answer input remains focused after session start;
- skip navigation and visible focus outlines were verified in Chromium;
- mobile topbar Instagram, Account and Theme controls were measured at >=44 CSS px;
- automated mobile audit covered Library, Progress, Roadmap, Custom Practice, Writing, Time Attack, Survival, Match and Confusables, with no horizontal overflow and no visible actionable control below the 44px-height gate.

Visual evidence:
- checked-in full-page baselines cover Learn, Roadmap, Match setup and Writing setup on Chromium desktop + mobile: 8 PNGs total;
- all eight baseline PNGs were read back and manually inspected for hierarchy, clipping and overflow;
- the first full closeout run failed only the Learn visual comparison: desktop differed by 22 pixels and mobile by 7 pixels;
- actual + diff images were inspected. The difference was localized to rasterization/antialiasing of the small theme icon; no layout/content shift was visible;
- baselines were NOT regenerated. The comparator was changed to a strict `maxDiffPixels: 30` over the full-page image, which remains tiny relative to the screenshot area while filtering this observed raster noise;
- focused visual rerun after that correction: 2/2 PASS (desktop + mobile).

Final functional regression after visual correction:
- lint: 0 warnings/errors;
- normal unit/component tests: 102/102 PASS across 31 files;
- TypeScript + Vite production build: PASS;
- core JS entry: 483.96 kB (150.83 kB gzip), below the Vite 500 kB warning threshold with no size warning;
- Playwright full matrix: 31 executed PASS, 7 intentional environment-specific skips;
- all visual baseline comparisons PASS;
- Firebase emulator: 16/16 PASS across Auth, Firestore ownership/schema and event-sync convergence suites;
- production dependency audit: 0 vulnerabilities.

Closeout whitespace gate:
- the first integrated closeout command reached all functional PASS results above, then `git diff --check` blocked progression on one trailing blank line at `app/src/App.css` EOF;
- only that blank line was removed;
- `git diff --check` rerun: PASS;
- post-whitespace static rerun: lint 0 warnings/errors; 102/102 tests PASS; TypeScript + Vite build PASS with the same 483.96 kB core entry.

Result: PASS — Phase 3 is VERIFIED.

### E-046 — Phase 4 executable production bundle budget
Date: 2026-09-24
Scope: first Phase 4 hardening slice; production JS size guard only. This is not runtime CPU/network profiling.

Implementation:
- Vite production build emits `dist/.vite/manifest.json`.
- `app/scripts/check-bundle-budget.mjs` resolves JS files from the manifest, requires exactly one JS entry, measures raw file bytes from `dist`, and fails when the entry exceeds 490,000 bytes or any JS chunk exceeds 500,000 bytes.
- `npm run check` now runs lint -> normal tests -> production build -> bundle budget.

Observed clean production artifact:
- manifest contains exactly one `isEntry: true` JS entry and dynamic entries for the existing content/Firebase/secondary-route splits;
- core entry: 483.97 kB raw;
- largest non-entry JS chunk: `syncInfrastructure` 434.97 kB raw;
- all observed JS chunks are <= 500.00 kB;
- `npm run check`: PASS with lint 0 warnings/errors, 102/102 normal tests PASS, production build PASS, bundle budget PASS.

Blocking-path probe:
- generated `dist` only was modified; project source was not altered;
- exactly 7,000 bytes were temporarily appended to the generated core entry;
- measured core became 490.97 kB;
- `npm run check:bundle` returned FAILED with `core entry 490.97 kB > 490.00 kB budget`;
- production build was immediately rerun, regenerating clean `dist`;
- post-rebuild `check:bundle`: PASS again at core 483.97 kB;
- `git diff --check`: PASS; only the intended source/config/docs for this slice remain tracked as changes.

Result: PASS — bundle-size regression is now an executable gate.
Limitation: no claim is made yet about runtime parse/execute time, network transfer under real hosting, Web Vitals, memory use, or device CPU performance.

### E-047 — Phase 4 local production-preview runtime baseline
Date: 2026-09-24
Scope: reusable local-lab runtime profiling baseline. This is not production Web Vitals or a real-user-device benchmark.

Profiler implementation:
- `app/scripts/profile-runtime.mjs` serves the built `dist` through Vite preview and launches project-local headless Chromium;
- browser cache is disabled per fresh context;
- six representative routes are measured: Today, Learn, Progress, Roadmap, Writing setup and Match setup;
- each route receives three cold-context samples;
- collected metrics include FCP, DOMContentLoaded/load timing, resource/JS transfer bytes, Chromium task/script/layout/recalc duration, JS heap, DOM node count and layout/style counts;
- raw samples plus medians are written to `docs/testing/runtime-profile-2026-09-24.json`.

Environment recorded in the artifact:
- Chromium 153.0.8010.12;
- Node v22.23.2;
- win32;
- Vite local production preview;
- cache disabled;
- 3 samples per route.

Observed medians across the six routes:
- FCP range: 104–112 ms;
- DOMContentLoaded range: 55.0–62.7 ms;
- total task duration range: 143.11–162.19 ms;
- script duration range: 46.08–59.65 ms;
- JS transfer range: 214,819–219,314 bytes;
- JS heap used range: approximately 5.31–6.01 MB.
Route-level lazy loading is visible in transfer counts: Today/Learn use 5 JS resources; Progress/Roadmap/Writing use 6; Match uses 7.

Interpretation:
- no route is sufficiently separated in this 3-sample local baseline to justify a performance refactor;
- Progress has the highest median script duration (~59.65 ms), but the difference is too small/noisy to call it a bottleneck;
- the first Today FCP sample was 280 ms while the other two were 112 ms, demonstrating why medians/raw samples are retained instead of promoting a single run.

Verification:
- profiler completed successfully and wrote the JSON artifact;
- after adding the profiler, `npm run check` remained green: lint 0 warnings/errors, 102/102 normal tests PASS, production build PASS, bundle budget PASS;
- `git diff --check`: PASS.

Result: PASS — reproducible local runtime baseline established.
Limitation: no production network latency, mobile hardware CPU, memory pressure, interaction latency, Core Web Vitals or hosted compression/CDN behavior is represented by this measurement.

### E-048 — Phase 4 Firestore least-privilege/schema hardening (emulator verified)
Date: 2026-09-24
Scope: local Firestore rules and canonical emulator coverage. Production rules deployment was deliberately not performed in this slice.

Source/use audit before rule changes:
- production Firestore write call-sites under `app/src` are limited to `FirestoreEventSyncService`;
- that service reads/writes only `users/{uid}/events/*` and `users/{uid}/progress/*`;
- project-wide search found no `preferences/*` production usage;
- root `users/{uid}` documents are not part of the current app cloud contract;
- sessions remain a versioned rule/schema surface but are not uploaded by the current sync service;
- the older `src/services/firebase/firestore.rules.emulator.test.ts` is outside `vitest.firebase.config.ts`; useful negative coverage was moved into the canonical `app/firebase-tests` suite without deleting the older file.

Rule hardening:
- root `users/{uid}` document read/write/delete denied until an explicit schema exists;
- `preferences/*` read/write/delete denied until a versioned cloud preference schema exists;
- SRS/progress/session/event timestamps required to be nonnegative where defined;
- progress requires `currentCorrectStreak <= correctCount`;
- progress requires `nextReviewAt == srs.dueAt` and `lastReviewedAt == srs.lastReviewAt`, matching the current canonical reducer;
- StudyEvent `eventId/sessionId/cardId` must be non-empty strings and `occurredAt` nonnegative;
- StudySession IDs remain path/user-bound and `startedAt` nonnegative; endedAt still cannot precede startedAt;
- existing immutable-event and no-delete progress/session behavior is preserved.

Canonical negative-path additions:
- owner cannot read/write root user document or preferences;
- nested valid progress still succeeds while deletion fails;
- forged progress streak/timing linkage and negative review timestamps fail;
- empty event session/card references, negative event timestamp and event deletion fail;
- negative/backwards session timelines fail.

Verification:
- Firebase Auth/Firestore emulator suite: 21/21 PASS across 3 files (rules 13 tests, sync convergence 6 tests, auth 2 tests);
- existing two-offline-client event-journal convergence remains PASS;
- normal application gate after rules/tests: lint 0 warnings/errors, 102/102 unit/component tests PASS, TypeScript + production build PASS, bundle budget PASS;
- `git diff --check`: PASS.

Result: PASS — local/emulator security hardening verified.
Deployment status: NOT DEPLOYED. Current production Firestore rules remain unchanged until a fresh owner-reviewed deployment step.

### E-049 — Phase 4 multi-device, offline durability and journal recovery stress
Date: 2026-09-24
Scope: existing local-first/event-journal architecture under multi-device overlap, conflict, database reopen, snapshot loss and browser offline operation. No new product behavior was introduced.

Local persistence/recovery coverage:
- LocalLearningRepository focused suite increased to 12/12 PASS;
- new recovery case records four canonical events, deletes only the derived progress snapshot, then rebuilds progress from the immutable event journal;
- rebuilt result is 4 attempts / 3 correct / 1 incorrect while the four journal events remain intact.

Firebase emulator stress:
- canonical emulator suite increased from 21/21 to 24/24 PASS;
- two devices with one shared event plus device-specific events converge to exactly three events on both clients, with the shared event treated idempotently rather than duplicated;
- if two devices create the same eventId with different payloads, the second sync fails with `Cloud event conflict` and the already-uploaded cloud event is not overwritten;
- a 12-event local journal survives IndexedDB database close/reopen, retains derived progress, then uploads/downloads all 12 events successfully; resulting cloud progress is 12 attempts / 8 correct / 4 incorrect.

Real-browser offline path:
- production-like Playwright flow loads the Today study session while online, switches the Chromium desktop context offline, completes all five Kana answers, verifies five events exist in the local IndexedDB journal while offline, restores network, then verifies Progress shows 5/1124;
- focused offline browser run: desktop PASS; mobile intentionally skipped because the test is explicitly scoped to one desktop offline stress path.

Full regression after stress additions:
- `npm run check`: lint 0 warnings/errors; 103/103 unit/component tests PASS; TypeScript + production build PASS; bundle budget PASS at core 483.97 kB;
- full Playwright matrix: 32 PASS / 8 intentional project-specific skips;
- `git diff --check`: PASS.

Migration boundary:
- current Dexie database declares only `version(1)`;
- no schema v2 or migration function exists, therefore no migration success/failure claim is made in this slice;
- future schema-version changes must add explicit migration fixtures before claiming migration/recovery verification.

Result: PASS — current local-first sync and immutable event-journal recovery paths are stress-verified within the tested emulator/Chromium scope.
Limitations: this is not a real two-physical-device network test, does not simulate packet loss/latency beyond browser offline mode, and does not verify a nonexistent future database migration.

### E-050 — Phase 4 loading/error/recovery UX hardening
Date: 2026-09-24
Scope: failure-state and recovery UX only. No SRS, StudyEvent semantics, sync algorithm, content schema or backend deployment was changed.

Audit findings before implementation:
- content bootstrap failure could leave ZaPan on an error screen with no retry action;
- lazy/render exceptions had no top-level React error boundary;
- `useLearningData()` exposed an internal refresh function, but snapshot-dependent pages did not provide a consistent retry surface;
- a failed learning snapshot could leave zero/previous values visible on some pages, and a Guest/account repository switch could briefly expose the prior repository snapshot while the next snapshot was still loading;
- Session and stroke-order loading copy were not consistently announced with `role=status`.

Implemented recovery behavior:
- `AppErrorBoundary` wraps the application surface and keeps a deterministic reload recovery UI visible for render/lazy-route exceptions instead of dropping the entire interface;
- `LearningDataBoundary` gives snapshot-dependent pages one fail-closed contract: loading shows an accessible status, error shows an alert plus retry, and children are not rendered while their data is unavailable;
- Home, Review, Progress, Learn, Library, Custom Practice and Roadmap use that shared boundary;
- `useLearningData` tracks the repository that produced the current snapshot. When the active repository changes, cards/progress/events/overview from the previous identity are withheld until the new snapshot resolves;
- manual retry marks the snapshot loading, clears the prior error, and rereads the same local repository without deleting/resetting progress;
- content bootstrap failure exposes `Thử tải lại nội dung`, which starts a new verified-content load attempt;
- Session and StrokeOrder loading messages now expose `role=status`.

Focused regression:
- AppErrorBoundary render-crash fallback: PASS;
- LearningDataBoundary loading/error/retry behavior: 2/2 PASS;
- failed IndexedDB snapshot -> retry -> normal Home state: PASS;
- repository/profile switch -> previous snapshot hidden -> loading -> new snapshot: PASS;
- focused recovery suite: 5/5 PASS.

Failures caught during integration:
1. First full gate produced two `react(set-state-in-effect)` lint warnings from synchronous error/loading resets inside effects, and the old App shell test expected the Today action before the new asynchronous snapshot guard resolved.
   Correction: synchronous effect state writes were removed; retry remains event-driven, repository mismatch is derived during render, and the App test now waits for the real snapshot-dependent action.
2. The next full gate had 107/107 Vitest tests PASS but TypeScript rejected the test-only crashing component because its inferred return type was `void`.
   Correction: the test component was explicitly typed as `ReactNode`; production code was unchanged by that correction.

Final verification on corrected source:
- lint: PASS, 0 warnings / 0 errors;
- normal unit/component suite: 108/108 PASS across 34 files;
- TypeScript + Vite production build: PASS;
- production bundle budget: PASS; core entry 486.05 kB raw <= 490.00 kB, largest non-entry chunk 434.97 kB raw;
- full Playwright matrix: 32 PASS / 8 intentional project-specific skips;
- checked-in Phase 3 visual baseline comparisons remain PASS;
- `git diff --check`: PASS.

Result: PASS — current loading/error/snapshot-recovery behavior is verified within unit/component and Chromium regression scope.
Limitations:
- the content-bootstrap retry control is source-reviewed and included in the normal browser application path, but this slice did not inject a synthetic production dynamic-import/content-chunk failure in Playwright;
- this does not deploy the pending hardened Firestore rules, test a nonexistent Dexie v2 migration, or establish Firefox/Safari failure behavior.

### E-051 — Final Phase 4 integrated closeout
Date: 2026-09-24
Scope: integrated verification of the completed Phase 4 hardening work and the source-gated content boundary. No production deployment, Firebase production rule change, GitHub push or legacy working-tree replacement was executed.

Integrated closeout command from `app/`:
- `npm run check`
- `npm run test:firebase:emulated`
- `npm run test:e2e`
- `npm audit --omit=dev`
- repository `git diff --check` and `git status --short --branch`

Observed final results:
- lint: 0 warnings / 0 errors;
- normal unit/component suite: 108/108 PASS across 34 files;
- TypeScript + production Vite build: PASS;
- production bundle budget: PASS; core entry 486.05 kB raw <= 490.00 kB; all JS chunks <= 500.00 kB; largest non-entry chunk 434.97 kB;
- Firebase Auth/Firestore emulator: 24/24 PASS across 3 files, including ownership/schema hardening and multi-device/offline stress;
- Playwright Chromium desktop/mobile matrix: 32 PASS / 8 intentional project-specific skips;
- checked-in Phase 3 visual baseline comparisons remained PASS during the full browser run;
- production dependency audit: `found 0 vulnerabilities`;
- `git diff --check`: PASS;
- an earlier integrated rerun exposed React `act(...)` warnings in `SessionPage.identity.test.tsx` even though the test passed; root cause was test sequencing reading repositories before the async completion UI settled. The test was corrected to await the completion heading/status first, then the focused identity test and the final 108/108 suite ran without that warning;
- final integrated command ended with only the intended Phase 4 closeout docs plus this test-sequencing fix dirty; no unrelated project files were modified;
- integrated command exit code: 0.

Phase 4 quality-gate mapping:
- no placeholder level appears as available learning content: PASS. Active learner stages remain Hiragana, Katakana, N5 Vocabulary and N5 Kanji only;
- content provenance/versioning documented: PASS for currently active verified bundles and migrated Confusables data;
- security and sync scenarios verified: PASS through Firestore negative-path rules, immutable journal convergence, overlap/conflict stress, DB reopen and offline browser study;
- performance targets measured rather than guessed: PASS through executable raw-byte bundle budgets and a recorded local production-preview runtime baseline;
- known limitations documented: PASS.

Source-gated content boundary:
- Grammar, Reading, Listening, JLPT practice, N4 and N3 remain specification-only because no new verified content set was introduced in Phase 4;
- their absence is an intentional gate, not evidence that those learning stages were implemented;
- no placeholder content was created to make the roadmap appear complete.

Deferred boundaries carried into later work:
- hardened Firestore rules are emulator-verified but NOT deployed to production;
- current Dexie schema is still version 1, so there is no real schema migration to claim as tested;
- Firefox/Safari and real two-physical-device behavior remain unverified;
- GitHub Pages migration/live deployment has not started.

Result: PASS — Phase 4 is VERIFIED for the implemented hardening scope and the currently verified/source-gated content contract.
Next state: Phase 5 is PLANNED and requires a fresh owner review immediately before any production/destructive migration step.

### E-052 — Phase 5 local release-candidate preflight and regression
Date: 2026-09-24
Scope: owner-approved Phase 5 preparation before any remote branch/tag, Pages-setting, Firestore-production-rule, push or live-site mutation.

Remote/preflight facts verified read-only:
- authenticated GitHub account: `trungnguyencore`;
- target repository: public `trungnguyencore/zapan`, default branch `main`;
- legacy remote `main`: `a387e71351aa8266b6ae4751e89ae6be3e5ea1d9`;
- GitHub Pages legacy site returned HTTP 200 at `https://trungnguyencore.github.io/zapan/`, source `main:/`, build type `legacy`;
- remote had no rollback tags, no branch protection, no custom workflow, and zero repository Actions secrets/variables;
- Firebase v2 project `zapan-v2-trunk`, its Web App, and default Firestore Native database were ACTIVE; separate legacy project `zapan-app` was not selected for v2 work;
- the local origin typo `trunnguyencore/zapan` was corrected to `trungnguyencore/zapan` and `git ls-remote` then resolved the verified legacy commit.

Local release-candidate implementation:
- production Vite base is `/zapan/`; BrowserRouter basename derives from `BASE_URL`;
- production build emits `dist/404.html` from the same `dist/index.html` artifact;
- built `index.html` and `404.html` were read back and both referenced favicon/JS/CSS through `/zapan/`;
- a GitHub-Pages-like static harness verifies actual 404 fallback behavior instead of relying on Vite dev history fallback;
- GitHub Actions Pages workflow, release regression config, production-preview routing, public/developer README and release screenshot tooling were added;
- screenshots generated from the built artifact: desktop Today 1440x1000 / SHA-256 `8AD5E3877763B8B879B37F081BE35414E45201D822C6D6289633CBFB564F1E18`; mobile Learn 1081x1999 / SHA-256 `EFAA362DB093416CB5BE6C2B3DFE01B749C1D189BD4F7981E0C1ACE8C94397CE`.

Failures caught and corrected before the local release candidate became green:
1. The first Pages smoke treated every runtime `<script>` as a build asset. Firebase Auth injected an external Google API script on mobile, so that assertion failed while both desktop/mobile deep-route fallbacks already rendered correctly. Correction: verify the raw built HTML response for `/zapan/` asset prefixes instead of third-party runtime injections.
2. The first integrated release gate reported two `no-useless-escape` lint warnings in the new Pages regex assertions. Correction: remove only the unnecessary regex escaping.
3. The same integrated gate had one mobile Custom Practice failure after navigation to Progress. The failure snapshot still showed the authentication bootstrap surface (`Đang tải ZaPan…` / `Đang khôi phục trạng thái đăng nhập an toàn.`), while a focused mobile rerun passed 1/1 in 3.7 s. Correction: the existing E2E now waits for the real Progress heading before asserting streak/heatmap data; production logic was unchanged.

Final integrated local release gate on corrected source:
- lint: 0 warnings / 0 errors;
- normal unit/component suite: 108/108 PASS across 34 files;
- TypeScript + production build: PASS;
- bundle budget: PASS, core entry 486.10 kB raw <= 490.00 kB; all JS chunks <= 500.00 kB;
- Firebase Auth/Firestore emulator suite: 24/24 PASS across 3 files;
- normal Playwright Chromium desktop/mobile matrix: 32 PASS / 8 intentional project-specific skips;
- GitHub-Pages-like built-artifact matrix: 4/4 PASS across desktop/mobile root + direct/reloaded `/zapan/learn` fallback;
- production dependency audit: `found 0 vulnerabilities`;
- `git diff --check`: PASS;
- integrated command exit code: 0.

Result: PASS — local Phase 5 release candidate is verified. Production Firestore rules, rollback refs, GitHub Pages workflow setting, GitHub variables, remote `main` and the live site remain unchanged at this evidence point.
