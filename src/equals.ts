/**
 * Compares two arrays for equality, with an option to ignore the order of elements and an optional custom comparator function.
 *
 * @param {Array<T>} a - The first array to compare.
 * @param {Array<T>} b - The second array to compare.
 * @param {boolean} ignoreOrder - If true, the order of elements in the arrays is ignored.
 * @param {(item1: T, item2: T) => boolean} [comparator] - Optional comparator function to compare elements.
 * @returns {boolean} - Returns true if the arrays are equal (considering the order if ignoreOrder is false), otherwise returns false.
 * @template T - The type of elements in the arrays.
 * @example
 * // Comparing with order consideration
 * equals([1, 2, 3], [1, 2, 3], false); // Returns true
 *
 * // Comparing without order consideration
 * equals([3, 2, 1], [1, 2, 3], true); // Returns true
 *
 * // Comparing with a custom comparator
 * const comparator = (a, b) => a.id === b.id;
 * equals([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 2 }], true, comparator); // Returns true
 */
export const equals = <T>(a: Array<T>, b: Array<T>, ignoreOrder: boolean, comparator?: (item1: T, item2: T) => boolean): boolean => {
  const compare = comparator || ((item1, item2) => item1 === item2)

  if (a.length !== b.length) return false

  if (!ignoreOrder) {
    return a.every((v, i) => compare(v, b[i]))
  }

  const uniqueValuesA = new Set(a)
  const uniqueValuesB = new Set(b)

  if (uniqueValuesA.size !== uniqueValuesB.size) return false

  for (const v of uniqueValuesA) {
    const aCount = a.filter(e => compare(e, v)).length
    const bCount = b.filter(e => compare(e, v)).length
    if (aCount !== bCount) return false
  }

  return true
}
