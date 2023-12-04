import { union } from '../src'

describe('Union', () => {
  it('combines multiple arrays into a single array with unique elements', () => {
    expect(union([1, 2], [2, 3], [3, 4])).toEqual([1, 2, 3, 4])
  })

  it('removes duplicates from combined arrays', () => {
    expect(union([1, 1], [2, 2], [2, 3])).toEqual([1, 2, 3])
  })

  it('works with arrays of strings', () => {
    expect(union(['a', 'b'], ['b', 'c'], ['d', 'e'])).toEqual(['a', 'b', 'c', 'd', 'e'])
  })

  it('returns an empty array when all input arrays are empty', () => {
    expect(union([], [], [])).toEqual([])
  })

  it('handles a single array', () => {
    expect(union([1, 2, 3])).toEqual([1, 2, 3])
  })

  it('handles arrays with different data types', () => {
    expect(union([1, 'a'], [2, 'b'], [true as any, false as any])).toEqual([1, 'a', 2, 'b', true, false])
  })
})
