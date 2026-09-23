# ZaPan v2 — Firebase / Sync Plan

## Status
PLANNED, not yet connected to a real Firebase project in Phase 1.
The current app intentionally runs with `firebase: null` when no Firebase environment is provided.
Do not treat this document as evidence that cloud sync is implemented.

## Goals
- optional account; Guest remains usable;
- local-first durability;
- authenticated multi-device sync;
- no array-length conflict heuristic;
- security rules enforce ownership;
- schema migrations are explicit;
- network failure never discards a completed local study action.

## Authentication direction
Phase 2 minimum candidate: Firebase Authentication with a simple supported sign-in method plus Guest/local mode.
Exact providers (email/password, Google, etc.) require implementation review before enabling.
Do not reintroduce a custom public username lookup collection without reviewing enumeration/privacy/security implications.

## Firestore candidate topology
`users/{uid}` — profile/account metadata only.
`users/{uid}/progress/{cardId}` — per-card ProgressRecord snapshot + sync metadata.
`users/{uid}/sessions/{sessionId}` — session summary/status.
`users/{uid}/events/{eventId}` — immutable/idempotent study events if event retention cost/volume is accepted.
`users/{uid}/preferences/main` — synchronized preferences when justified.
Public/static learning content should preferably ship as versioned app assets initially rather than incur Firestore reads for every card.

## Why per-card progress documents
- isolates conflicts to the actual card;
- allows incremental sync;
- avoids rewriting a giant weakness/progress array;
- supports query/index strategies later;
- allows explicit updatedAt/revision metadata.
Document shape must be validated before use.
## Local-first write sequence
1. User action produces validated StudyEvent.
2. Domain reducer computes new ProgressRecord.
3. Local transaction persists event/progress/session update.
4. UI may confirm success only after the local durability boundary succeeds.
5. Sync queue marks changed records/events.
6. When authenticated and online, SyncService uploads idempotently.
7. Server acknowledgement advances sync metadata.

The exact browser storage implementation (native IndexedDB or a library) is a Phase 2 implementation decision after a small proof/test; localStorage is not the default plan for canonical high-volume progress.

## Conflict strategy direction
Never choose cloud/local by collection length.
For independent card progress, reconcile per card.
Immutable events should use eventId idempotency to avoid duplicate application.
For progress snapshots, candidate inputs are revision, updatedAt, writer id and the retained event journal.
If two devices update the same card offline, prefer deterministic event-based replay/merge when feasible; otherwise define and test a conservative conflict policy before production.

## Clock assumptions
Client clocks are not fully trusted.
SRS due scheduling needs a coherent local UX clock, while cloud conflict metadata may need server timestamps.
Do not mix Firebase server timestamp sentinel values directly into pure domain math.
Adapters convert storage timestamps to domain numbers.

## Security rules requirements
Before production:
- authenticated user can access only own `users/{uid}` tree;
- writes validate expected field types/ranges where practical;
- user cannot assign another uid as owner;
- public leaderboard, if ever added, has separate constrained write/read rules;
- no blanket production `allow read, write: if true`;
- rules have emulator tests.

## Environment contract
Phase 1 validates an all-or-nothing Firebase web config:
- VITE_FIREBASE_API_KEY
- VITE_FIREBASE_AUTH_DOMAIN
- VITE_FIREBASE_PROJECT_ID
- VITE_FIREBASE_STORAGE_BUCKET
- VITE_FIREBASE_MESSAGING_SENDER_ID
- VITE_FIREBASE_APP_ID
No real values are committed in Phase 1.
## Offline behavior
Guest/local learning must work without Firebase.
Authenticated users should continue studying offline from locally available data.
Sync status must be observable: synced / pending / offline / error, without alarming the learner for normal offline use.
Optional remote-only assets need graceful fallback.

## Data deletion/reset
Reset/delete is destructive and must be explicitly designed.
A future implementation needs:
- confirmation UX;
- exact scope (progress only vs account);
- local and cloud handling;
- tombstone/sync semantics so deleted progress does not reappear from another device;
- tests and rollback expectations where applicable.
Do not implement a casual "clear array" button as a substitute.

## Leaderboards
A label "global leaderboard" is allowed only when backed by actual shared backend data.
Local personal records remain local/personal and are labeled accordingly.
If a public leaderboard is added, abuse prevention, score validation, privacy and rules are separate release requirements.

## Phase 2 acceptance evidence required
- auth/guest paths verified;
- local persistence survives reload;
- offline write then online sync verified;
- same card sync across at least two simulated clients tested;
- duplicate event submission is idempotent;
- security rules emulator tests pass;
- no secret/private credential committed;
- error/retry state verified in browser.
