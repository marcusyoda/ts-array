import { fuse } from '../src'

describe('Fuse', () => {
  it('fuses arrays of the same length', () => {
    const array1: string[] = ['a', 'b', 'c']
    const array2: number[] = [1, 2, 3]

    const expected = [
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]

    expect(fuse<string | number>(array1, array2)).toEqual(expected)
  })

  it('fuses arrays of different lengths', () => {
    const array1: string[] = ['a', 'b']
    const array2: number[] = [1, 2, 3]

    const expected = [
      ['a', 1],
      ['b', 2],
      [undefined, 3],
    ]

    expect(fuse<string | number>(array1, array2)).toEqual(expected)
  })

  it('handles empty arrays', () => {
    const array1: unknown[] = []
    const array2: number[] = [1, 2, 3]

    const expected = [
      [undefined, 1],
      [undefined, 2],
      [undefined, 3],
    ]

    expect(fuse(array1, array2)).toEqual(expected)
  })

  it('returns empty array when all inputs are empty', () => {
    const array1: unknown[] = []
    const array2: unknown[] = []

    expect(fuse(array1, array2)).toEqual([])
  })

  it('handles more than two arrays', () => {
    const array1: string[] = ['a', 'b', 'c']
    const array2: number[] = [1, 2, 3]
    const array3: boolean[] = [true, false, true]

    const expected = [
      ['a', 1, true],
      ['b', 2, false],
      ['c', 3, true],
    ]

    expect(fuse<string | number | boolean>(array1, array2, array3)).toEqual(expected)
  })
})
