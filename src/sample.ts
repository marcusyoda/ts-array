/**
 * Selects a random element from an array.
 *
 * @param {Array<T>} array - The array to sample from.
 * @returns {T | undefined} - A random element from the array, or undefined if the array is empty.
 * @template T - The type of elements in the array.
 */
export const sample = <T = unknown>(array: Array<T>): T | undefined => {
  if (array.length === 0) {
    return undefined
  }

  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}
