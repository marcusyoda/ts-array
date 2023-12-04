import { clone } from './clone'

/**
 * Shuffles an array, returning a new array with elements in random order.
 *
 * @param {Array<T>} array - The array to shuffle.
 * @returns {Array<T>} - A new array with the elements of the original array in random order.
 * @template T - The type of elements in the array.
 */
export const shuffle = <T = unknown>(array: Array<T>): Array<T> => {
  const cloned = clone(array)

  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = cloned[i]
    cloned[i] = cloned[j]
    cloned[j] = temp
  }

  return cloned
}
