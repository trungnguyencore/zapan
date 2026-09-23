# ZaPan v2 — Canonical Data Model

## Status
Phase 1 model. Implemented fields are reflected in `app/src/domain`; planned fields are marked as such.
Timestamps are epoch milliseconds in domain code unless a storage adapter explicitly converts them.

## Card identity
Format direction: `{level}:{contentType}:{sourceKey}:{itemKey}`.
Current allowed levels: foundation, n5, n4, n3.
Current content types: kana, vocabulary, kanji, grammar, reading, listening.
`sourceKey` and `itemKey` are stable ASCII slugs; display Japanese is not an identifier.
Implemented helper: `src/domain/learning/cardId.ts`.

## ContentCard — planned content contract
Required conceptual fields:
- cardId
- schemaVersion
- sourceVersion
- level
- contentType
- topicId/groupId
- prompt payload
- accepted answer payload
- display metadata
Optional type-specific metadata may include readings, Hán Việt, stroke count, mnemonic, audio reference, examples, tags.
Type-specific schemas should be discriminated unions rather than one huge optional-field object.

## StudyEvent — implemented core type
- eventId: globally unique/idempotent event identifier
- sessionId
- cardId
- mode
- result: correct | incorrect | skipped
- rating?: again | hard | good | easy
- responseTimeMs?: measured only; never placeholder timing
- occurredAt
- inputKind
- schemaVersion
Events express what happened; they do not store a second copy of the entire card.
## StudySession — implemented core type
- sessionId
- userId or local guest identity
- mode
- startedAt
- endedAt
- eventIds
- schemaVersion
Planned additions may include content scope and summary references once session building is implemented.

## SrsState — implemented v1
- algorithmVersion = 1
- level 0..6
- intervalMinutes
- lapses
- lastReviewAt
- dueAt
The v1 intervals are product heuristics and are unit tested. They are not claimed as scientifically optimal.
Algorithm changes require a version and migration decision.

## ProgressRecord — implemented core snapshot
- cardId
- attempts
- correctCount
- incorrectCount
- currentCorrectStreak
- accuracy
- averageResponseTimeMs
- responseTimeSampleCount
- lastReviewedAt
- nextReviewAt
- mastery
- srs
- updatedAt
- schemaVersion
`responseTimeSampleCount` exists because some valid events are untimed; without it an average cannot be updated correctly.

## Mastery states
unseen: no scored attempts.
learning: active learning without weak/mastered/due conditions.
weak: current v1 heuristic identifies poor recall after enough attempts.
due: scheduled review time has arrived.
mastered: strong repeated performance under the current heuristic.
Due is time-dependent; consumers should derive it against the current clock rather than assume a persisted label never becomes stale.
## ActivityDay — planned derived model
Purpose: study heatmap, streak, daily totals.
Candidate fields:
- localDateKey
- timezone
- firstEventAt / lastEventAt
- measuredStudyDurationMs
- scoredEventCount
- correctCount
- completedSessionCount
Streak logic must define timezone transitions and must not rely on `toISOString()` UTC day boundaries without an explicit product decision.

## UserProfile — planned
Candidate fields:
- uid
- displayName
- createdAt
- preferredLanguage
- timezone
- activeLearningPath
Profile data is separate from progress data.
Do not use profile displayName as an authorization or unique progress key.

## UserPreferences — planned
Candidate fields:
- theme: system | light | dark
- soundEnabled
- interfaceLanguage
- reducedMotionOverride if ever needed
- session-size preferences
Learning settings that change scheduling semantics require stronger versioning than purely visual preferences.

## Sync metadata — planned wrapper
Cloud/local reconciliation may require metadata separate from ProgressRecord:
- revision
- updatedAt
- writer/device id
- schemaVersion
- tombstone/deletion marker if deletion is later supported
Do not overload learning counters with sync mechanics.

## Invariants
- one cardId maps to one logical learnable item for a content version family;
- one StudyEvent applies to the same cardId as its ProgressRecord;
- skipped events do not silently count as correct/incorrect attempts;
- negative/non-finite response times are invalid;
- synthetic timing is forbidden;
- ProgressRecord counters are internally consistent;
- persisted records carry schema/algorithm versions needed for migration.
