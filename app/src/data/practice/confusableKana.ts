export interface ConfusableKanaEntry {
  character: string
  romanization: string
}

export interface ConfusableKanaGroup {
  script: 'hiragana' | 'katakana'
  entries: readonly ConfusableKanaEntry[]
}

export const CONFUSABLE_KANA_SOURCE_VERSION = 'legacy-gd9-game-data-v1'

export const CONFUSABLE_KANA_GROUPS: readonly ConfusableKanaGroup[] = [
  { script: 'katakana', entries: [{ character: 'シ', romanization: 'shi' }, { character: 'ツ', romanization: 'tsu' }] },
  { script: 'katakana', entries: [{ character: 'ソ', romanization: 'so' }, { character: 'ン', romanization: 'n' }] },
  { script: 'katakana', entries: [{ character: 'ア', romanization: 'a' }, { character: 'ヤ', romanization: 'ya' }] },
  { script: 'katakana', entries: [{ character: 'ウ', romanization: 'u' }, { character: 'ワ', romanization: 'wa' }] },
  { script: 'katakana', entries: [{ character: 'ク', romanization: 'ku' }, { character: 'タ', romanization: 'ta' }] },
  { script: 'katakana', entries: [{ character: 'コ', romanization: 'ko' }, { character: 'ヨ', romanization: 'yo' }] },
  { script: 'katakana', entries: [{ character: 'ヌ', romanization: 'nu' }, { character: 'フ', romanization: 'fu' }] },
  { script: 'katakana', entries: [{ character: 'チ', romanization: 'chi' }, { character: 'テ', romanization: 'te' }] },
  { script: 'hiragana', entries: [{ character: 'は', romanization: 'ha' }, { character: 'ほ', romanization: 'ho' }] },
  { script: 'hiragana', entries: [{ character: 'わ', romanization: 'wa' }, { character: 'れ', romanization: 're' }, { character: 'ね', romanization: 'ne' }] },
  { script: 'hiragana', entries: [{ character: 'め', romanization: 'me' }, { character: 'ぬ', romanization: 'nu' }] },
  { script: 'hiragana', entries: [{ character: 'る', romanization: 'ru' }, { character: 'ろ', romanization: 'ro' }] },
  { script: 'hiragana', entries: [{ character: 'き', romanization: 'ki' }, { character: 'さ', romanization: 'sa' }] },
  { script: 'hiragana', entries: [{ character: 'い', romanization: 'i' }, { character: 'り', romanization: 'ri' }] },
  { script: 'hiragana', entries: [{ character: 'あ', romanization: 'a' }, { character: 'お', romanization: 'o' }] },
]
