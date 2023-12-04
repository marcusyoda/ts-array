import { defuse } from '../src'

describe('Defuse', () => {
  it('separates arrays of the same length', () => {
    const input: Array<Array<string | number>> = [
      ['a', 1],
      ['b', 2],
      ['c', 3],
    ]

    const expected = [
      ['a', 'b', 'c'],
      [1, 2, 3],
    ]

    expect(defuse(input)).toEqual(expected)
  })

  it('handles arrays of different lengths', () => {
    const input: Array<Array<string | number>> = [['a', 1], ['b', 2], ['c']]

    const expected = [
      ['a', 'b', 'c'],
      [1, 2, undefined],
    ]

    expect(defuse(input)).toEqual(expected)
  })

  it('handles arrays containing null and undefined values', () => {
    const input: Array<Array<string | number | null | undefined>> = [
      ['a', undefined],
      ['b', null],
      ['c', 3],
    ]

    const expected = [
      ['a', 'b', 'c'],
      [undefined, null, 3],
    ]

    expect(defuse(input)).toEqual(expected)
  })

  it('returns empty array when input is empty', () => {
    const input: unknown[][] = []

    expect(defuse(input)).toEqual([])
  })

  it('works with nested arrays', () => {
    const input: Array<Array<string | Array<number>>> = [
      ['a', [1, 2]],
      ['b', [3, 4]],
      ['c', [5, 6]],
    ]

    const expected = [
      ['a', 'b', 'c'],
      [
        [1, 2],
        [3, 4],
        [5, 6],
      ],
    ]

    expect(defuse(input)).toEqual(expected)
  })

  it('should throw an error for non-iterable inputs', () => {
    expect(() => defuse('12345' as any)).toThrow('Input must be array')
  })

  it('should throw an error for non-iterable inputs', () => {
    expect(() => defuse(['12345'] as any)).toThrow('Input must be array of arrays')
  })
})
