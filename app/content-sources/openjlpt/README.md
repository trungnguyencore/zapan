# OpenJLPT snapshot used by ZaPan

## Pinned source

- Upstream: https://github.com/evanclan/OpenJLPT
- Commit: `c42fd9fa3777bfc1775446f7c418d549dfd6e4cf`
- License for the OpenJLPT dataset: CC BY-SA 4.0
- Upstream attribution: see `NOTICE.md`
- Full license text: see `LICENSE`

ZaPan does not treat these N4/N3 groupings as official JLPT lists. The upstream notice states that the JLPT organization does not publish official current vocabulary/Kanji lists and that OpenJLPT level assignments are based on Jonathan Waller's community lists.

## Raw files retained

- `data__json__vocab__n4.json`: 632 raw records
- `data__json__kanji__n4.json`: 166 raw records
- `data__json__vocab__n3.json`: 1,784 raw records
- `data__json__kanji__n3.json`: 367 raw records

`SOURCE_MANIFEST.json` stores byte counts, SHA-256 hashes, raw/retained counts and excluded duplicate counts.

## ZaPan transformation

Run:

```bash
npm run generate:openjlpt
```

The generator creates runtime-validated TypeScript bundles and applies:

**lower-level prompt wins: N5 existing > N4 OpenJLPT > N3 OpenJLPT**

Reason: ZaPan currently quizzes Vocabulary by term and Kanji by character. Keeping the same prompt at multiple levels would create parallel SRS identities for one learner prompt.

Result:

| Level | Raw | Retained | Excluded higher-level duplicate prompts |
| --- | ---: | ---: | ---: |
| N4 | 798 | 709 | 89 |
| N3 | 2,151 | 2,034 | 117 |
| Total | 2,949 | 2,743 | 206 |

Retained split:

- N4 Vocabulary: 569
- N4 Kanji: 140
- N3 Vocabulary: 1,668
- N3 Kanji: 366

Every excluded prompt is recorded in `DEDUPLICATION_REPORT.json`; no upstream record is deleted from the raw snapshot.

## Meaning language

OpenJLPT supplies English glosses for this imported slice. ZaPan keeps those source-backed meanings. Vietnamese is optional in the content schema; when no reviewed Vietnamese meaning exists, the UI displays the English meaning and marks it `EN`.

ZaPan intentionally does not bulk-generate Vietnamese translations with an LLM and present them as source-derived content.
