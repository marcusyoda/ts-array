# Chunkify Function in ts-array

The chunkify function in the ts-array library is a generator function designed to split an iterable into chunks of a specified size. This function is extremely useful when dealing with large datasets or when you want to process data in smaller, more manageable pieces.

## Description

This generator function takes an iterable and a chunk size as arguments and yields chunks of the iterable. Each chunk is an array containing elements of the specified size. If the iterable cannot be divided evenly by the chunk size, the final chunk will contain the remaining elements.

## Parameters

itr: The iterable to be chunked. This can be any iterable object, such as an array, string, or custom iterable.
size: The size of each chunk. It must be a positive integer greater than 0.

## Yields

The function yields an array for each chunk. Each array contains up to size elements from the iterable.

## Throws

Throws an error if the chunk size is less than or equal to 0.

## Examples

### Chunking an Array

```typescript
import { chunkify } from 'ts-array'

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const chunkSize = 3

for (const chunk of chunkify(array, chunkSize)) {
  console.log(chunk)
}
// Output:
// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]
// [10]
```

### Chunking a String

```typescript
import { chunkify } from 'ts-array'

const string = 'HelloWorld'
const chunkSize = 2

for (const chunk of chunkify(string, chunkSize)) {
  console.log(chunk)
}
// Output:
// ['He', 'll', 'oW', 'or', 'ld']
```

### Chunking with Custom Iterable

```typescript
import { chunkify } from 'ts-array'

function* customIterable() {
  yield* ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
}

const chunkSize = 4

for (const chunk of chunkify(customIterable(), chunkSize)) {
  console.log(chunk)
}
// Output:
// ['a', 'b', 'c', 'd']
// ['e', 'f', 'g', 'h']
// ['i', 'j']
```
