/**
 * Splits an array into a specified number of chunks.
 *
 * @param {Array<T>} arr - The array to be chunked.
 * @param {number} n - The number of chunks to split the array into.
 * @throws Will throw an error if the input is not an array, or if the number of chunks is less than or equal to 0.
 * @returns {Array<Array<T>>} - An array of arrays, where each inner array is a chunk of the original array.
 */
export const chunkIntoN = <T = unknown>(arr: Array<T>, n: number): Array<Array<T>> => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be array')
  }

  if (n <= 0) throw new Error('Number of chunks must be greater than 0')

  if (!arr.length) {
    return []
  }

  const size = Math.ceil(arr.length / n)
  return Array.from({ length: n }, (_, i) => arr.slice(i * size, i * size + size))
}
