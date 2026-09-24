# ZaPan v2 — Engineering Decisions and Lessons

## DEC-001 — Greenfield rewrite
Status: ACCEPTED
Date: 2026-09-24
Context: Legacy ZaPan generations contain useful ideas/content but accumulated incompatible progress models and architecture debt.
Decision: ZaPan v2 is implemented from scratch inside `D:\OTHERS\LATVAT\japan`.
Consequence: legacy code is reference-only; new architecture does not inherit legacy component structure.

## DEC-002 — Preserve GitHub repository identity
Status: ACCEPTED
Date: 2026-09-24
Decision: Keep the existing `trunnguyencore/zapan` repository and history.
Final release replaces legacy working-tree contents only after backup, verification, and owner review.
Do not delete/recreate the repository.

## DEC-003 — Continuous verification
Status: ACCEPTED
Date: 2026-09-24
Decision: Every implementation slice must pass its relevant gate before the next slice begins.
Consequence: failures block progression unless explicitly documented as non-blocking.

## DEC-004 — One learning state model
Status: ACCEPTED
Date: 2026-09-24
Decision: Quiz, Review, Writing, Match, Time Attack, Survival and other eligible practice surfaces converge on canonical StudyEvent/Progress/SRS domain logic.
Consequence: no mode-specific mastery databases.

## DEC-005 — Owner Instagram mark
Status: ACCEPTED
Date: 2026-09-24
Decision: ZaPan contains a discoverable, accessible Instagram link for `@trunk.ng` pointing to `https://www.instagram.com/trunk.ng/`.
The element must remain low-noise and not interfere with learning tasks.

## Lesson log
Phase 1 implementation lessons are recorded below. Future entries should capture problem, evidence, alternatives, chosen adjustment, consequences, and approval status when required.

## DEC-006 — Response-time averages track their own sample count
Status: ACCEPTED
Date: 2026-09-24
Problem: valid learning events may be untimed (for example self-grade/writing), so `attempts` cannot be used as the denominator history for response-time averaging.
Decision: `ProgressRecord` includes `responseTimeSampleCount`; only events with real measured `responseTimeMs` increment it.
Consequence: ZaPan can mix timed and untimed learning modes without corrupting average response time.

## DEC-007 — Phase 1 UI uses CSS semantic tokens without a UI framework
Status: ACCEPTED
Date: 2026-09-24
Decision: keep Phase 1 presentation dependency-light using CSS custom properties and reusable React primitives.
Reason: current requirements do not justify a component framework; this keeps visual semantics inspectable and avoids premature lock-in.
Revisit only if later UI complexity provides concrete evidence that a library would reduce risk/cost.

## DEC-008 — Browser tests use project-local Playwright browsers
Status: ACCEPTED
Date: 2026-09-24
Decision: Playwright uses `PLAYWRIGHT_BROWSERS_PATH=0` through `cross-env`, with Chromium installed under project `node_modules`.
Reason: project work is constrained to the ZaPan workspace and should not depend on a user-global browser cache.

## Implementation lessons — Phase 1
1. The first Progress reducer test file had a missing closing brace. The test gate blocked UI work until the syntax error was fixed; rerun then passed 20/20 tests.
2. The first Playwright matrix ran desktop-specific and mobile-specific tests against both projects. Matching-environment behavior passed, but the suite correctly failed. Project-specific skips fixed the test design.
3. The first Windows Playwright install command set `PLAYWRIGHT_BROWSERS_PATH` with a trailing space, creating an ignored local `app\\0 ` browser artifact. It was not deleted because project rules forbid unapproved deletion. A correct hermetic install was then made under `node_modules`.
4. After E2E files were added, Vitest discovered the Playwright spec during `npm run check`. The final gate caught this; Vitest is now explicitly limited to `src/**/*.test.{ts,tsx}`.

## DEC-009 — Project-local npm cache guard
Status: ACCEPTED
Date: 2026-09-24
Problem: the initial npm bootstrap ran before an explicit project-local cache setting existed, so npm may have used its normal user cache outside the ZaPan workspace.
Decision: `app/.npmrc` fixes npm cache to `../.npm-cache`, which resolves inside the canonical project root.
Verification: `npm config get cache` from `app/` returned `D:\\OTHERS\\LATVAT\\japan\\.npm-cache`.
Consequence: future npm install/create/update commands in this app do not need to rely on the user-global npm cache path.

