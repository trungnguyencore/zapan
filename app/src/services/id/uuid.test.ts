import { describe, expect, it } from 'vitest'
import { randomUuid } from './uuid'

const UUID_V4_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

describe('randomUuid', () => {
  it('uses native randomUUID when available', () => {
    const id = randomUuid({
      randomUUID: () => '123e4567-e89b-42d3-a456-426614174000',
    })
    expect(id).toBe('123e4567-e89b-42d3-a456-426614174000')
  })

  it('generates RFC 4122 v4 UUID via getRandomValues in non-secure HTTP LAN contexts', () => {
    const id = randomUuid({
      getRandomValues(bytes) {
        for (let index = 0; index < bytes.length; index += 1) {
          bytes[index] = (index * 17 + 43) & 0xff
        }
        return bytes
      },
    })
    expect(id).toMatch(UUID_V4_PATTERN)
  })
})

