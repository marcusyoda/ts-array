import { intersection } from '../src'

describe('Intersection', () => {
  it('finds common elements in multiple arrays', () => {
    expect(intersection([1, 2, 3], [2, 3, 4], [3, 4, 5])).toEqual([3])
  })

  it('works with arrays of strings', () => {
    expect(intersection(['a', 'b', 'c'], ['b', 'c', 'd'], ['c', 'd', 'e'])).toEqual(['c'])
  })

  it('handles arrays with repeated elements', () => {
    expect(intersection([1, 1, 2, 3], [2, 3, 3, 4], [3, 4, 4, 5])).toEqual([3])
  })

  it('returns an empty array when there is no common element', () => {
    expect(intersection([1, 2, 3], [4, 5, 6], [7, 8, 9])).toEqual([])
  })

  it('returns an empty array when one of the arrays is empty', () => {
    expect(intersection([1, 2, 3], [], [3, 4, 5])).toEqual([])
  })

  it('returns the same array when only one array is provided', () => {
    expect(intersection([1, 2, 3])).toEqual([1, 2, 3])
  })

  it('returns an empty array when no arrays are provided', () => {
    expect(intersection()).toEqual([])
  })
})
