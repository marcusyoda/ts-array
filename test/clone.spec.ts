import { clone } from '../src'

describe('Clone', () => {
  describe('should clone arrays correctly', () => {
    it('should clone an array', () => {
      const arr = ['A', 'B']
      const cloned = clone(arr)

      expect(cloned).toEqual(arr)
      expect(cloned).not.toBe(arr)
    })

    it('should clone a nested array', () => {
      const arr = ['A', ['B', 'C']]
      const cloned = clone(arr)

      expect(cloned).toEqual(arr)
      expect(cloned).not.toBe(arr)

      expect(cloned[1]).toEqual(arr[1])
      expect(cloned[1]).not.toBe(arr[1])
    })

    it('should clone an array of objects', () => {
      const arr = [
        { a: 'A', b: 'B' },
        { c: 'C', d: 'D' },
      ]
      const cloned = clone(arr)

      expect(cloned).toEqual(arr)
      expect(cloned).not.toBe(arr)

      expect(cloned[0]).toEqual(arr[0])
      expect(cloned[0]).not.toBe(arr[0])
      expect(cloned[1]).toEqual(arr[1])
      expect(cloned[1]).not.toBe(arr[1])
    })

    it('should clone an array of arrays', () => {
      const arr = [
        ['A', 'B'],
        ['C', 'D'],
      ]
      const cloned = clone(arr)

      expect(cloned).toEqual(arr)
      expect(cloned).not.toBe(arr)

      expect(cloned[0]).toEqual(arr[0])
      expect(cloned[0]).not.toBe(arr[0])
      expect(cloned[1]).toEqual(arr[1])
      expect(cloned[1]).not.toBe(arr[1])
    })

    it('should clone an array with Date value', () => {
      const arr = [
        { a: 'A', b: 'B', date: new Date() },
        { c: 'C', d: 'D', date: new Date() },
      ]
      const cloned = clone(arr)

      expect(cloned).toEqual(arr)
      expect(cloned).not.toBe(arr)

      expect(cloned[0]).toEqual(arr[0])
      expect(cloned[0]).not.toBe(arr[0])
      expect(cloned[1]).toEqual(arr[1])
      expect(cloned[1]).not.toBe(arr[1])
    })

    it('should clone a Set correctly', () => {
      const set = new Set(['A', 'B', new Set(['C', 'D'])])
      const cloned = clone(set)

      expect(cloned).toEqual(set)
      expect(cloned).not.toBe(set)

      const originalInnerSet = Array.from(set)[2]
      const clonedInnerSet = Array.from(cloned)[2]

      expect(clonedInnerSet).toEqual(originalInnerSet)
      expect(clonedInnerSet).not.toBe(originalInnerSet)
    })

    it('should clone a Map correctly', () => {
      const map = new Map<string, any>([
        ['key1', 'value1'],
        ['key2', new Map([['innerKey', 'innerValue']])],
      ])
      const cloned = clone(map)

      expect(cloned).toEqual(map)
      expect(cloned).not.toBe(map)

      const originalInnerMap = map.get('key2')
      const clonedInnerMap = cloned.get('key2')
      expect(clonedInnerMap).toEqual(originalInnerMap)
      expect(clonedInnerMap).not.toBe(originalInnerMap)
    })

    it('should clone nested objects with arrays correctly', () => {
      const obj = {
        data: [1, 2, 3],
        nested: {
          array: ['A', 'B', 'C'],
        },
      }
      const cloned = clone(obj)

      expect(cloned).toEqual(obj)
      expect(cloned).not.toBe(obj)
      expect(cloned.nested).not.toBe(obj.nested)
      expect(cloned.nested.array).toEqual(obj.nested.array)
      expect(cloned.nested.array).not.toBe(obj.nested.array)
    })
  })

  describe('should handle memory reference correctly', () => {
    it('should not affect the cloned array when original array is modified using push', () => {
      const arr = ['A', 'B']
      const cloned = clone(arr)

      arr.push('C')

      expect(cloned).toEqual(['A', 'B'])
      expect(arr).toEqual(['A', 'B', 'C'])
    })

    it('should not affect the cloned array when original array is modified using splice', () => {
      const arr = ['A', 'B', 'C']
      const cloned = clone(arr)

      arr.splice(1, 1)

      expect(cloned).toEqual(['A', 'B', 'C'])
      expect(arr).toEqual(['A', 'C'])
    })

    it('should not affect the cloned nested array when original nested array is modified', () => {
      const arr = [['A'], ['B', 'C']]
      const cloned = clone(arr)

      arr[1].push('D')

      expect(cloned).toEqual([['A'], ['B', 'C']])
      expect(arr).toEqual([['A'], ['B', 'C', 'D']])
    })

    it('should not affect the cloned array of objects when original array of objects is modified', () => {
      const arr = [{ a: 'A' }, { b: 'B' }]
      const cloned = clone(arr)

      arr[0].a = 'Modified'

      expect(cloned).toEqual([{ a: 'A' }, { b: 'B' }])
      expect(arr).toEqual([{ a: 'Modified' }, { b: 'B' }])
    })
  })
})
