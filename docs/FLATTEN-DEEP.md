# FlattenDeep Function in ts-array

The flattenDeep function in the ts-array library is designed to recursively flatten an array, regardless of its depth of nesting. This function is invaluable for handling complex, deeply nested array structures and converting them into a single-level array.

## Description

The flattenDeep function takes an array that may contain nested arrays of any depth and flattens it completely. This means that no matter how many levels of arrays are nested within each other, the function will produce a single-level array containing all the elements in their original order.

## Parameters

arr: The array to be deeply flattened. This array can contain elements of type T and/or further nested arrays of the same type.

## Returns

A new array that is a completely flattened version of the input array. The elements in the flattened array are of type T.

## Throws

Throws an error if the input is not an array.

## Examples

### Deep Flattening of a Nested Array

```typescript
import { flattenDeep } from 'ts-array'

const deeplyNestedArray = [1, [2, [3, [4, 5]]], [6, 7], 8]
const flattenedArray = flattenDeep(deeplyNestedArray)

console.log(flattenedArray)
// Output:
// [1, 2, 3, 4, 5, 6, 7, 8]
```

### Handling Non-Array Input

```typescript
import { flattenDeep } from 'ts-array'

try {
  const result = flattenDeep('not an array')
  console.log(result)
} catch (error) {
  console.error(error.message)
}
// Output:
// 'Input must be array'
```
