import { describe, expect, it } from 'vitest'
import { parseContentBundle } from './schema'

describe('content bundle validation', () => {
  it('rejects duplicate card ids', () => {
    const card = {
      cardId: 'foundation:kana:kana-basic-v1:hira-a', schemaVersion: 1, sourceVersion: 'v1', level: 'foundation', topicId: 'kana-hiragana-main',
      contentType: 'kana', script: 'hiragana', group: 'main', character: 'あ', romanizations: ['a'],
    }
    expect(() => parseContentBundle({ bundleId: 'dup', schemaVersion: 1, sourceVersion: 'v1', cards: [card, card] })).toThrow()
  })

  it('rejects a card whose source version disagrees with its bundle', () => {
    expect(() => parseContentBundle({
      bundleId: 'mismatch', schemaVersion: 1, sourceVersion: 'bundle-v1', cards: [{
        cardId: 'foundation:kana:kana-basic-v1:hira-a', schemaVersion: 1, sourceVersion: 'card-v2', level: 'foundation', topicId: 'kana-hiragana-main',
        contentType: 'kana', script: 'hiragana', group: 'main', character: 'あ', romanizations: ['a'],
      }],
    })).toThrow()
  })
})
