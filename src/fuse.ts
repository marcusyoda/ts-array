/**
 * Combines multiple arrays into a single array of arrays, aligning elements by their index.
 * If arrays are of different lengths, missing values are filled with `undefined`.
 *
 * @param {...Array<Array<T>>} arr - An indefinite number of arrays to be combined.
 * @returns {Array<Array<T>>} - An array of arrays where each inner array contains elements from the same index of each input array.
 * @template T - The type of elements in the arrays. Defaults to 'unknown' if not specified.
 * @example
 * // Combining two arrays
 * fuse(['a', 'b', 'c'], [1, 2, 3])
 * // Returns [['a', 1], ['b', 2], ['c', 3]]
 *
 * // Combining arrays of different lengths
 * fuse(['a', 'b'], [1, 2, 3])
 * // Returns [['a', 1], ['b', 2], [undefined, 3]]
 */
export const fuse = <T = unknown>(...arr: Array<Array<T>>): Array<Array<T>> => {
  const maxLength: number = Math.max(...arr.map(x => x.length))

  return Array.from({ length: maxLength }).map((_, i) => {
    return Array.from({ length: arr.length }, (_, k) => arr[k][i])
  })
}
