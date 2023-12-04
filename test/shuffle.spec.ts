import { shuffle } from '../src'

describe('Shuffle', () => {
  const array = [1, 2, 3, 4, 5]

  it('returns a shuffled array with the same elements', () => {
    const shuffled = shuffle(array)
    expect(shuffled).toEqual(expect.arrayContaining(array))
    expect(shuffled.length).toBe(array.length)
  })

  it('does not modify the original array', () => {
    const copy = [...array]
    shuffle(array)
    expect(array).toEqual(copy)
  })

  it('shuffles the elements (randomness check)', () => {
    const shuffled = shuffle(array)

    expect(shuffled).not.toEqual(array)
  })

  it('handles an empty array', () => {
    expect(shuffle([])).toEqual([])
  })

  it('handles a single-element array', () => {
    const singleElementArray = [1]
    expect(shuffle(singleElementArray)).toEqual([1])
  })
})