## Implementation lesson 5 — Stop the actual child server, not only its shell
The manual visual-check Vite process left a child `node.exe` listening on port 4173 after its parent shell was terminated.
The next integrated Playwright gate correctly failed because the port was occupied.
The listener PID was identified as the ZaPan-local Vite command before termination; after stopping it, the full integrated regression passed.
Future manual dev-server work should verify the listening port is released before the next browser gate.

## DEC-010 — Dexie as the Phase 2 IndexedDB adapter
Status: ACCEPTED
Date: 2026-09-24
Decision: use Dexie as a thin service-layer adapter over browser IndexedDB; domain types/reducers remain framework- and storage-independent.
Reason: Phase 2 requires durable transactions, schema versioning, indexed queries and deterministic tests without pushing persistence mechanics into React or domain math.
Verification: repository integration suite passes reopen persistence, atomic event/progress/session writes, idempotency and due queries; full lint/test/build gate is green.
Consequence: a future storage replacement remains possible through the `LearningRepository` port.

## Implementation lesson 6 — test pass does not imply compile pass
The first persistence full gate had all 30 tests passing but TypeScript build rejected a constructor parameter property under `erasableSyntaxOnly`.
The gate correctly blocked progression until the class field was rewritten explicitly and the full check passed.

## DEC-011 — Content is versioned, validated, and audited per bundle
Status: ACCEPTED
Date: 2026-09-24
Decision: ZaPan v2 does not bulk-copy legacy learning data. Each bundle has stable Card IDs, sourceVersion, runtime validation, provenance/audit state and duplicate detection.
Current verified bundle: `foundation-kana-main-v1` with 92 basic Kana cards.
Reason: legacy reference data contains at least one observed script inconsistency in Katakana dakuten and cannot be treated as automatically trustworthy.
Consequence: un-audited content stays unavailable rather than being presented as complete N5 material.

## DEC-012 — ZaPan v2 gets a separate Firebase project
Status: ACCEPTED
Date: 2026-09-24
Decision: use new Firebase project `zapan-v2-trunk`; do not reuse legacy `zapan-app`.
Evidence: legacy gd9 Firebase source identifiers match the existing `zapan-app` web app.
Consequence: v2 backend work cannot accidentally mutate legacy user/progress data.

## DEC-013 — Firestore region and protection
Status: ACCEPTED
Date: 2026-09-24
Decision: create Firestore Native `(default)` database in `asia-southeast1` with delete protection enabled.
Reason: dedicated v2 backend, regional placement suitable for the intended use, and protection against accidental destructive deletion.

## DEC-014 — Firebase emulator/runtime artifacts stay project-local
Status: ACCEPTED
Date: 2026-09-24
Decision: use a verified Temurin 21 runtime under `firebase/.runtime` and set `FIREBASE_EMULATORS_PATH` to `firebase/.emulators`.
Reason: the workspace rule prohibits relying on emulator/JDK installation artifacts outside the canonical project.

## DEC-015 — Do not force-fix dev-only Firebase CLI audit findings
Status: ACCEPTED
Date: 2026-09-24
Decision: do not run `npm audit fix --force` while its suggested path downgrades firebase-tools to 10.1.1.
Evidence: production audit is clean; current seven moderate findings are in the dev-only CLI dependency chain.
Consequence: tooling risk is tracked explicitly and revisited on Firebase CLI updates rather than trading it for an unreviewed breaking downgrade.

## Implementation lesson 7 — Production Auth setup differs from emulator readiness
Email/password Auth works end-to-end against the Firebase Auth emulator, but production provider activation still requires project Auth initialization/provider enablement through a supported production control path.
Do not treat emulator PASS as proof that the production sign-in provider is enabled.

## DEC-016 — Today is a canonical StudyMode
Status: ACCEPTED
Date: 2026-09-24
Decision: mixed daily sessions use StudyMode `today` rather than being mislabeled as `learn` or `review`.
Reason: Today can contain both overdue review and new material; accurate session analytics should preserve that distinction while per-card SRS still derives from StudyEvent outcomes.
Verification: domain/build/browser gates and Firestore rules emulator regression passed; production rules revision deployed.

## Implementation lesson 8 — React compiler warnings are quality-gate failures
The first real-session full gate passed all tests/build but produced four lint warnings around render purity, Fast Refresh module boundaries and effect state updates.
Progression remained blocked until all four were corrected and lint returned 0 warnings/errors.

