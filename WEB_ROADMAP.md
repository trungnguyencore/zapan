# ZaPan v2 — Web / App Roadmap

## Execution rule
A phase is not considered complete because code exists.
Every task moves through: PLANNED -> IMPLEMENTING -> TESTING -> VERIFIED.
A blocking test failure stops progression.

## Phase 1 — Product specification, architecture, foundation
Status: VERIFIED — 2026-09-24
Goal: establish a clean, testable greenfield base.
Deliverables:
- master specification and canonical progress/evidence/decision files;
- local Git repository;
- React + TypeScript + Vite scaffold;
- routing/application shell skeleton;
- design tokens and accessibility baseline;
- canonical content/card identity types;
- StudyEvent, ProgressRecord, StudySession domain models;
- deterministic SRS engine v1;
- schema validation/config boundary;
- initial unit test suite;
- CI-ready scripts for lint/type/test/build;
- test strategy and release gates.

Phase 1 quality gate:
- install succeeds;
- lint passes;
- TypeScript/build passes;
- domain tests pass;
- initial browser smoke test passes when browser tooling is installed;
- evidence is recorded.
## Phase 2 — Core learning product
Goal: make the primary learning loop genuinely usable.
Deliverables:
- Auth + Guest entry flows;
- Home / Today dashboard;
- Learn hierarchy;
- Review queue;
- Kana/Vocab/Kanji N5 content pipeline;
- unified learning session engine;
- one persistence interface;
- local durable progress;
- Firebase authenticated sync;
- offline/online reconciliation;
- session summary and mistake recovery.

Phase 2 quality gate:
- new/review flows work end-to-end;
- progress updates from real StudyEvents;
- reload preserves local state;
- auth sync tests cover supported paths;
- no Stats/Roadmap UI reads incompatible schemas;
- manual desktop/mobile regression passes.

## Phase 3 — Advanced learning, UX, practice
Status: VERIFIED — 2026-09-24
Goal: complete high-value practice without fragmenting progress.
Deliverables:
- Writing: Trace / Copy / Recall;
- stroke-order viewer with graceful fallback;
- Custom Practice;
- Time Attack, Survival, Match, Confusables;
- Library for Kana/Vocab/Kanji;
- Roadmap based on canonical progress;
- Progress dashboard;
- real study minutes, streak, heatmap;
- owner Instagram branding;
- responsive navigation, themes, accessibility polish.

Phase 3 quality gate:
- every eligible mode emits valid StudyEvents;
- no synthetic timing is recorded as measured timing;
- statistics agree with fixture histories;
- Instagram desktop/mobile/a11y checks pass;
- keyboard/touch and visual regression pass.
## Phase 4 — Content expansion and hardening
Status: VERIFIED — 2026-09-24
Goal: broaden learning value and stress the platform before release.
Candidate deliverables, gated by real content:
- grammar framework;
- listening framework;
- reading framework;
- JLPT practice;
- PDF/reference library;
- bookmarks/notes if justified;
- N4 then N3 only when verified complete enough;
- search across library/content;
- performance profiling;
- security-rule review;
- multi-device conflict tests;
- offline stress tests;
- migration/recovery tests;
- error/empty/loading states.

Phase 4 quality gate:
- no placeholder level appears as available learning content;
- content provenance/versioning is documented;
- security and sync scenarios are verified;
- performance targets are measured rather than guessed;
- known limitations are documented.

## Phase 5 — Release engineering and production migration
Status: IMPLEMENTING — PRODUCTION BACKEND VERIFIED; REMOTE MAIN MIGRATION PENDING
Goal: replace the legacy GitHub Pages application safely.
Deliverables:
- full regression suite;
- production build verification;
- browser/mobile/device smoke tests;
- Firebase production configuration verification;
- console/network review;
- final README and screenshots;
- repository rollback tag/branch;
- reviewed legacy working-tree replacement;
- push/deploy;
- live-site smoke test;
- release evidence and rollback instructions.

Phase 5 quality gate:
- owner reviews destructive migration plan immediately before execution;
- all required gates are green;
- deployed commit is recorded;
- live site passes post-deploy verification;
- rollback path is documented.
