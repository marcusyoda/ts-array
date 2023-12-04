import { differenceSymmetric } from '../src'

const compareById = (obj1: Record<string, any>, obj2: Record<string, any>) => obj1.id === obj2.id

describe('DifferenceSymmetric', () => {
  it('returns symmetric difference of two arrays', () => {
    expect(differenceSymmetric([1, 2, 3], [2, 3, 4])).toEqual([1, 4])
  })

  it('handles arrays with duplicate elements', () => {
    expect(differenceSymmetric([1, 2, 2, 3], [2, 4])).toEqual([1, 3, 4])
  })

  it('returns the first array when the second array is empty', () => {
    expect(differenceSymmetric([1, 2, 3], [])).toEqual([1, 2, 3])
  })

  it('returns the second array when the first array is empty', () => {
    expect(differenceSymmetric([], [1, 2, 3])).toEqual([1, 2, 3])
  })

  it('returns an empty array when both arrays are empty', () => {
    expect(differenceSymmetric([], [])).toEqual([])
  })

  it('returns an empty array when both arrays are identical', () => {
    expect(differenceSymmetric([1, 2, 3], [1, 2, 3])).toEqual([])
  })

  it('works with arrays of strings', () => {
    expect(differenceSymmetric(['a', 'b', 'c'], ['b', 'c', 'd'])).toEqual(['a', 'd'])
  })
})

describe('DifferenceSymmetric with Comparator', () => {
  const objects1 = [{ id: 1 }, { id: 2 }, { id: 3 }]
  const objects2 = [{ id: 2 }, { id: 3 }, { id: 4 }]

  it('returns symmetric difference of two arrays of objects', () => {
    expect(differenceSymmetric(objects1, objects2, compareById)).toEqual([{ id: 1 }, { id: 4 }])
  })

  it('returns an empty array when both arrays of objects are identical', () => {
    expect(differenceSymmetric(objects1, objects1, compareById)).toEqual([])
  })
})
