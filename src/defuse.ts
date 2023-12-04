/**
 * Separates an array of arrays ('zipped' structure) into individual arrays based on their positions.
 *
 * @param {Array<Array<T>>} arr - An array of arrays where each inner array represents a 'zipped' set of elements.
 * @returns {Array<Array<T>>} - An array of arrays where each inner array contains elements from a specific position in the original 'zipped' arrays.
 * @template T - The type of elements in the sub-arrays.
 * @example
 * // If you pass an array of pairs
 * defuse([[1, 'a'], [2, 'b'], [3, 'c']])
 * // It returns an array of two arrays, one with the numbers and one with the letters
 * // [[1, 2, 3], ['a', 'b', 'c']]
 */
export const defuse = <T = unknown>(arr: Array<Array<T>>): Array<Array<T>> => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be array')
  }

  arr.forEach(subArray => {
    if (!Array.isArray(subArray)) {
      throw new Error('Input must be array of arrays')
    }
  })

  const maxLength: number = Math.max(...arr.map(x => x.length))

  return Array.from({ length: maxLength }, () => []).map((_, index) => arr.map(subArray => subArray[index]))
}
