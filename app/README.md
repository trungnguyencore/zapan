# ZaPan v2 Web App

Greenfield React + TypeScript application for ZaPan v2.

## Development
- `npm install`
- `npm run dev`
- `npm run lint`
- `npm run test`
- `npm run build`
- `npm run check`
- `npm run playwright:install`
- `npm run test:e2e`

## Architecture
- `src/domain` — pure learning/progress/SRS rules.
- `src/services` — platform/persistence/config adapters.
- `src/features` — product feature surfaces.
- `src/components/ui` — reusable UI.
- `src/app` — shell/navigation/providers.
- `e2e` — Playwright browser smoke tests.

## Current status
Phase 1 foundation. Firebase is intentionally not connected yet and no real N5 content has been imported.
Do not present placeholder UI as production learning data.

See the project root `PROJECT_PROGRESS.md` and `PROJECT_EVIDENCE.md` before changing implementation.
