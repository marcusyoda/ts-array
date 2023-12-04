import { difference } from './difference'

/**
 * Creates an array of unique values that is the symmetric difference of the given arrays with an optional comparator.
 *
 * @param {Array<T>} array1 - The first array to compare.
 * @param {Array<T>} array2 - The second array to compare against.
 * @param {(item1: T, item2: T) => boolean} [comparator] - Optional comparator function to compare elements.
 * @returns {Array<T>} - An array containing the symmetric difference of the two arrays.
 * @template T - The type of elements in the arrays.
 */
export const differenceSymmetric = <T = unknown>(array1: Array<T>, array2: Array<T>, comparator?: (item1: T, item2: T) => boolean): Array<T> => {
  const diff1 = difference(array1, array2, comparator)
  const diff2 = difference(array2, array1, comparator)

  return [...diff1, ...diff2]
}
