import { equals } from '../src'

const compareObjectsById = (obj1: Record<string, any>, obj2: Record<string, any>) => obj1.id === obj2.id

describe('Equals', () => {
  describe('Compare plain arrays', () => {
    it('returns true for identical arrays when order matters', () => {
      expect(equals([1, 2, 3], [1, 2, 3], false)).toBe(true)
    })

    it('returns false for different arrays when order matters', () => {
      expect(equals([1, 2, 3], [3, 2, 1], false)).toBe(false)
    })

    it('returns true for identical arrays when order does not matter', () => {
      expect(equals([3, 2, 1], [1, 2, 3], true)).toBe(true)
    })

    it('returns false for different arrays when order does not matter', () => {
      expect(equals([1, 2, 3], [4, 5, 6], true)).toBe(false)
    })

    it('returns false for arrays of different lengths', () => {
      expect(equals([1, 2, 3], [1, 2], true)).toBe(false)
    })

    it('returns true for arrays with repeated elements when order does not matter', () => {
      expect(equals([1, 2, 2], [2, 1, 2], true)).toBe(true)
    })

    it('returns false for arrays with different frequencies of elements', () => {
      expect(equals([1, 2, 2], [2, 2, 2], true)).toBe(false)
    })

    it('returns true for empty arrays', () => {
      expect(equals([], [], true)).toBe(true)
    })
  })

  describe('Compare array of objects', () => {
    it('returns true for identical arrays of objects with order consideration', () => {
      const array1 = [{ id: 1 }, { id: 2 }]
      const array2 = [{ id: 1 }, { id: 2 }]
      expect(equals(array1, array2, false, compareObjectsById)).toBe(true)
    })

    it('returns false for different arrays of objects with order consideration', () => {
      const array1 = [{ id: 1 }, { id: 2 }]
      const array2 = [{ id: 2 }, { id: 1 }]
      expect(equals(array1, array2, false, compareObjectsById)).toBe(false)
    })

    it('returns true for identical arrays of objects without order consideration', () => {
      const array1 = [{ id: 1 }, { id: 2 }]
      const array2 = [{ id: 2 }, { id: 1 }]
      expect(equals(array1, array2, true, compareObjectsById)).toBe(true)
    })

    it('returns false for different arrays of objects without order consideration', () => {
      const array1 = [{ id: 1 }, { id: 2 }]
      const array2 = [{ id: 3 }, { id: 4 }]
      expect(equals(array1, array2, true, compareObjectsById)).toBe(false)
    })

    it('returns false for arrays of objects with different lengths', () => {
      const array1 = [{ id: 1 }, { id: 2 }, { id: 3 }]
      const array2 = [{ id: 1 }, { id: 2 }]
      expect(equals(array1, array2, true, compareObjectsById)).toBe(false)
    })
  })
})
