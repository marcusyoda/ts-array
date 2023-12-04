# Chunk Function in ts-array

The chunk function in the ts-array library provides a straightforward way to divide an array into smaller chunks of a specified size. This is a common requirement in various programming tasks such as data processing, pagination, or when working with large datasets.

## Description

This function takes an array and splits it into smaller arrays (chunks), each of a given size. The function ensures that every chunk except possibly the last one has the specified size. If the array can't be divided evenly, the last chunk will contain the remaining elements.

## Parameters

arr: The array to be chunked. This should be an array of any type.
size: The desired size of each chunk. It must be a positive integer.

## Returns

An array of arrays (chunks), where each inner array is a chunk of the original array. Each chunk contains up to size elements, except for the last chunk, which contains the remaining elements if the array doesn't divide evenly.

## Throws

Throws an error if the input is not an array.
Throws an error if the chunk size size is less than or equal to 0.

## Examples

### Basic Chunking

```typescript
import { chunk } from 'ts-array'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const chunkSize = 3

const chunkedArray = chunk(array, chunkSize)
console.log(chunkedArray)
// Output:
// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
```

### Chunking with Uneven Array

```typescript
import { chunk } from 'ts-array'

const array = [1, 2, 3, 4, 5]
const chunkSize = 2

const chunkedArray = chunk(array, chunkSize)
console.log(chunkedArray)
// Output:
// [[1, 2], [3, 4], [5]]
```

### Error Handling for Invalid Input

```typescript
import { chunk } from 'ts-array'

try {
  const result = chunk('not an array', 2)
  console.log(result)
} catch (error) {
  console.error(error.message)
}
// Output:
// 'Input must be array'
```

```typescript
import { chunk } from 'ts-array'

try {
  const result = chunk([1, 2, 3], 0)
  console.log(result)
} catch (error) {
  console.error(error.message)
}
// Output:
// 'Chunk size must be greater than 0'
```
