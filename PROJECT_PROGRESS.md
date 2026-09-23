# ZaPan v2 — Project Progress

## Canonical status
Project root: `D:\OTHERS\LATVAT\japan`
Current phase: Phase 2 — Core learning product
Current status: IMPLEMENTING
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

## Current task
Phase 2 implementation is active.
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
- Firebase Auth/Firestore are capability-split so production build has no >500 kB chunk warning.

## Current next slice
Wire verified N5 Vocabulary and Kanji bundles into Learn/Today/Review without regressing the production bundle/performance gate.

## Phase 2 remaining work
1. wire verified Vocab/Kanji bundles into Learn/Today/Review and typed-answer sessions;
2. run a production browser account + cloud-sync smoke with temporary-account/data cleanup;
3. run the complete Phase 2 regression gate and only then mark Phase 2 VERIFIED.

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
- N5 Vocabulary/Kanji content completeness remains under audit;
- N4/N3 learning content is not implemented;
- production multi-device cloud-sync smoke is still pending (emulator convergence is verified);
- Firefox/Safari support remains unverified.
