# ChunkWithMinSize Function in ts-array

The chunkWithMinSize function in the ts-array library is tailored for splitting an array into chunks of a specific size while ensuring that the last chunk meets a minimum size requirement. This function is particularly useful in scenarios where evenly sized chunks are needed, but the final chunk must not fall below a certain size to maintain consistency or meet specific criteria.

## Description

This function divides an array into chunks based on the specified size. Additionally, it adjusts the size of the last chunk to ensure it meets the minimum size requirement specified by minChunkSize. If the last chunk is smaller than minChunkSize, it will be merged with the preceding chunk or expanded to meet this minimum size.

## Parameters

arr: The array to be chunked. Can be an array of any type.
size: The size of each chunk. Must be a positive integer greater than 0.
minChunkSize: The minimum size of the last chunk. Must be a non-negative integer.

## Returns

An array of arrays, where each inner array is a chunk of the original array. The size of the last chunk is adjusted to be at least minChunkSize.

## Throws

Throws an error if the input is not an array.
Throws an error if the chunk size size is less than or equal to 0.
Throws an error if the minimum chunk size minChunkSize is negative.

## Examples

### Chunking an Array with Minimum Last Chunk Size

```typescript
import { chunkWithMinSize } from 'ts-array'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const chunkSize = 3
const minLastChunkSize = 2

const chunks = chunkWithMinSize(array, chunkSize, minLastChunkSize)
console.log(chunks)
// Output:
// [[1, 2, 3], [4, 5, 6], [7, 8, 9, 10]]
```

### Handling Non-Array Input

```typescript
import { chunkWithMinSize } from 'ts-array'

try {
  const result = chunkWithMinSize('not an array', 3, 2)
  console.log(result)
} catch (error) {
  console.error(error.message)
}
// Output:
// 'Input must be array'
```

### Handling Invalid Chunk Sizes

```typescript
import { chunkWithMinSize } from 'ts-array'

try {
  const result = chunkWithMinSize([1, 2, 3], -1, 2)
  console.log(result)
} catch (error) {
  console.error(error.message)
}
// Output:
// 'Chunk size must be greater than 0'
```
