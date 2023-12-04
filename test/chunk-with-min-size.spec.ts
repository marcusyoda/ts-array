import { chunkWithMinSize } from '../src'

describe('ChunkWithMinSize', () => {
  it('should divide an array into chunks of specified size', () => {
    expect(chunkWithMinSize([1, 2, 3, 4, 5, 6, 7], 2, 1)).toEqual([[1, 2], [3, 4], [5, 6], [7]])
  })

  it('should return empty array when input array is empty', () => {
    expect(chunkWithMinSize([], 3, 1)).toEqual([])
  })

  it('should handle chunk size greater than array length', () => {
    expect(chunkWithMinSize([1, 2], 5, 1)).toEqual([[1, 2]])
  })

  it('should handle non-array iterables correctly', () => {
    expect(() => chunkWithMinSize('12345' as any, 2, 1)).toThrow('Input must be array')
  })

  it('should throw an error when chunk size is zero', () => {
    expect(() => chunkWithMinSize([1, 2, 3], 0, 1)).toThrow('Chunk size must be greater than 0')
  })

  it('should throw an error when chunk size is negative', () => {
    expect(() => chunkWithMinSize([1, 2, 3], -1, 1)).toThrow('Chunk size must be greater than 0')
  })

  it('should throw an error when chunk minChunkSize is negative', () => {
    expect(() => chunkWithMinSize([1, 2, 3], 2, -1)).toThrow('Chunk minSize must be greater than or equal 0')
  })

  it('should adjust last chunk to meet minimum size', () => {
    expect(chunkWithMinSize([1, 2, 3, 4, 5], 2, 2)).toEqual([
      [1, 2],
      [3, 4, 5],
    ])
  })

  it('should not modify last chunk if it already meets minimum size', () => {
    expect(chunkWithMinSize([1, 2, 3, 4, 5, 6], 2, 1)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ])
  })
})
