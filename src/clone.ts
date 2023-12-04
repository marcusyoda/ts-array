/**
 * Creates a deep clone of an array, supporting a wide range of data types including nested arrays, dates, maps, sets, and objects.
 *
 * @param {Array<T>} arr - The array to be cloned.
 * @returns {Array<T>} - A deep clone of the original array. Each element is cloned based on its type:
 *   - Nested arrays are recursively cloned.
 *   - Date objects are cloned with the same time value.
 *   - Map objects are cloned with keys and values (values are deep cloned if they are arrays).
 *   - Set objects are cloned with values (values are deep cloned if they are arrays).
 *   - Object literals are cloned with all enumerable properties (property values are deep cloned if they are arrays).
 *   - Other types are copied as is.
 * @template T - The type of elements in the array. Defaults to 'unknown'.
 * @example
 * const originalArray = [1, ['a', ['b', 'c']], new Map([['key1', [1, 2]]])];
 * const clonedArray = clone(originalArray);
 * console.log(clonedArray); // Deeply cloned array
 */
export const clone = <T = unknown>(arr: T): T => {
  if (Array.isArray(arr)) {
    return arr.map(item => clone(item)) as unknown as T
  }

  if (arr instanceof Date) {
    return new Date(arr.getTime()) as unknown as T
  }

  if (arr instanceof Map) {
    return new Map(Array.from(arr, ([key, val]) => [key, clone(val)])) as unknown as T
  }

  if (arr instanceof Set) {
    return new Set(Array.from(arr, val => clone(val))) as unknown as T
  }

  if (arr && typeof arr === 'object') {
    return Object.entries(arr).reduce((acc: Record<string, any>, [key, value]) => {
      return {
        ...acc,
        [key]: clone(value),
      }
    }, {}) as unknown as T
  }

  return arr
}
