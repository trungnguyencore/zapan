# ZaPan v2

ZaPan is a Japanese-learning web application built around one learning loop: **Learn → Review → Practice → Measure → Adapt**.

**Website:** https://trungnguyencore.github.io/zapan/

## Verified learning scope

ZaPan v2 currently ships a verified N5 foundation with **1,124 learnable cards**:

- 92 basic Hiragana/Katakana cards;
- 923 N5 vocabulary cards across 15 topics;
- 109 N5 Kanji cards across 10 topics.

Grammar, Reading, Listening, JLPT practice, N4 and N3 are not exposed as active learning content until verified source bundles and learning flows exist.

## Product surfaces

Primary learning:

- Today — recommended due/new work from real progress;
- Learn — topic-based Kana, N5 Vocabulary and N5 Kanji;
- Review — due-card review;
- Library — search/filter across the verified repository;
- Progress — persisted activity, mastery, streak and heatmap;
- Roadmap — only stages backed by verified content and progress.

Practice surfaces use the same canonical StudyEvent/SRS/progress model:

- Custom Practice;
- Writing Recall;
- Time Attack;
- Survival;
- Match;
- Confusables.

## Screenshots

### Today — desktop

![ZaPan v2 Today desktop](docs/screenshots/zapan-v2-today-desktop.png)

### Learn — mobile

![ZaPan v2 Learn mobile](docs/screenshots/zapan-v2-learn-mobile.png)

## Persistence and accounts

Core study is local-first through IndexedDB. Guest learning works without an account.

Optional Email/Password accounts use the ZaPan v2 Firebase project for cloud event synchronization. Offline events remain durable locally and converge through the immutable event journal when synchronization resumes.

## Engineering

- React 19 + TypeScript + Vite;
- React Router;
- Dexie / IndexedDB;
- Firebase Authentication + Cloud Firestore;
- Vitest + Testing Library;
- Playwright desktop/mobile regression;
- executable JS bundle budgets;
- GitHub Pages deployment through GitHub Actions.

The production GitHub Pages build uses the project prefix `/zapan/` and includes an SPA `404.html` fallback for direct/deep routes.

## Local development

```bash
cd app
npm ci
npm run dev
```

Main verification commands:

```bash
npm run check
npm run test:firebase:emulated
npm run test:e2e
npm run test:e2e:release
```

The production-cloud smoke test intentionally creates and cleans a temporary Firebase test account and data:

```bash
npm run test:e2e:production
```

## Repository state and evidence

Project status and verification are source-grounded in:

- `PROJECT_PROGRESS.md`
- `PROJECT_EVIDENCE.md`
- `PROJECT_DECISIONS.md`
- `WEB_ROADMAP.md`
- `implementation.md`

Legacy ZaPan history is retained in Git and preserved through rollback refs during the v2 production migration.

## Owner

Built by [@trunk.ng](https://www.instagram.com/trunk.ng/).
