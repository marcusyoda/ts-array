import { chunkIntoN } from '../src'

describe('ChunkIntoN', () => {
  it('should divide an array into specified number of chunks', () => {
    expect(chunkIntoN([1, 2, 3, 4, 5, 6], 3)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ])
  })

  it('should return empty array when input array is empty', () => {
    expect(chunkIntoN([], 3)).toEqual([])
  })

  it('should handle when number of chunks is greater than array length', () => {
    expect(chunkIntoN([1, 2], 5)).toEqual([[1], [2], [], [], []])
  })

  it('should handle non-array iterables correctly', () => {
    expect(() => chunkIntoN('12345' as any, 2)).toThrow('Input must be array')
  })

  it('should throw an error when number of chunks is zero', () => {
    expect(() => chunkIntoN([1, 2, 3], 0)).toThrow('Number of chunks must be greater than 0')
  })

  it('should throw an error when number of chunks is negative', () => {
    expect(() => chunkIntoN([1, 2, 3], -1)).toThrow('Number of chunks must be greater than 0')
  })

  it('should return original array when number of chunks is one', () => {
    expect(chunkIntoN([1, 2, 3], 1)).toEqual([[1, 2, 3]])
  })

  it('should handle single element array correctly', () => {
    expect(chunkIntoN([1], 3)).toEqual([[1], [], []])
  })
})
