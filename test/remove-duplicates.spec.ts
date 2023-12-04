import { removeDuplicates } from '../src'

describe('Duplicates', () => {
  describe('removeDuplicates', () => {
    it('should remove duplicate numbers', () => {
      const numbers = [1, 2, 2, 3, 4, 4, 5]

      expect(removeDuplicates(numbers)).toEqual([1, 2, 3, 4, 5])
    })

    it('should remove duplicate strings', () => {
      const strings = ['apple', 'banana', 'apple', 'cherry']

      expect(removeDuplicates(strings)).toEqual(['apple', 'banana', 'cherry'])
    })

    it('should remove duplicate booleans', () => {
      const booleans = [true, false, true, false]

      expect(removeDuplicates(booleans)).toEqual([true, false])
    })

    it('should throw an error for non-iterable inputs', () => {
      expect(() => removeDuplicates('12345' as any)).toThrow('Input must be array')
    })
  })
})
