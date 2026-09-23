# ZaPan v2 — Architecture

## Status
This document is the Phase 1 target architecture. Items marked planned are not production-proven.
The implementation source lives in `app/` under the project root.
Legacy ZaPan code is reference-only and is not an implementation dependency.

## Architectural goals
- one canonical learning state model;
- local-first learning experience;
- deterministic domain logic independent from React/Firebase;
- replaceable persistence adapters;
- content separated from user progress;
- route/page code free from SRS math;
- testable failure and offline behavior;
- no hidden duplicate state stores.

## Layer boundaries
`src/domain` contains pure business rules and no React/Firebase imports.
`src/services` contains persistence, config, network, speech, stroke and platform adapters.
`src/data` will contain versioned static learning content bundles.
`src/features` contains vertical user experiences and composes domain/services.
`src/components/ui` contains reusable presentation primitives.
`src/app` owns application shell, routing, providers and global policies.

## Dependency direction
app/features -> domain + services + ui
services -> domain types where needed
domain -> no app/features/services dependency
ui -> no learning business rules
This direction is enforced by review first; automated boundary checks may be added if the codebase grows enough to justify them.
## Primary data flow
1. UI starts or resumes a StudySession.
2. A user interaction creates a StudyEvent.
3. The event is validated and assigned a stable eventId.
4. Domain reducer applies the event to the matching ProgressRecord.
5. The single SRS engine updates review scheduling.
6. Local persistence stores the event/session/progress update durably.
7. UI reads derived state from the canonical record/query layer.
8. Authenticated sync later reconciles local records with Firestore.

## Truth hierarchy
For learning history, immutable StudyEvents are the strongest behavioral evidence where retained.
ProgressRecord is a current snapshot optimized for reads and scheduling.
Derived UI metrics such as mastery/streak/heatmap must be reproducible from canonical inputs or clearly documented snapshots.
Static content bundles provide card definitions but never user mastery.

## Persistence ports planned for Phase 2
- ContentRepository: reads versioned learning content.
- ProgressRepository: reads/writes per-card progress.
- SessionRepository: creates/completes study sessions.
- EventRepository: records canonical events or event batches.
- UserPreferencesRepository: theme/language/session settings.
- SyncService: reconciles authenticated local/cloud state.
Interfaces should be small and domain-oriented, not mirror Firestore APIs.

## Runtime modes
Guest/local mode: no account required; local learning remains functional.
Authenticated mode: local-first writes plus cloud synchronization.
Offline mode: supported learning paths continue from locally available content/state.
Degraded external-assets mode: optional network resources such as stroke SVGs fail gracefully.

## Error policy
Domain invariant violations throw early in development/tests.
User-facing recoverable errors become explicit UI states with retry or fallback.
Network errors must not silently discard local study events.
Schema/version mismatch must fail safely and trigger a migration/recovery path rather than guessing.
## Routing foundation
Current Phase 1 routes:
- `/` Today/Home
- `/learn`
- `/review`
- `/library`
- `/progress`
Practice/detail routes are deferred until their flows exist.
BrowserRouter is used locally; final GitHub Pages deep-link strategy remains a release/deployment decision and is not considered solved by Phase 1.

## UI state policy
Remote/persistent learning state should not be copied into many component-local mirrors.
Ephemeral interaction state may remain local to a feature.
No fake metrics are rendered before their update pipeline exists.
Navigation, loading, empty, error and offline states are explicit.

## Content strategy
Initial product content target: verified N5 foundation.
Content bundles receive explicit sourceVersion values.
Stable cardId values must survive wording/translation edits.
Display Japanese text is never used as the sole persistence identity.
N4/N3 routes are not exposed as available learning content until real bundles and tests exist.

## Security boundary
Client code is untrusted.
Firestore rules, not UI checks, enforce user data authorization.
No service-account credential/private key belongs in the web app or repository.
Firebase web configuration may be public by design, but environment separation and validation still apply.
User-supplied HTML is not rendered unsanitized.

## Performance direction
Prefer static content bundles/code splitting over repeated network fetches for core N5 data.
Measure bundle size and route performance before optimization claims.
Avoid introducing global state or data libraries without a demonstrated need.

## Architecture review trigger
Revisit this document when a change affects domain identity, SRS algorithm, persistence contract, Firebase topology, routing/deployment model, or content versioning.
