import { flatten } from '../src'

describe('Flatten', () => {
  it('flattens an array to a specified depth', () => {
    expect(flatten([1, [2, [3, [4]]]], 2)).toEqual([1, 2, 3, [4]])
  })

  it('flattens an array to default depth of 1', () => {
    expect(flatten([1, [2, [3, [4]]]])).toEqual([1, 2, [3, [4]]])
  })

  it('returns an empty array for an empty input array', () => {
    expect(flatten([])).toEqual([])
  })

  it('handles empty arrays', () => {
    expect(flatten([[], [1, []], []])).toEqual([1, []])
  })

  it('throws error for non-array input', () => {
    expect(() => flatten(123 as any)).toThrow('Input must be array')
  })
})
