/**
 * Removes falsy values from an array. Falsy values include false, null, 0, "", undefined, and NaN.
 *
 * @param {Array<T>} arr - The array to be compacted.
 * @returns {Array<T>} - A new array with falsy values removed.
 * @template T - The type of elements in the array.
 * @example
 * compact([0, 1, false, 2, '', 3]); // Returns [1, 2, 3]
 */
export const compact = <T = unknown>(array: Array<T>): T[] => {
  return array.filter(Boolean) as T[]
}
