import { removeDuplicateObjects } from '../src'

describe('RemoveObjectDuplicates', () => {
  describe('removeDuplicateObjects', () => {
    it('should remove duplicate objects based on a key', () => {
      const objects: Array<Record<string, number | string>> = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 1, name: 'Alice' },
      ]

      const uniqueObjects = removeDuplicateObjects(objects, 'id')

      expect(uniqueObjects).toEqual([
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ])
    })

    it('should handle empty array', () => {
      const objects: Array<Record<string, number | string>> = []
      expect(removeDuplicateObjects(objects, 'id')).toEqual([])
    })

    it('should handle array with no duplicates', () => {
      const objects: Array<Record<string, number | string>> = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
      ]

      expect(removeDuplicateObjects(objects, 'id')).toEqual(objects)
    })

    it('should throw an error for non-iterable inputs', () => {
      expect(() => removeDuplicateObjects('12345' as any, 'irrelevant')).toThrow('Input must be array')
    })
  })
})
