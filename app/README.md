# ZaPan v2 Web App

React + TypeScript + Vite application for ZaPan v2.

## Development

```bash
npm ci
npm run dev
```

## Content generation

N4/N3 Vocabulary/Kanji modules are generated from the pinned OpenJLPT snapshot under `content-sources/openjlpt/`.

```bash
npm run generate:openjlpt
```

The generator:

- verifies the pinned source commit;
- writes SHA-256 provenance into `SOURCE_MANIFEST.json`;
- validates required word/character/readings/meanings/stroke data;
- applies the lower-level-prompt-wins rule to avoid duplicate SRS prompts across N5 → N4 → N3;
- writes `DEDUPLICATION_REPORT.json`;
- emits small runtime-validated TypeScript bundles under `src/data/openjlpt/generated/`.

Raw OpenJLPT snapshot/notice/license remain checked in. Generated N4/N3 cards use source-backed English meanings when reviewed Vietnamese meanings do not exist.

## Verification

```bash
npm run lint
npm run test
npm run build
npm run check
npm run test:firebase:emulated
npm run test:e2e
npm run test:e2e:release
```

`npm run test:e2e:release` serves the generated `dist/` with a GitHub-Pages-like static server and verifies the `/zapan/` prefix plus SPA deep-route fallback on desktop and mobile.

`npm run test:e2e:production` is a real Firebase cloud smoke. It creates a temporary Email/Password account, verifies two-browser sync, then cleans the temporary Auth/Firestore state. Run it only when production-side effects are intended.

## Architecture

- `src/domain` — pure learning/progress/SRS rules;
- `src/services` — persistence, Firebase, sync and platform adapters;
- `src/features` — learner-facing product surfaces;
- `src/components/ui` — reusable UI;
- `src/app` — shell, routing and providers;
- `src/data/n5` — audited legacy N5 bundles;
- `src/data/openjlpt/generated` — generated N4/N3 study-set bundles/catalog/loader;
- `content-sources/openjlpt` — pinned upstream source snapshot, attribution, manifest and dedupe report;
- `e2e` — normal desktop/mobile browser regression;
- `e2e-release` — built GitHub Pages artifact regression;
- `e2e-production` — real Firebase production cloud smoke.

## Production build

Production builds use Vite base `/zapan/` and generate `dist/404.html` from the same `dist/index.html` artifact so GitHub Pages direct/deep routes can bootstrap the BrowserRouter application.

Content bootstrap uses dynamic imports for Kana, N5 and generated OpenJLPT bundle loaders so the production core-entry budget stays enforceable.

Firebase web configuration is supplied through the six `VITE_FIREBASE_*` environment variables. No private service-account credential belongs in the browser build or repository.

See the project-root `PROJECT_PROGRESS.md` and `PROJECT_EVIDENCE.md` before changing implementation or release state.
