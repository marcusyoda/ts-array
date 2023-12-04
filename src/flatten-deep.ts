/**
 * Recursively flattens an array to a single level regardless of the depth of nesting.
 *
 * @param {Array<T | Array<T>>} arr - The array to flatten deeply.
 * @returns {Array<T>} - The new flattened array.
 * @template T - The type of elements in the array, allowing nested arrays of the same type.
 */
export const flattenDeep = <T = unknown>(arr: Array<T | Array<T>>): Array<T> => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be array')
  }

  if (!arr.length) {
    return []
  }

  return arr.reduce<Array<T>>((accumulator, value) => {
    return accumulator.concat(Array.isArray(value) ? flattenDeep(value) : value)
  }, [])
}
