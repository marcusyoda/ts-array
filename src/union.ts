/**
 * Combines multiple arrays into a single array with unique elements.
 *
 * @param {...Array<Array<T>>} arrays - An indefinite number of arrays to be combined.
 * @returns {Array<T>} - An array containing unique elements from all provided arrays.
 * @template T - The type of elements in the arrays.
 */
export const union = <T = unknown>(...arrays: Array<Array<T>>): Array<T> => {
  const set = new Set<T>()
  arrays.forEach(array => array.forEach(item => set.add(item)))
  return Array.from(set)
}
