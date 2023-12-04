# Equals Function in ts-array

The `equals` function in the `ts-array` library compares two arrays for equality, offering options to ignore the order of elements and to use a custom comparator function for complex comparisons.

## Description

This function checks if two arrays are equal. It can ignore the order of elements if specified, and can use a custom comparator function to determine equality, which is especially useful for arrays of objects or complex data types.

## Parameters

- `a`: The first array to compare.
- `b`: The second array to compare.
- `ignoreOrder`: If true, the order of elements in the arrays is ignored.
- `comparator` (optional): A function to compare elements for equality. If not provided, strict equality (`===`) is used.

## Returns

- A boolean value indicating whether the arrays are equal. Returns `true` if they are equal, `false` otherwise.

## Example

### Comparing Arrays with Order Consideration

```typescript
import { equals } from 'ts-array'

const result = equals([1, 2, 3], [1, 2, 3], false)

console.log(result) // Output: true
```

### Comparing Arrays Ignoring Order

```typescript
import { equals } from 'ts-array'

const result = equals([3, 2, 1], [1, 2, 3], true)

console.log(result) // Output: true
```

### Comparing Arrays of Objects with Custom Comparator

```typescript
import { equals } from 'ts-array'

const comparator = (a, b) => a.id === b.id

const result = equals([{ id: 1 }, { id: 2 }], [{ id: 1 }, { id: 2 }], true, comparator)

console.log(result) // Output: true
```

### Comparing Arrays with Different Lengths

```typescript
import { equals } from 'ts-array'

const result = equals([1, 2, 3], [1, 2], false)

console.log(result) // Output: false
```

### Complex Comparisons with Different Data Types

```typescript
import { equals } from 'ts-array'

const array1 = [1, 'apple', { id: 1 }]
const array2 = [1, 'apple', { id: 1 }]

const result = equals(array1, array2, false)

console.log(result) // Output: false (due to object reference differences)
```
