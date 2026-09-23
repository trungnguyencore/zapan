# ZaPan v2 — Verification Evidence

## Evidence rules
Only actual command output, inspected artifacts, browser behavior, or source inspection belongs here as verification.
A planned test is not evidence.
A command exit code alone is insufficient when readable output/artifacts can be inspected.
Implemented is not silently upgraded to Verified.

## Phase 1

### E-001 — Workspace baseline
Date: 2026-09-24
Scope: `D:\OTHERS\LATVAT\japan`
Method: Remote Desktop Commander directory listing.
Observed: directory contained no listed files or subdirectories at Phase 1 start.
Result: PASS

### E-002 — Toolchain baseline
Date: 2026-09-24
Working directory: project root.
Observed: Node v22.23.2; npm 10.9.8.
Result: PASS

### E-003 — Canonical documentation verification
Date: 2026-09-24
Method: re-read root planning/state documents after creation.
Verified: AGENTS.md, implementation.md, WEB_ROADMAP.md, LEARNING_ROADMAP.md, PROJECT_PROGRESS.md, PROJECT_EVIDENCE.md, PROJECT_DECISIONS.md.
Observed: greenfield boundary, continuous gates, five phases, learner roadmap, GitHub-preservation policy and Instagram requirement present.
Result: PASS
### E-004 — Greenfield scaffold baseline
Date: 2026-09-24
Method: `npm create vite@latest app -- --template react-ts`, then `npm install`.
Observed scaffold generator: create-vite 9.2.1.
Initial dependency install: 27 packages added, 28 audited, 0 vulnerabilities reported by npm.
Baseline lint: 0 warnings, 0 errors.
Baseline TypeScript + Vite production build: PASS.
Result: PASS

### E-005 — Domain foundation test gate
Date: 2026-09-24
Scope: Card ID, SRS v1, Progress reducer, runtime config validation.
First test attempt: FAIL because `progress.test.ts` missed a closing brace; 13 other tests passed.
Action: fixed only the test syntax, then re-ran the entire suite.
Verified rerun: 4 test files passed, 20/20 tests passed.
Follow-up lint: 0 warnings, 0 errors.
Follow-up TypeScript + production build: PASS.
Result: PASS after blocking defect was fixed.

### E-006 — UI foundation full check
Date: 2026-09-24
Scope: responsive shell, routes, design tokens, Instagram ownership component.
Command: `npm run check`.
Observed: lint 0 warnings/errors; 6 test files passed; 23/23 unit/component tests passed; TypeScript + Vite production build passed.
Build output observed: generated `dist/index.html`, one CSS asset and one JS asset.
Result: PASS.
### E-007 — Hermetic Playwright browser install
Date: 2026-09-24
Goal: keep browser test binaries in the project workspace.
First Windows env command accidentally produced a path displayed as `app\\0 \\...`; install completed inside project but path was malformed.
The accidental directory remains local and ignored because deletion was not owner-approved.
Corrected install used exact `PLAYWRIGHT_BROWSERS_PATH=0` under cmd.exe.
Observed correct browser path: `app\\node_modules\\playwright-core\\.local-browsers\\...`.
Installed: Chromium/Chrome for Testing 153.0.8010.12 (Playwright chromium v1243), headless shell, FFmpeg and Winldd.
Result: PASS with one documented non-blocking local artifact from the first attempt.

### E-008 — Browser smoke test design failure and correction
Date: 2026-09-24
First Playwright run: 4 executions, 2 passed and 2 failed.
Failure cause from output: desktop-only test was also run in mobile project and mobile-only test in desktop project.
Matching-environment tests passed, showing responsive behavior itself was not the failing condition.
Action: explicitly skip each environment-specific test outside its intended Playwright project; mobile Instagram mark was also made discoverable in the mobile top bar.
Rerun through hermetic npm script: 2 passed, 2 intentional cross-project skips.
Result: PASS after test-design correction.

### E-009 — Final Phase 1 regression gate
Date: 2026-09-24
Command: `npm run check && npm run test:e2e` from `app/`.
First final attempt: FAIL because Vitest discovered `e2e/foundation.spec.ts`; 23 unit/component tests themselves passed.
Action: restricted Vitest include pattern to `src/**/*.test.{ts,tsx}`.
Final rerun observed:
- lint: 0 warnings, 0 errors across 27 files;
- Vitest: 6 files passed, 23/23 tests passed;
- TypeScript + Vite build: PASS;
- Playwright: desktop smoke PASS, mobile smoke PASS, 2 cross-project executions skipped intentionally.
Result: PASS.
### E-010 — Git/workspace status
Date: 2026-09-24
Method: `git status --short --branch` and `git ls-files --others --exclude-standard` from project root.
Observed: local Git repository initialized; branch has no commits yet; all project source/docs are currently untracked.
Ignored/generated material such as node_modules, dist, npm cache, Playwright test output and accidental `app/0*` browser artifact does not appear in the untracked list.
No Git remote was configured or contacted during Phase 1.
No push/deploy was performed.
Result: PASS for local state inspection.

