/**
 * Splits an array into chunks of a specified size, ensuring that the last chunk meets a minimum size requirement.
 *
 * @param {Array<T>} arr - The array to be chunked.
 * @param {number} size - The size of each chunk.
 * @param {number} minChunkSize - The minimum size of the last chunk.
 * @throws Will throw an error if the input is not an array, if the chunk size is less than or equal to 0, or if the minimum chunk size is negative.
 * @returns {Array<Array<T>>} - An array of arrays, where each inner array is a chunk of the original array. The last chunk's size is adjusted to meet the minimum size requirement.
 */
export const chunkWithMinSize = <T = unknown>(arr: Array<T>, size: number, minChunkSize: number): Array<Array<T>> => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be array')
  }

  if (size <= 0) throw new Error('Chunk size must be greater than 0')

  if (+minChunkSize < 0) throw new Error('Chunk minSize must be greater than or equal 0')

  const remainder = arr.length % size
  const isLastChunkTooSmall = remainder > 0 && remainder < minChunkSize
  const totalChunks = isLastChunkTooSmall ? Math.floor(arr.length / size) : Math.ceil(arr.length / size)

  return Array.from({ length: totalChunks }, (_, i) => {
    const chunk = arr.slice(i * size, i * size + size)
    if (i === totalChunks - 1 && isLastChunkTooSmall) chunk.push(...arr.slice(-remainder))
    return chunk
  })
}
