import { compact } from '../src/compact'

describe('compact function tests', () => {
  it('removes false from array', () => {
    expect(compact([false, 1, 2])).toEqual([1, 2])
  })

  it('removes null from array', () => {
    expect(compact([null, 1, 2])).toEqual([1, 2])
  })

  it('removes 0 from array', () => {
    expect(compact([0, 1, 2])).toEqual([1, 2])
  })

  it('removes empty string from array', () => {
    expect(compact(['', 1, 2])).toEqual([1, 2])
  })

  it('removes undefined from array', () => {
    expect(compact([undefined, 1, 2])).toEqual([1, 2])
  })

  it('removes NaN from array', () => {
    expect(compact([NaN, 1, 2])).toEqual([1, 2])
  })

  it('removes all falsy values from array', () => {
    expect(compact([false, null, 0, '', undefined, NaN, 1, 2, 3])).toEqual([1, 2, 3])
  })

  it('returns empty array when all elements are falsy', () => {
    expect(compact([false, null, 0, '', undefined, NaN])).toEqual([])
  })

  it('does not remove truthy values', () => {
    expect(compact([true, 1, 'text', [], {}, 2, 3])).toEqual([true, 1, 'text', [], {}, 2, 3])
  })
})
