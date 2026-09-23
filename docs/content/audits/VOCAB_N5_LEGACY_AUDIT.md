# N5 Vocabulary Legacy Audit

## Scope
Read-only source: `D:\STUDY\JAPANESE\WEB\gd9\src\data\vocab_data.js`.
This report audits the legacy dataset as input material only. It does not certify JLPT level accuracy, translation quality, or pedagogical quality.

## Inventory
- Groups: **15**
- Items: **923**
- Unique written forms/questions: **923**

| Group | Legacy label | Items |
| --- | --- | ---: |
| n5_numbers | Số đếm & Lượng từ | 42 |
| n5_time | Thời gian & Ngày tháng | 101 |
| n5_people | Con người & Gia đình | 34 |
| n5_places | Địa điểm & Nơi chốn | 64 |
| n5_objects | Đồ vật trong nhà | 50 |
| n5_school | Trường học & Văn phòng | 28 |
| n5_food | Ẩm thực | 37 |
| n5_body | Cơ thể & Sức khỏe | 26 |
| n5_nature | Tự nhiên & Thời tiết | 23 |
| n5_colors | Màu sắc | 11 |
| n5_clothes | Trang phục | 20 |
| n5_transport | Phương tiện GTVT | 14 |
| n5_adjectives | Tính từ | 109 |
| n5_verbs | Động từ | 193 |
| n5_others | Khác (Phó từ, Liên từ,...) | 171 |

## Structural issue counts
| Check | Count |
| --- | ---: |
| groupKeyMismatch | 0 |
| badGroupPrefix | 0 |
| missingLabel | 0 |
| missingItems | 0 |
| missingQuestion | 0 |
| missingReadings | 0 |
| badReadingType | 0 |
| missingMeaningVi | 0 |
| questionWhitespace | 0 |
| readingWhitespace | 0 |
| meaningWhitespace | 0 |
| compoundReadingSeparators | 11 |
| duplicateExact | 0 |
| duplicateQuestionWithinGroup | 0 |
| duplicateQuestionAcrossGroups | 0 |

## Reading entries containing separators
These require normalization review because a single legacy `a[]` element may encode multiple readings.

- n5_numbers[6]: **二十歳** → `はたち,にじゅっさい`
- n5_time[8]: **一日** → `いちにち,ついたち`
- n5_time[47]: **毎月** → `まいげつ/まいつき`
- n5_time[50]: **毎年** → `まいねん/まいとし`
- n5_adjectives[10]: **いい/よい** → `いい/よい`
- n5_others[29]: **キロ/キログラム** → `キロ/キログラム`
- n5_others[30]: **キロ/キロメートル** → `キロ/キロメートル`
- n5_others[43]: **四** → `し / よん`
- n5_others[48]: **七** → `しち / なな`
- n5_others[103]: **ラジカセ / ラジオカセット** → `ラジカセ / ラジオカセット`
- n5_others[144]: **何** → `なん/なに`

## Written forms appearing across multiple groups
These are not automatically errors; they require semantic review before deduplication.

- None

## Audit boundary
This automated pass checks structure and normalization hazards only.
Before ZaPan v2 marks the vocabulary bundle VERIFIED, normalization must preserve meanings/readings, stable IDs must be assigned, duplicate semantics must be reviewed, and the resulting bundle must pass runtime schema + regression tests.
