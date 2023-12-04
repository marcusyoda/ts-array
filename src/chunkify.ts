/**
 * Generator function that splits an iterable into chunks of a specified size.
 *
 * @param {Iterable<T>} itr - The iterable to be chunked.
 * @param {number} size - The size of each chunk.
 * @throws Will throw an error if the chunk size is less than or equal to 0.
 * @yields {Array<T>} - Yields chunks of the iterable, each being an array of elements.
 * @template T - The type of elements in the iterable.
 */
export const chunkify = function* <T = unknown>(itr: Iterable<T>, size: number) {
  if (size <= 0) throw new Error('Chunk size must be greater than 0')

  let chunk = []

  for (const v of itr) {
    chunk.push(v)
    if (chunk.length === size) {
      yield chunk
      chunk = []
    }
  }

  if (chunk.length) yield chunk
}
