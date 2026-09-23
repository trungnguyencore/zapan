# ZaPan v2 — Content Sources and Audit State

## Rule
Content is not considered verified merely because it existed in a legacy ZaPan generation.
Legacy data is reference-only. ZaPan v2 uses new stable IDs, new schemas, runtime validation, explicit source versions and per-bundle audit status.

## `foundation-kana-main-v1`
Status: VERIFIED FOR PIPELINE USE
Imported scope: 46 basic Hiragana + 46 basic Katakana from the `main` groups only.
Reference inspected read-only: `D:\\STUDY\\JAPANESE\\WEB\\gd9\\src\\data\\kana.js`.
ZaPan v2 representation: `app/src/data/n5/kanaBasic.ts`.
Source version: `kana-basic-main-v1`.
Accepted romanization variants are preserved from the inspected main-group reference for items such as し/シ, ち/チ, つ/ツ, ふ/フ and ん/ン.

## Excluded from this verified bundle
Legacy dakuten and combination/yōon groups are not imported yet.
Reason: they require a separate audit before being marked verified. During inspection the legacy Katakana dakuten `da` row contained a Hiragana `づ` where the surrounding data is Katakana; ZaPan v2 therefore does not bulk-copy that group.

## `n5-vocabulary-v1`
Status: VERIFIED FOR PIPELINE USE, NOT YET EXPOSED IN RUNTIME UI.
Read-only reference: `D:\\STUDY\\JAPANESE\\WEB\\gd9\\src\\data\\vocab_data.js`.
ZaPan v2 representation: `app/src/data/n5/vocabN5.ts`.
Source version: `vocab-n5-legacy-audit-v1`.
Audit artifact: `docs/content/VOCAB_N5_AUDIT.json`.
Audit result: 15 groups, 923 unique terms, no missing term/readings/Vietnamese meaning, no duplicate term or exact duplicate.
Normalization is intentionally narrow: only packed reading delimiters are split into separate accepted readings. The two observed cases are `二十歳` (`はたち`, `にじゅっさい`) and `一日` (`いちにち`, `ついたち`). Vietnamese meaning text is preserved apart from outer whitespace trimming.
Card identity is frozen for this source version using source key `vocab-n5-v1` and audited group-position item keys. Future source revisions must preserve existing IDs or use an explicit migration/new source version; regenerating IDs from reordered legacy data is not allowed.

## `n5-kanji-v1`
Status: VERIFIED FOR PIPELINE USE, NOT YET EXPOSED IN RUNTIME UI.
Read-only reference: `D:\\STUDY\\JAPANESE\\WEB\\gd9\\src\\data\\kanji_data.js`.
ZaPan v2 representation: `app/src/data/n5/kanjiN5.ts`.
Source version: `kanji-n5-legacy-audit-v1`.
Audit artifact: `docs/content/KANJI_N5_AUDIT.json`.
Audit result: 10 groups, 109 unique single-character Kanji (not the approximate `~103` comment in the legacy file), no duplicate character, no missing accepted readings/on/kun fields/VI/EN/Hán Việt/mnemonic, and all stroke counts are positive integers.
Eight source records intentionally have an empty kunyomi string: 百, 万, 週, 午, 毎, 気, 校, 電. ZaPan v2 preserves those empty values rather than inventing readings.
Mnemonic/hint text is retained only as a memory aid field; it is not represented as factual etymology unless separately sourced.
Card identity is frozen for this source version using source key `kanji-n5-v1` and audited group-position item keys. Future revisions must preserve IDs or use an explicit migration/new source version.