## DEC-017 — Local progress is isolated per identity
Status: ACCEPTED
Date: 2026-09-24
Decision: Guest and each authenticated Firebase uid use distinct IndexedDB databases (`zapan-v2:<userId>`).
Reason: progress from different people/accounts using the same browser must never appear in the wrong profile.
Consequence: switching identity switches the local progress store; explicit migration is required if Guest data is ever transferred into an account.

## DEC-018 — Immutable StudyEvent journal drives multi-device reconciliation
Status: ACCEPTED
Date: 2026-09-24
Decision: cloud synchronization merges immutable StudyEvents by eventId and deterministically replays events per card; cloud ProgressRecord documents are derived snapshots, not the merge authority.
Reason: two devices can study the same card while offline. Last-write-wins progress snapshots can lose history; event replay preserves both actions and converges deterministically.
Verification: two independent offline clients converged to identical local/cloud progress in Firebase emulator tests.

## DEC-019 — Guest progress is not silently merged into an account
Status: ACCEPTED
Date: 2026-09-24
Decision: signing in selects the account's isolated local/cloud history. Existing Guest history remains in its Guest database unless a future explicit import/migration UX is designed and approved.
Reason: automatic merging can combine study histories belonging to different people on a shared device and is difficult to reverse safely.

## DEC-020 — Firebase infrastructure is lazy-loaded by capability
Status: ACCEPTED
Date: 2026-09-24
Decision: core/Guest loads without Firebase Auth/Firestore. Firebase App/Auth are dynamically loaded for account capability; Firestore sync is loaded only after authentication.
Reason: eager Firebase imports produced a >1 MB production bundle and a Vite chunk warning.
Verification: final build has no >500 kB warning; largest observed chunks are core 475.45 kB and sync 434.39 kB.

## Implementation lesson 9 — A successful build with a performance warning is not a green gate
The first account-aware build compiled successfully but exceeded Vite's 500 kB chunk warning. Raising the threshold would only hide the issue. Dynamic capability boundaries removed the warning while preserving behavior.

## Implementation lesson 10 — Use Firebase Auth providers-as-code before falling back to manual console work
An earlier REST-first attempt assumed Email/Password might require manual Firebase Console activation. Current firebase-tools supports `firebase.json` Auth provider configuration and `firebase deploy --only auth`, which enabled Email/Password without billing changes or owner intervention.

## DEC-021 — Vocabulary normalization is formatting-only and IDs are frozen per source version
Status: ACCEPTED
Date: 2026-09-24
Decision: the first N5 vocabulary bundle preserves legacy terms and Vietnamese meanings, normalizing only outer whitespace and splitting packed reading delimiters into separate accepted answers.
Card IDs use the frozen source key `vocab-n5-v1` plus audited group-position keys for source version `vocab-n5-legacy-audit-v1`.
Reason: this imports usable legacy study content without silently rewriting semantics or making display text the identity key.
Consequence: future source reorder/edit work must preserve existing IDs or use an explicit migration/new source version; rerunning the generator against arbitrarily reordered legacy content is not an ID migration strategy.

## DEC-022 — Kanji metadata is preserved as audited study data, not silently corrected
Status: ACCEPTED
Date: 2026-09-24
Decision: the first N5 Kanji bundle preserves accepted readings, on/kun strings, VI/EN meanings, Hán Việt, stroke counts and mnemonic text from the audited legacy reference, trimming only outer whitespace.
Eight explicit empty kunyomi strings remain empty rather than receiving AI-invented values.
Mnemonic text is labeled/treated as a memory aid, not sourced etymology.
Card IDs use source key `kanji-n5-v1` plus frozen audited group-position keys for source version `kanji-n5-legacy-audit-v1`.
Consequence: future corrections are explicit content revisions with evidence and stable-ID/migration consideration, not silent generator behavior.

## DEC-023 — Large verified content packs are runtime-split but metrics wait for the complete repository
Status: ACCEPTED
Date: 2026-09-24
Decision: N5 Vocabulary and Kanji load through dynamic content chunks rather than inflating the initial core bundle. The application keeps the learning shell in a bootstrap state until all currently verified content packs are available, then exposes one complete 1,124-card repository to Today/Learn/Review/Progress.
Reason: showing Kana-only metrics first and changing totals after asynchronous content load would be misleading, while eagerly bundling all content would regress the established performance gate.
Verification: repository integration test confirms 1,124 unique cards; production build retains all chunks below the warning threshold; browser Kana/Vocab/Kanji learning flows pass.

