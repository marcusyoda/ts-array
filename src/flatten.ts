/**
 * Flattens an array up to a specified depth.
 *
 * @param {Array<T | Array<T>>} arr - The array to flatten.
 * @param {number} [depth=1] - The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
 * @returns {Array<T>} - The new flattened array.
 * @template T - The type of elements in the array.
 */
export const flatten = <T = unknown>(arr: Array<T | Array<T>>, depth = 1): Array<T> => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be array')
  }

  if (!arr.length) {
    return []
  }

  return arr.reduce<Array<T>>((accumulator, value) => {
    if (Array.isArray(value)) {
      return accumulator.concat(depth > 1 && Array.isArray(value) ? flatten(value, depth - 1) : value)
    } else {
      return accumulator.concat(value)
    }
  }, [])
}