## Phase 1 verified scope
Verified in this phase:
- greenfield React/TypeScript/Vite foundation;
- stable card identity helper;
- single deterministic SRS v1 foundation;
- canonical progress reducer with timed-sample accounting;
- optional Firebase runtime-config validation boundary (no real Firebase connection yet);
- desktop/mobile application shell and five primary routes;
- accessible Instagram owner link on desktop and mobile;
- continuous lint/unit/component/build/browser gates;
- architecture/data/Firebase/UX/testing plans.

## Explicitly not verified / not implemented yet
- Firebase Authentication or Firestore sync;
- IndexedDB/local persistence;
- real N5 content bundles;
- real learning sessions/review queue;
- study minutes/streak/heatmap/mastery dashboards from persisted data;
- N4/N3 learning content;
- GitHub Pages deployment or live production behavior;
- Firefox/Safari browser support.

### E-011 — Manual visual browser inspection
Date: 2026-09-24
Method: headless Chromium screenshots generated from the running Vite app and read back for visual inspection.
Desktop viewport: 1440x1000. Observed: persistent sidebar, active Today state, readable hierarchy, owner Instagram link visible, no horizontal overflow (`scrollWidth=clientWidth=1440`).
Mobile profile: Pixel 5 / 393px wide. Observed: compact ZaPan top bar, Instagram link visible, five-item fixed bottom navigation, single-column cards, no horizontal overflow (`scrollWidth=clientWidth=393`).
Note: full-page screenshot stitching shows the fixed bottom navigation over the stitched page at one viewport position; this is expected fixed-element capture behavior, not horizontal/layout overflow.
Result: PASS.

### E-012 — Final integrated regression rerun
Date: 2026-09-24
Command: `npm run check && npm run test:e2e` from `app/` after clearing the visual-check Vite child process from port 4173.
Observed:
- lint: 0 warnings, 0 errors across 27 files;
- Vitest: 6 files passed, 23/23 tests passed;
- TypeScript + Vite production build: PASS, 34 modules transformed;
- Playwright: desktop smoke PASS, mobile smoke PASS, 2 cross-project executions intentionally skipped;
- total Playwright runtime reported: 2.4s.
Result: PASS.

### E-013 — Package-manager workspace guard
Date: 2026-09-24
Action: added `app/.npmrc` with project-relative cache path `../.npm-cache`.
Verification: `npm config get cache` from `app/` resolved to `D:\\OTHERS\\LATVAT\\japan\\.npm-cache`.
Limitation: the first npm bootstrap happened before this guard existed, so npm may have used/touched its normal user cache outside the workspace. No outside path was inspected or cleaned.
Result: PASS for all future npm cache resolution inside the canonical workspace.

### E-014 — Post-guard closeout check
Date: 2026-09-24
After adding the project-local npm cache guard, `npm run check` was executed again.
Observed: lint 0 warnings/errors; 23/23 Vitest tests passed; TypeScript + Vite production build passed.
Port check after browser work returned no LISTENING entry for 127.0.0.1:4173.
Git status: local repository still has no commits; source/docs are untracked by design for owner review; generated/cache artifacts remain ignored.
Result: PASS.

## Phase 2

### E-015 — Phase 1 Git baseline and GitHub tooling
Date: 2026-09-24
Baseline commit: `ae5c15a` — `chore: establish verified ZaPan v2 phase 1 foundation`.
Local branch renamed to `main` to match the existing GitHub repository default branch.
GitHub CLI status: authenticated as `trunnguyencore`; repository `trunnguyencore/zapan` verified public with default branch `main`.
Local `origin` set to `https://github.com/trunnguyencore/zapan.git`.
No push, fetch-based replacement, deploy, or remote mutation performed.
Result: PASS.

### E-016 — Local-first IndexedDB persistence gate
Date: 2026-09-24
Implementation: Dexie-backed IndexedDB adapter behind domain `LearningRepository` port.
Focused repository suite: 7/7 PASS covering atomic event/progress/session persistence, reopen persistence, event idempotency, duplicate conflict rejection, missing-session rollback, due query, and session completion rules.
First full gate: 30/30 tests passed but TypeScript build FAILED because constructor parameter properties are disallowed by the current `erasableSyntaxOnly` config.
Action: replaced parameter property with an explicit class field; no behavior change.
Final full gate: lint 0 warnings/errors across 31 files; 30/30 tests PASS; TypeScript + Vite production build PASS.
npm install for `dexie` and `fake-indexeddb` reported 0 vulnerabilities.
Result: PASS after blocking compile issue was corrected.

### E-017 — Versioned content pipeline gate
Date: 2026-09-24
Source inspection: legacy Kana/Vocab/Kanji data read-only for reference; no legacy file modified.
Implemented: domain content types/port, Zod runtime schemas, static content repository, provenance document, and `foundation-kana-main-v1` bundle.
Verified imported scope: 92 basic Kana cards (46 Hiragana + 46 Katakana main rows only).
Focused content suite: 8/8 PASS covering bundle cardinality, stable/unique card IDs, romanization variants, duplicate/source-version validation, repository querying and cross-bundle duplicate rejection.
Full gate: lint 0 warnings/errors across 39 files; 38/38 tests PASS; TypeScript + Vite production build PASS.
Legacy dakuten/yōon, vocabulary and kanji content remain explicitly unverified/not imported.
Result: PASS.