## Implementation lesson 11 — Accessible-name selectors need exactness when topic labels overlap
The first Kanji browser test used accessible name `Học Số đếm`, which also matched Vocabulary `Học Số đếm & Lượng từ` under Playwright substring semantics. The app behavior was correct, but the quality gate failed. The selector now uses exact matching and the full E2E matrix passes.

## DEC-024 — A StudySession owns one immutable local identity/repository scope
Status: ACCEPTED
Date: 2026-09-24
Problem: a production cloud-sync smoke showed one five-answer session split across account and Guest IndexedDB stores when AppServices changed identity during the session.
Decision: when a StudySession starts, ZaPan pins its content repository, LearningRepository and userId for the full session lifetime. Every event and completion write stays in that pinned repository.
Cloud sync may run automatically at completion only if the current authenticated identity still matches the pinned session owner.
Reason: a StudySession must be an internally coherent journal; identity transitions cannot silently move later events into another person's/local profile store.
Verification: regression test switches AppServices from account to Guest after question 2; all five events remain in the account repository and none enter Guest.

## DEC-025 — Initial Firebase Auth restoration is an application boot prerequisite
Status: ACCEPTED
Date: 2026-09-24
Problem: after full-page navigation/reload, ZaPan briefly rendered Guest learning before Firebase Auth restored a persisted account. A session started inside that window was correctly pinned by DEC-024, but to the wrong Guest identity.
Decision: when Firebase is configured, the learning application shell is not exposed until the initial Auth observer resolves authenticated or signed-out state. Content readiness and Auth readiness are independent boot gates and both must be ready.
Reason: persisted authentication is part of selecting the correct local IndexedDB and cloud capability; rendering a temporary Guest state creates cross-profile data hazards.
Verification: final production smoke retained all five events in the authenticated account database across a full-page learning navigation and converged to a second isolated browser context.

## Implementation lesson 12 — Emulator convergence was necessary but not sufficient
The event-journal emulator tests proved deterministic multi-device reconciliation, but they did not reproduce the browser-level Auth restoration race.
The production browser gate first exposed a 3-event cloud result. Diagnostic inspection found a 3-account / 2-Guest local split; after session pinning, a second diagnostic found all 5 events in Guest after reload, which isolated the Auth boot race.
Both failed production runs executed cleanup successfully before further changes.
Conclusion: cross-layer production browser smoke remains a release-critical gate for identity/persistence/sync behavior; passing unit and emulator tests must not be treated as proof of browser lifecycle correctness.

## DEC-026 — Activity metrics derive from immutable StudyEvents
Status: ACCEPTED
Date: 2026-09-24
Decision: Progress activity analytics derive from the same persisted StudyEvent journal used for learning reconciliation. No separate activity counter/database is introduced.
Measured study time is the sum of StudyEvent `responseTimeMs` values that were actually measured; missing timing contributes zero rather than receiving a synthetic estimate. Session open duration is not labeled as active study time.
Calendar/streak semantics use the browser's resolved IANA timezone. A current streak is the consecutive sequence ending today, or ending yesterday if the learner has not studied yet today. If yesterday has no event, current streak is zero.
Reason: event-derived metrics converge across local/cloud histories and preserve the project rule that synthetic timing must never be presented as measured behavior.
Verification: deterministic timezone/activity unit tests plus desktop/mobile browser flows with persisted StudyEvents and reload checks.

## DEC-027 — Secondary Phase 3 routes are code-split before heavier practice modes
Status: ACCEPTED
Date: 2026-09-24
Problem: the measured core production JS chunk grew to 491.54 kB before Writing/Games were implemented, leaving little margin below the Vite 500 kB warning threshold.
Decision: keep the primary learning loop (Today/Home, Learn, Review, Session) eager while lazy-loading secondary/heavier surfaces beginning with Library, Progress and Custom Practice behind a shared Suspense fallback.
Reason: route-level splitting reduces initial bundle pressure without delaying the most frequent learning path.
Verification: core entry decreased to 480.09 kB and full desktop/mobile browser regression stayed green.
Consequence: new heavier Phase 3 practice surfaces should default to lazy route boundaries unless measured evidence shows eager loading is preferable.
