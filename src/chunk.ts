/**
 * Splits an array into chunks of a specified size.
 *
 * @param {Array<T>} arr - The array to be chunked.
 * @param {number} size - The size of each chunk.
 * @throws Will throw an error if the input is not an array or if the chunk size is less than or equal to 0.
 * @returns {Array<Array<T>>} - An array of arrays, where each inner array is a chunk of the original array.
 */
export const chunk = <T = unknown>(arr: Array<T>, size: number): Array<Array<T>> => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be array')
  }

  if (size <= 0) throw new Error('Chunk size must be greater than 0')

  return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) => arr.slice(i * size, i * size + size))
}
