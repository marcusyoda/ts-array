/**
 * Merges two arrays into a single array without duplicates, with an optional comparator for merging arrays of objects.
 *
 * @param {Array<T>} array1 - The first array to merge.
 * @param {Array<T>} array2 - The second array to merge.
 * @param {(item1: T, item2: T) => boolean} [comparator] - Optional comparator function to compare elements for uniqueness.
 * @returns {Array<T>} - A merged array containing unique elements from both arrays.
 * @template T - The type of elements in the arrays.
 * @example
 * // Merging simple arrays
 * merge([1, 2], [2, 3, 4]); // Returns [1, 2, 3, 4]
 *
 * // Merging arrays of objects with a custom comparator
 * const comparator = (a, b) => a.id === b.id;
 * merge([{ id: 1 }], [{ id: 1 }, { id: 2 }], comparator); // Returns [{ id: 1 }, { id: 2 }]
 */
export const merge = <T>(array1: Array<T>, array2: Array<T>, comparator?: (item1: T, item2: T) => boolean): Array<T> => {
  const mergedArray: Array<T> = [...array1]

  array2.forEach(item2 => {
    const isDuplicate = comparator ? array1.some(item1 => comparator(item1, item2)) : array1.includes(item2)

    if (!isDuplicate) {
      mergedArray.push(item2)
    }
  })

  return mergedArray
}
