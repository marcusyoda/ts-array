import { chunkify } from '../src'

describe('Chunkify', () => {
  it('should divide an array into chunks of specified size', () => {
    const result = Array.from(chunkify([1, 2, 3, 4, 5], 2))
    expect(result).toEqual([[1, 2], [3, 4], [5]])
  })

  it('should return an empty array when input iterable is empty', () => {
    const result = Array.from(chunkify([], 3))
    expect(result).toEqual([])
  })

  it('should handle chunk size greater than iterable length', () => {
    const result = Array.from(chunkify([1, 2], 5))
    expect(result).toEqual([[1, 2]])
  })

  it('should throw an error when chunk size is zero', () => {
    expect(() => Array.from(chunkify([1, 2, 3], 0))).toThrow('Chunk size must be greater than 0')
  })

  it('should throw an error when chunk size is negative', () => {
    expect(() => Array.from(chunkify([1, 2, 3], -1))).toThrow('Chunk size must be greater than 0')
  })

  it('should handle different types of iterables', () => {
    const stringResult = Array.from(chunkify('12345', 2))
    expect(stringResult).toEqual([['1', '2'], ['3', '4'], ['5']])
  })
})
