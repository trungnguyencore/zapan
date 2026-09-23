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
