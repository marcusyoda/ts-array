# Defuse Function in ts-array

The `defuse` function in the `ts-array` library separates an array of arrays (a 'zipped' structure) into individual arrays based on their positions. It's particularly useful for unpacking data that has been combined or 'zipped' together.

## Description

This function takes an array of arrays, where each inner array represents a set of elements that have been 'zipped' together, and separates them into distinct arrays based on their original positions.

## Parameters

- `arr`: An array of arrays. Each inner array is a 'zipped' set of elements.

## Returns

- An array of arrays. Each inner array contains elements from a specific position in the original 'zipped' arrays.

## Example

### Defuse a Simple Pair

```typescript
import { defuse } from 'ts-array'

const zippedArray = [
  [1, 'a'],
  [2, 'b'],
  [3, 'c'],
]

const unzippedArray = defuse(zippedArray)

console.log(unzippedArray) // Output: [[1, 2, 3], ['a', 'b', 'c']]
```

### Unzipping Arrays with Different Lengths

```typescript
import { defuse } from 'ts-array'

const unevenZippedArray = [[1, 'a'], [2, 'b', true], [3]]
const unevenUnzippedArray = defuse(unevenZippedArray)

console.log(unevenUnzippedArray) // Output: [[1, 2, 3], ['a', 'b', undefined], [undefined, true, undefined]]
```

### Unzipping Arrays Containing Objects

```typescript
import { defuse } from 'ts-array'

const objectZippedArray = [
  [{ id: 1 }, { name: 'Alice' }],
  [{ id: 2 }, { name: 'Bob' }],
]

const objectUnzippedArray = defuse(objectZippedArray)

console.log(objectUnzippedArray) // Output: [[{ id: 1 }, { id: 2 }], [{ name: 'Alice' }, { name: 'Bob' }]]
```
