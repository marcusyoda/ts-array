/**
 * Removes duplicate primitive values (string, number, boolean) from an array.
 *
 * @param {Array<string | number | boolean | null | undefined>} arr - The array from which to remove duplicates.
 * @returns {Array<string | number | boolean | null | undefined>} - An array containing only unique values.
 */
export const removeDuplicates = (arr: Array<string | number | boolean | null | undefined>): Array<string | number | boolean | null | undefined> => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be array')
  }

  return [...new Set(arr)]
}
