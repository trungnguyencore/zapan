# ZaPan v2 — Project Progress

## Canonical status
Project root: `D:\OTHERS\LATVAT\japan`
Current phase: Phase 3 — Advanced learning, UX, and practice
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

## Phase 3 current work
Verified Phase 3 slices:
- Library searches the full verified 1,124-card repository across real Kana/Vocabulary/Kanji fields, filters by content type, and limits DOM rendering to the first 60 matches while preserving the complete match count;
- Custom Practice supports explicit multi-topic selection with 5/10/20-card deterministic sessions, emits canonical `mode=custom` StudyEvents into the same SRS/progress pipeline, and is verified on desktop/mobile plus Firestore emulator sync;
- Progress derives measured active-study time, streak, active days, 7-day totals and a 28-day heatmap directly from persisted StudyEvents with explicit timezone/day-boundary semantics; desktop/mobile persisted-history flows are verified;
- Writing supports Trace / Copy / Recall for Kana/Kanji, explicit self-grade through canonical `mode=writing` / `inputKind=drawing` StudyEvents with no synthetic response time, and codepoint-based KanjiVG viewing with tested network-failure fallback;
- local session creation is transactionally idempotent under concurrent StrictMode effects, with regression coverage;
- Time Attack and Survival share one typed-practice foundation, write measured canonical StudyEvents (`mode=time-attack` / `mode=survival`) into the same SRS/progress pipeline, and keep timer/score/lives as presentation-only state. Both are verified on desktop/mobile and through Firestore emulator sync.

Current next slice:
- implement Match and Confusables on canonical StudyEvents without parallel mastery state;
- then implement canonical Roadmap and remaining Phase 3 UI/accessibility polish.

Performance guard:
- secondary/heavier Phase 3 routes are lazy-loaded; Writing builds as an ~11.78 kB route chunk, Arcade as ~8.96 kB, and measured core production JS entry remains ~481.06 kB.

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
