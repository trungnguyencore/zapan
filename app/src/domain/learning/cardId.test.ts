import { describe, expect, it } from 'vitest'
import { createCardId, parseCardId } from './cardId'

describe('card identity', () => {
  it('creates and parses a stable card id', () => {
    const id = createCardId({ level: 'n5', contentType: 'kanji', sourceKey: 'core-v1', itemKey: 'mountain-001' })
    expect(id).toBe('n5:kanji:core-v1:mountain-001')
    expect(parseCardId(id)).toEqual({ level: 'n5', contentType: 'kanji', sourceKey: 'core-v1', itemKey: 'mountain-001' })
  })

  it('normalizes safe slug casing and surrounding whitespace', () => {
    expect(createCardId({ level: 'n5', contentType: 'vocabulary', sourceKey: ' Core-V1 ', itemKey: ' CAT-001 ' }))
      .toBe('n5:vocabulary:core-v1:cat-001')
  })

  it('rejects display text as an unstable slug', () => {
    expect(() => createCardId({ level: 'n5', contentType: 'vocabulary', sourceKey: 'core', itemKey: '猫' })).toThrow()
  })

  it('rejects malformed ids', () => {
    expect(() => parseCardId('n5:kanji:only-three')).toThrow()
    expect(() => parseCardId('n2:kanji:core:item')).toThrow()
  })
})
