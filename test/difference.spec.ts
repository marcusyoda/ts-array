import { difference } from '../src'

const compareById = (obj1: Record<string, any>, obj2: Record<string, any>) => obj1.id === obj2.id

describe('Difference', () => {
  it('finds elements in the first array that are not in the second array', () => {
    expect(difference([1, 2, 3], [2, 3, 4])).toEqual([1])
  })

  it('handles arrays with duplicate elements', () => {
    expect(difference([1, 2, 2, 3], [2])).toEqual([1, 3])
  })

  it('returns an empty array when the first array is empty', () => {
    expect(difference([], [1, 2, 3])).toEqual([])
  })

  it('returns the first array when the second array is empty', () => {
    expect(difference([1, 2, 3], [])).toEqual([1, 2, 3])
  })

  it('returns an empty array when both arrays are empty', () => {
    expect(difference([], [])).toEqual([])
  })

  it('works with arrays of strings', () => {
    expect(difference(['a', 'b', 'c'], ['b', 'c', 'd'])).toEqual(['a'])
  })

  it('works with arrays of mixed types', () => {
    expect(difference([1, 'a', true], ['a', 2, false])).toEqual([1, true])
  })
})

describe('Difference with Comparator', () => {
  const objects1 = [{ id: 1 }, { id: 2 }, { id: 3 }]
  const objects2 = [{ id: 2 }, { id: 3 }, { id: 4 }]

  it('finds elements in the first array of objects that are not in the second array', () => {
    expect(difference(objects1, objects2, compareById)).toEqual([{ id: 1 }])
  })

  it('works with arrays of objects and returns an empty array when both arrays are identical', () => {
    expect(difference(objects1, objects1, compareById)).toEqual([])
  })
})
