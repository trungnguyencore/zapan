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
