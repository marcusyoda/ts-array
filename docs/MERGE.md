# Merge Function in ts-array

The `merge` function in the `ts-array` library combines two arrays into a single array without duplicates, optionally using a custom comparator for complex data types.

## Description

This function merges two arrays, ensuring that each element is unique in the resulting array. It's ideal for combining lists while preserving uniqueness. An optional comparator function can be used for complex data types like objects.

## Parameters

- `array1`: The first array to merge.
- `array2`: The second array to merge.
- `comparator` (optional): A function to compare elements for uniqueness, particularly useful for arrays of objects.

## Returns

- A merged array containing unique elements from both input arrays.

## Example

### Merging Simple Arrays

```typescript
import { merge } from 'ts-array'

const array1 = [1, 2, 3]
const array2 = [3, 4, 5]

console.log(merge(array1, array2)) // Output: [1, 2, 3, 4, 5]
```

### Merging with Duplicates

```typescript
import { merge } from 'ts-array'

const array1 = [1, 2, 3]
const array2 = [2, 3, 4]

console.log(merge(array1, array2)) // Output: [1, 2, 3, 4]
```

### Merging Arrays of Objects with Custom Comparator

```typescript
import { merge } from 'ts-array'

const array1 = [{ id: 1, name: 'Alice' }]
const array2 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
]
const comparator = (a, b) => a.id === b.id

console.log(merge(array1, array2, comparator)) // Output: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
```

### Merging Mixed Data Types

```typescript
import { merge } from 'ts-array'

const array1 = [1, 'apple']
const array2 = ['banana', 1]

console.log(merge(array1, array2)) // Output: [1, 'apple', 'banana']
```

### Merging Arrays with Complex Elements like Sets and Maps

```typescript
import { merge } from 'ts-array'

const set1 = new Set([1, 2])
const set2 = new Set([2, 3])

const map1 = new Map([['key1', 'value1']])
const map2 = new Map([['key2', 'value2']])

console.log(merge([set1, map1], [set2, map2])) // Output: [Set { 1, 2 }, Map { 'key1' => 'value1' }, Set { 2, 3 }, Map { 'key2' => 'value2' }]
```
