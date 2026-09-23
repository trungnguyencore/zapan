import { describe, expect, it } from 'vitest'
import { createCardId } from '../learning/cardId'
import type { ContentCard } from '../content/types'
import { checkTypedAnswer } from './answer'

const kana: ContentCard = { cardId: createCardId({ level: 'foundation', contentType: 'kana', sourceKey: 'test-v1', itemKey: 'shi' }), schemaVersion: 1, sourceVersion: 'v1', level: 'foundation', topicId: 'kana', contentType: 'kana', script: 'hiragana', group: 'main', character: 'し', romanizations: ['shi', 'si'] }

describe('checkTypedAnswer', () => {
  it('accepts normalized Kana romanization variants', () => {
    expect(checkTypedAnswer(kana, '  SHI ').correct).toBe(true)
    expect(checkTypedAnswer(kana, 'si').correct).toBe(true)
  })

  it('rejects blank and incorrect answers', () => {
    expect(checkTypedAnswer(kana, '').correct).toBe(false)
    expect(checkTypedAnswer(kana, 'chi').correct).toBe(false)
  })
})
