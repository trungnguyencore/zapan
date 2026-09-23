# AGENTS.md — ZaPan v2 working rules

## Canonical project
Work only inside `D:\OTHERS\LATVAT\japan` unless the owner explicitly approves another scope.
Read `PROJECT_PROGRESS.md` first, then `implementation.md`, `WEB_ROADMAP.md`, `PROJECT_DECISIONS.md`, and `PROJECT_EVIDENCE.md`.

## Legacy boundary
`D:\STUDY\JAPANESE` and all old ZaPan generations are reference-only.
Do not edit, build, normalize, move, or clean them.

## Verification
No green test/evidence -> no progression.
Do not call a task complete until relevant tests and observable output are checked.
Record meaningful verification in `PROJECT_EVIDENCE.md`.

## Change control
Keep diffs small and scoped.
Do not delete/move/rename user work without explicit approval.
Architecture/product/schema/backend/deployment changes discovered during implementation require a decision entry and owner approval when significant.

## State
`PROJECT_PROGRESS.md` is the canonical resume/state file for this project.
Update it only after meaningful verified progress.
Do not use chat history as the primary project state.

## Branding
The application must include the approved Instagram ownership link: https://www.instagram.com/trunk.ng/

## Repository release
The existing GitHub repository is preserved.
Do not replace its legacy contents until the final release gate and a fresh owner review.
