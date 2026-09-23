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
Verified Phase 2 backend/auth foundation:
- persistent Guest identity;
- Firebase v2 project separated from legacy backend;
- Auth adapter verified on emulator;
- Firestore production database created and protected;
- Firestore rules verified on emulator and deployed.
Current production blocker: Email/Password provider activation in Firebase Console.
Next slice: real local learning session + Today/Review flow.

## Phase 2 remaining work
3. implement Guest identity and account/auth flow;
4. implement StudySession/event persistence;
5. implement real Review queue and Today session builder;
6. connect Progress UI to persisted canonical records;
7. implement Firebase sync + security rules with emulator/integration tests;
8. verify offline -> online reconciliation before expanding features.

## Scope / local artifact notes
All project source, generated build output, browser binaries and maintained caches are now configured under the canonical workspace.
The initial npm bootstrap occurred before the local `.npmrc` cache guard existed, so npm may have touched its normal user cache outside the workspace; this was not inspected or cleaned because outside-workspace access/change was not approved.
Future npm commands resolve cache to `D:\\OTHERS\\LATVAT\\japan\\.npm-cache` (verified with `npm config get cache`).

An initial malformed Playwright environment command created an ignored generated directory matching `app/0*`.
It is not used by the application or final browser tests and is excluded from Git.
It has not been deleted because project rules prohibit unapproved deletion.

## Deferred / unverified
- real Firebase project configuration and production security rules;
- real GitHub repository remote state from this local workspace;
- production deployment configuration;
- N5/N4/N3 content completeness;
- cross-device sync implementation;
- live GitHub Pages behavior;
- Firefox/Safari support.
