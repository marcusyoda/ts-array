import { toKeyedArray } from '../src'

describe('ToKeyedArray', () => {
  describe('should handle array behavior correctly', () => {
    it('should behave like a pseudo-array while maintaining object properties', () => {
      const obj = { a: 'A', b: 'B' }
      const keyedArray = toKeyedArray(obj)

      expect(keyedArray.a).toBe('A')

      expect(keyedArray.keys()).toEqual(['a', 'b'])
      expect(keyedArray.values()).toEqual(['A', 'B'])
      expect(keyedArray.length).toEqual(2)

      expect([...keyedArray]).toEqual(['A', 'B'])
    })

    it('should update length when new properties are added', () => {
      const keyedArray = toKeyedArray({ a: 'A', b: 'B' })
      keyedArray.c = 'C'

      expect(keyedArray.length).toBe(3)
    })
  })

  describe('should handle array methods', () => {
    it('should correctly map over elements', () => {
      const keyedArray = toKeyedArray({ a: 'A', b: 'B' })
      const result = keyedArray.map((v: string, i: string) => i + v)

      expect(result).toEqual(['aA', 'bB'])
    })

    it('should find elements correctly', () => {
      const keyedArray = toKeyedArray({ a: 'A', b: 'B', c: 'C' })

      expect(keyedArray.find((v: string) => v === 'B')).toBe('B')
      expect(keyedArray.find((v: string) => v === 'X')).toBe(undefined)

      expect(keyedArray.findKey((v: string) => v === 'B')).toBe('b')
      expect(keyedArray.findKey((v: string) => v === 'X')).toBe(undefined)

      expect(keyedArray.includes('C')).toBe(true)
      expect(keyedArray.includes('X')).toBe(false)

      expect(keyedArray.keyOf('B')).toBe('b')
      expect(keyedArray.keyOf('X')).toBe(undefined)

      expect(keyedArray.lastKeyOf('C')).toBe('c')
      expect(keyedArray.lastKeyOf('X')).toBe(undefined)
    })

    it('should slice elements correctly', () => {
      const keyedArray = toKeyedArray({ a: 'A', b: 'B', c: 'C' })
      const slice1 = keyedArray.slice(0, 2)
      const slice2 = keyedArray.slice(-1)

      expect(slice1).toEqual(['A', 'B'])
      expect(slice2).toEqual(['C'])
    })

    it('should correctly execute forEach over elements', () => {
      const keyedArray = toKeyedArray({ a: 'A', b: 'B' })
      const mockCallback = jest.fn()

      keyedArray.forEach(mockCallback)

      expect(mockCallback.mock.calls.length).toBe(2)
      expect(mockCallback.mock.calls[0][0]).toBe('A')
      expect(mockCallback.mock.calls[0][1]).toBe('a')
      expect(mockCallback.mock.calls[1][0]).toBe('B')
      expect(mockCallback.mock.calls[1][1]).toBe('b')
    })

    it('should correctly reduce elements', () => {
      const keyedArray = toKeyedArray({ a: 1, b: 2, c: 3 })
      const result = keyedArray.reduce((acc: number, value: number) => acc + value, 0)

      expect(result).toBe(6)
    })

    it('should correctly filter elements', () => {
      const keyedArray = toKeyedArray({ a: 'Apple', b: 'Banana', c: 'Cherry' })
      const result = keyedArray.filter((value: string) => value.startsWith('B'))

      expect(result).toEqual({ b: 'Banana' })
    })
  })

  describe('should throw errors for invalid inputs', () => {
    it('should throw an error for array input', () => {
      expect(() => toKeyedArray(123 as any)).toThrow('Input must be object')
    })

    it('should throw an error for array input', () => {
      expect(() => toKeyedArray(null as any)).toThrow('Input must be object')
    })

    it('should throw an error for array input', () => {
      expect(() => toKeyedArray(undefined as any)).toThrow('Input must be object')
    })

    it('should throw an error for array input', () => {
      expect(() => toKeyedArray(['irrelevant'] as any)).toThrow('Input must be object')
    })
  })
})
