# Intersection Function in ts-array

The intersection function in the ts-array library is designed to find the common elements across multiple arrays. It is particularly useful in scenarios where you need to identify shared data points or common features among different datasets.

## Description

The intersection function takes an indefinite number of arrays as input and returns a new array containing only the elements that are present in all of these arrays. This operation is akin to the mathematical concept of intersection in set theory, where the focus is on identifying shared elements.

## Parameters

...arr: A rest parameter that accepts an indefinite number of arrays. Each array can contain elements of any type. The function will identify common elements across all these arrays.

## Returns

An array containing the elements that are common to all provided arrays. If an element is present in every array, it will be included in the return array.

## Examples

### Finding Common Elements in Arrays

```typescript
import { intersection } from 'ts-array'

const array1 = [1, 2, 3, 4]
const array2 = [2, 4, 6, 8]
const array3 = [4, 2, 9, 10]

const result = intersection(array1, array2, array3)
console.log(result)
// Output:
// [2, 4]
```

### Intersection with Non-Overlapping Arrays

```typescript
import { intersection } from 'ts-array'

const array1 = [1, 3, 5]
const array2 = [2, 4, 6]

const result = intersection(array1, array2)
console.log(result)
// Output:
// []
```
