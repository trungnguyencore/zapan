# ZaPan v2 — Test Strategy

## Rule
No green test/evidence -> no progression.
A feature is not complete because code compiles or a button renders.
Relevant automated and observable behavior must pass before the next dependent slice begins.

## Current Phase 1 commands
From `app/`:
- `npm run lint` — static lint with oxlint.
- `npm run test` — Vitest unit/component suite.
- `npm run build` — TypeScript project build + Vite production build.
- `npm run check` — lint + unit/component tests + production build.
- `npm run playwright:install` — installs Chromium hermetically under project `node_modules`.
- `npm run test:e2e` — Playwright smoke tests using hermetic browser path.

## Gate levels
### Logic gate
Use for pure domain changes.
Required: focused unit tests, full unit suite, lint/type/build when shared types change.

### Component gate
Use for UI components and interaction changes.
Required: component tests for behavior/accessibility attributes plus full unit suite and lint/build.

### Browser gate
Use for navigation/responsive/browser APIs.
Required: Playwright or equivalent real-browser checks plus inspect failure artifacts when failing.

### Persistence/backend gate
Phase 2+.
Required: repository/service tests, emulator/integration tests, offline/retry tests, browser flow verification.

### Release gate
Phase 5.
Required: all relevant suites, production build inspection, multi-browser/device matrix, live deployment smoke test and rollback readiness.
## Domain test coverage focus
Card identity:
- deterministic create/parse;
- malformed ids rejected;
- display text cannot silently become an unstable id.

SRS:
- initial due state;
- rating mapping;
- good/easy scheduling relationship;
- lapse behavior;
- invalid timestamps;
- future algorithm versions require their own regression fixtures.

Progress reducer:
- correct/incorrect counters;
- current streak reset/increment;
- no synthetic response timing;
- average uses measured sample count only;
- lapse/SRS update;
- weak/due derivation;
- skipped event behavior;
- card-id mismatch rejection should be added/retained as the reducer evolves.

Config:
- local-only mode valid without Firebase;
- complete Firebase web config parses;
- partial config rejected.

## Component test focus
- primary navigation changes route/content;
- ownership Instagram link exact destination;
- external link safety attributes;
- accessible names;
- truthful empty/foundation states;
- later: dialogs, forms, auth errors, loading/error/offline states.
## Browser matrix — active development
Current Phase 1:
- Chromium desktop profile;
- Chromium mobile Pixel 5 profile.
Current smoke checks:
- Home visible;
- desktop sidebar visible only on desktop;
- mobile bottom nav visible only on mobile;
- primary route navigation;
- Instagram owner link present and correct;
- no horizontal overflow on mobile.

Release matrix will expand based on supported-browser decision and available environments.
Do not claim Safari/Firefox support before those paths are actually tested.

## Failure handling
1. Stop the dependent implementation path.
2. Read the actual failure output/artifact.
3. Classify product bug vs test bug vs environment issue.
4. Make the smallest justified fix.
5. Re-run the failed test.
6. Re-run affected regression gate.
7. Record meaningful failures/lessons in evidence/decisions.

## Evidence requirements
For meaningful gates record:
- date;
- command or manual method;
- relevant versions/environment;
- actual result count/output summary;
- PASS/FAIL;
- limitation or skip reason.
Do not write fabricated screenshots/logs into evidence.

## Test artifact policy
Generated `dist`, coverage, `playwright-report`, `test-results`, local browser binaries and npm cache are ignored from Git.
Failure artifacts may be inspected locally and summarized in PROJECT_EVIDENCE.md.
Do not commit large generated browser/test artifacts unless a future explicit evidence policy requires it.

## Production validation principle
Local green tests are necessary but not sufficient for release.
After GitHub Pages deployment, test the live URL, route loading, assets, console/network errors and critical flows again before declaring production verified.
