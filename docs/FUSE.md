# Fuse Function in ts-array

The fuse function in the ts-array library is designed to combine multiple arrays into a single array of arrays, aligning elements based on their index. It's especially useful for parallel data processing or situations where data from multiple arrays needs to be aggregated or aligned.

## Description

The fuse function takes multiple arrays as input and creates a new array, where each element is an array composed of elements from the input arrays at the same index. If the input arrays are of different lengths, the function fills the missing values with undefined, ensuring that each inner array has the same length.

## Parameters

...arr: A rest parameter that accepts an indefinite number of arrays. Each array can contain elements of any type, and they do not need to be the same length.

## Returns

An array of arrays, where each inner array contains elements from the same index of each input array. If an input array does not have an element at a particular index, that position is filled with undefined.

## Examples

### Combining Arrays of Equal Length

```typescript
import { fuse } from 'ts-array'

const result = fuse(['a', 'b', 'c'], [1, 2, 3])
console.log(result)
// Output:
// [['a', 1], ['b', 2], ['c', 3]]
```

### Combining Arrays of Different Lengths

```typescript
import { fuse } from 'ts-array'

const result = fuse(['a', 'b'], [1, 2, 3])
console.log(result)
// Output:
// [['a', 1], ['b', 2], [undefined, 3]]
```
