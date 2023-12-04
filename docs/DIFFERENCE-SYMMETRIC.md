# Difference Symmetric Function in ts-array

The differenceSymmetric function creates an array of unique values that is the symmetric difference of the given arrays.

## Description

This function calculates the symmetric difference between two arrays, returning elements that are unique to each array. It can use an optional comparator function for element comparison. These functions provide a powerful way to compare arrays and determine unique or differing elements, with or without custom comparison logic.

## Parameters

array1: The first array to compare.
array2: The second array to compare against.
comparator (optional): A function to compare elements.

## Returns

An array containing the symmetric difference of the two arrays.

## Example

### Symmetric Difference

```typescript
import { differenceSymmetric } from 'ts-array'

const array1 = [1, 2, 3]
const array2 = [2, 3, 4]
const symDiff = differenceSymmetric(array1, array2)

console.log(symDiff) // Output: [1, 4]
```

### Using a Comparator Function

```typescript
import { differenceSymmetric } from 'ts-array'

const array1 = [{ id: 1 }, { id: 2 }]
const array2 = [{ id: 2 }, { id: 3 }]
const symDiff = differenceSymmetric(array1, array2, (a, b) => a.id === b.id)

console.log(symDiff) // Output: [{ id: 1 }, { id: 3 }]
```
