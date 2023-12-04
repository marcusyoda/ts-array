import { merge } from '../src'

const compareObjectsById = (obj1: Record<string, any>, obj2: Record<string, any>) => obj1.id === obj2.id

describe('Merge', () => {
  it('merges two arrays with unique elements', () => {
    expect(merge([1, 2], [3, 4])).toEqual([1, 2, 3, 4])
  })

  it('merges two arrays and removes duplicates', () => {
    expect(merge([1, 2], [2, 3, 4])).toEqual([1, 2, 3, 4])
  })

  it('merges two empty arrays', () => {
    expect(merge([], [])).toEqual([])
  })

  it('merges with one empty array', () => {
    expect(merge([], [1, 2])).toEqual([1, 2])
    expect(merge([1, 2], [])).toEqual([1, 2])
  })

  it('merges arrays of objects with a custom comparator', () => {
    const array1 = [{ id: 1, name: 'Alice' }]
    const array2 = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]

    expect(merge(array1, array2, compareObjectsById)).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ])
  })

  it('merges arrays with mixed data types', () => {
    expect(merge([1, 'a'], [2, 'b', 'a'])).toEqual([1, 'a', 2, 'b'])
  })

  it('merges arrays of objects with duplicates and a custom comparator', () => {
    const array1 = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ]
    const array2 = [
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ]
    expect(merge(array1, array2, compareObjectsById)).toEqual([
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
      { id: 3, name: 'Charlie' },
    ])
  })

  it('merges arrays with complex elements like sets and maps', () => {
    const set1 = new Set([1, 2])
    const set2 = new Set([2, 3])
    const map1 = new Map([['key1', 'value1']])
    const map2 = new Map([['key2', 'value2']])
    expect(merge([set1, map1], [set2, map2])).toEqual([set1, map1, set2, map2])
  })
})
