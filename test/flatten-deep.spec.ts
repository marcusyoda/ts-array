import { flattenDeep } from '../src'

describe('FlattenDeep', () => {
  it('recursively flattens an array regardless of the depth', () => {
    expect(flattenDeep([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4])
  })

  it('handles arrays with mixed data types', () => {
    expect(flattenDeep([1 as any, ['a', [true, [null]]]])).toEqual([1, 'a', true, null])
  })

  it('returns an empty array for an empty input array', () => {
    expect(flattenDeep([])).toEqual([])
  })

  it('throws error for non-array input', () => {
    expect(() => flattenDeep('not an array' as any)).toThrow('Input must be array')
  })
})
