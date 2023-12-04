import { chunk } from '../src'

describe('Chunk', () => {
  it('should divide an array into chunks of specified size', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
  })

  it('should return an empty array when input array is empty', () => {
    expect(chunk([], 3)).toEqual([])
  })

  it('should handle single element array correctly', () => {
    expect(chunk([1], 2)).toEqual([[1]])
  })

  it('should return the original array when chunk size is greater than array length', () => {
    expect(chunk([1, 2], 5)).toEqual([[1, 2]])
  })

  it('should throw an error when chunk size is zero', () => {
    expect(() => chunk([1, 2, 3], 0)).toThrow('Chunk size must be greater than 0')
  })

  it('should throw an error when chunk size is negative', () => {
    expect(() => chunk([1, 2, 3], -1)).toThrow('Chunk size must be greater than 0')
  })

  it('should handle non-array iterables correctly', () => {
    expect(() => chunk('12345' as any, 2)).toThrow('Input must be array')
  })

  it('should throw an error for non-iterable inputs', () => {
    expect(() => chunk(12345 as any, 2)).toThrow('Input must be array')
  })
})
