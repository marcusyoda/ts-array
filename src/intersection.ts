/**
 * Finds the intersection of multiple arrays, returning an array of elements that are present in all of the arrays.
 *
 * @param {...Array<Array<T>>} arr - An indefinite number of arrays to find the intersection of.
 * @returns {Array<T>} - An array containing the elements common to all provided arrays.
 * @template T - The type of elements in the arrays.
 */
export const intersection = <T = unknown>(...arr: Array<Array<T>>): Array<T> => {
  if (arr.length === 0) return []

  return arr.reduce((acc, arr) => acc.filter(item => arr.includes(item)))
}
