export type CallbackFunction<T> = (value: T, key: string, obj: Record<string, T>) => any

export type ReduceCallbackFunction<T, U> = (accumulator: U, value: T, key: string, obj: Record<string, T>) => U

/**
 * Converts a record (object) into a proxy object that allows array-like operations.
 * This includes methods like map, reduce, forEach, filter, etc.
 *
 * @param {Record<string, T>} obj - The object to be converted.
 * @returns {Proxy} - A proxy object that mimics the behavior of an array, with additional methods for object manipulation.
 * @template T - The type of the values in the object.
 * @example
 * // Using map on an object
 * const obj = { a: 1, b: 2 };
 * const keyedArray = toKeyedArray(obj);
 * keyedArray.map((value, key) => value * 2);
 * // Returns [2, 4]
 */
export const toKeyedArray = <T = unknown>(obj: Record<string, T>): any => {
  if (Array.isArray(obj) || typeof obj !== 'object' || obj === null || Object.getPrototypeOf(obj) !== Object.prototype) {
    throw new Error('Input must be object')
  }

  const methods = {
    map(target: Record<string, T>) {
      return (callback: CallbackFunction<T>) => Object.keys(target).map(key => callback(target[key], key, target))
    },
    reduce(target: Record<string, T>) {
      return (callback: ReduceCallbackFunction<T, T>, accumulator: T) => Object.keys(target).reduce((acc, key) => callback(acc, target[key], key, target), accumulator)
    },
    forEach(target: Record<string, T>) {
      return (callback: CallbackFunction<T>) => Object.keys(target).forEach(key => callback(target[key], key, target))
    },
    filter(target: Record<string, T>) {
      return (callback: CallbackFunction<T>) =>
        Object.keys(target).reduce(
          (acc, key) => {
            if (callback(target[key], key, target)) acc[key] = target[key]
            return acc
          },
          {} as Record<string, T>,
        )
    },
    slice(target: Record<string, T>) {
      return (start?: number, end?: number) => Object.values(target).slice(start, end)
    },
    find(target: Record<string, T>) {
      return (callback: CallbackFunction<T>) => {
        const foundEntry = Object.entries(target).find(([key, value]) => callback(value, key, target))
        return foundEntry ? foundEntry[1] : undefined
      }
    },
    findKey(target: Record<string, T>) {
      return (callback: CallbackFunction<T>) => Object.keys(target).find(key => callback(target[key], key, target))
    },
    includes(target: Record<string, T>) {
      return (val: T) => Object.values(target).includes(val)
    },
    keyOf(target: Record<string, T>) {
      return (value: T) => Object.keys(target).find(key => target[key] === value) || undefined
    },
    lastKeyOf(target: Record<string, T>) {
      return (value: T) =>
        Object.keys(target)
          .reverse()
          .find(key => target[key] === value) || undefined
    },
  }
  const methodKeys = Object.keys(methods)

  const handler: ProxyHandler<Record<string, T>> = {
    get(target, prop, receiver) {
      if (methodKeys.includes(prop as string)) return methods[prop as keyof typeof methods](target)
      const [keys, values] = [Object.keys(target), Object.values(target)]
      if (prop === 'length') return keys.length
      if (prop === 'keys') return () => keys
      if (prop === 'values') return () => values
      if (prop === Symbol.iterator) {
        return function* () {
          for (const value of values) yield value
        }
      } else return Reflect.get(target, prop, receiver)
    },
  }

  return new Proxy(obj, handler)
}
