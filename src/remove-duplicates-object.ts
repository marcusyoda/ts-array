/**
 * Removes duplicate objects from an array based on a specified identifier property.
 *
 * @param {Array<T>} arr - The array of objects from which to remove duplicates.
 * @param {keyof T} identifier - The property of the objects used to identify duplicates.
 * @returns {Array<T>} - An array containing only unique objects based on the identifier property.
 * @template T - The type of the objects in the array.
 */
export const removeDuplicateObjects = <T = unknown>(arr: Array<T>, identifier: keyof T): Array<T> => {
  if (!Array.isArray(arr)) {
    throw new Error('Input must be array')
  }

  const unique = new Map<T[keyof T], T>()

  for (const item of arr) {
    unique.set(item[identifier], item)
  }

  return Array.from(unique.values())
}
