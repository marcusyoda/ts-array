import { sample } from '../src'

describe('Sample', () => {
  const array = [1, 2, 3, 4, 5]

  it('returns an element from the array', () => {
    const result = sample(array)
    expect(array).toContain(result)
  })

  it('returns undefined for an empty array', () => {
    expect(sample([])).toBeUndefined()
  })

  it('returns consistently the same element for a single-element array', () => {
    const singleElementArray = [10]
    expect(sample(singleElementArray)).toBe(10)
  })

  it('returns different elements on multiple calls (randomness check)', () => {
    const results = new Set()
    const iterations = 100

    for (let i = 0; i < iterations; i++) {
      results.add(sample(array))
    }

    expect(results.size).toBeGreaterThan(1)
  })
})
