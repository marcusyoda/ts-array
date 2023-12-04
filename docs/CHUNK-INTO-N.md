# ChunkIntoN Function in ts-array

The chunkIntoN function in the ts-array library is designed to split an array into a specified number of chunks. This function is useful when you need to divide a dataset into evenly distributed segments, such as for batch processing or parallel computation.

## Description

This function takes an array and a number n, and returns a new array containing n chunks. Each chunk is an array of elements from the original array. If the original array cannot be divided evenly, the final chunks may have fewer elements.

## Parameters

arr: The array to be chunked. This should be an array of any type, including nested arrays and arrays containing complex objects.
n: The number of chunks to split the array into. It must be a positive integer.

## Returns

An array of arrays, where each inner array is a chunk of the original array. The length of the returned array is equal to n.

## Throws

Throws an error if the input is not an array.
Throws an error if the number of chunks n is less than or equal to 0.

## Examples

### Splitting an Array into N Chunks

```typescript
import { chunkIntoN } from 'ts-array'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numberOfChunks = 3

const chunks = chunkIntoN(array, numberOfChunks)
console.log(chunks)
// Output:
// [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
```

### Handling Non-Array Input

```typescript
import { chunkIntoN } from 'ts-array'

try {
  const result = chunkIntoN('not an array', 3)
  console.log(result)
} catch (error) {
  console.error(error.message)
}
// Output:
// 'Input must be array'
```

### Handling Invalid Number of Chunks

```typescript
import { chunkIntoN } from 'ts-array'

try {
  const result = chunkIntoN([1, 2, 3], 0)
  console.log(result)
} catch (error) {
  console.error(error.message)
}
// Output:
// 'Number of chunks must be greater than 0'
```
