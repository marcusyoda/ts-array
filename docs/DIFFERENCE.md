# Difference Function in ts-array

The `difference` function in the `ts-array` library finds the difference between two arrays. It can optionally use a comparator function for comparing elements.

## Description

This function compares two arrays and returns a new array containing elements that are present in the first array but not in the second. It's useful for finding unique elements in one array compared to another.

## Parameters

- `array1`: The first array to compare.
- `array2`: The second array to compare against.
- `comparator` (optional): A function to compare elements, determining equality.

## Returns

- An array containing elements that are in the first array but not in the second.

## Example

### Basic Difference

```typescript
import { difference } from 'ts-array'

const array1 = [1, 2, 3]
const array2 = [2, 3, 4]
const diff = difference(array1, array2)

console.log(diff) // Output: [1]
```

### Using a Comparator Function

```typescript
import { difference } from 'ts-array'

const array1 = [{ id: 1 }, { id: 2 }, { id: 3 }]
const array2 = [{ id: 2 }, { id: 4 }]
const diff = difference(array1, array2, (a, b) => a.id === b.id)

console.log(diff) // Output: [{ id: 1 }, { id: 3 }]
```
