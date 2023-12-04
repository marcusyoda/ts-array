/**
 * Finds the difference between two arrays with an optional comparator function.
 *
 * @param {Array<T>} array1 - The first array to compare.
 * @param {Array<T>} array2 - The second array to compare against.
 * @param {(item1: T, item2: T) => boolean} [comparator] - Optional comparator function to compare elements.
 * @returns {Array<T>} - An array containing elements that are in the first array but not in the second.
 * @template T - The type of elements in the arrays.
 */
export const difference = <T = unknown>(array1: Array<T>, array2: Array<T>, comparator?: (item1: T, item2: T) => boolean): Array<T> => {
  const compare = comparator || ((a, b) => a === b)
  return array1.filter(item1 => !array2.some(item2 => compare(item1, item2)))
}
