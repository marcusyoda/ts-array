# Flatten Function in ts-array

The flatten function in the ts-array library is designed to flatten nested arrays in an array up to a specified depth. This function is particularly useful for simplifying deeply nested array structures into a more manageable and accessible format.

## Description

The flatten function takes a potentially nested array and flattens it to a specified depth level. The depth parameter determines how many levels of nested arrays will be flattened. By default, the function flattens only one level deep (depth = 1), but it can be adjusted to accommodate deeper structures.

## Parameters

arr: The array to flatten. It can contain elements of type T or nested arrays of type Array<T>.
depth (optional): The depth level to which the array should be flattened. Defaults to 1 if not specified.

## Returns

A new array that is a flattened version of the input array up to the specified depth. The elements in the flattened array are of type T.

## Throws

Throws an error if the input is not an array.

## Examples

### Basic Flattening

```typescript
import { flatten } from 'ts-array'

const nestedArray = [1, [2, 3], [4, [5, 6]]]
const flattenedArray = flatten(nestedArray)

console.log(flattenedArray)
// Output:
// [1, 2, 3, 4, [5, 6]]
```

### Flattening with Specified Depth

```typescript
import { flatten } from 'ts-array'

const deeplyNestedArray = [1, [2, [3, [4, 5]]]]
const flattenedArray = flatten(deeplyNestedArray, 2)

console.log(flattenedArray)
// Output:
// [1, 2, 3, [4, 5]]
```

### Error Handling for Non-Array Input

```typescript
import { flatten } from 'ts-array'

try {
  const result = flatten('not an array')
  console.log(result)
} catch (error) {
  console.error(error.message)
}
// Output:
// 'Input must be array'
```
