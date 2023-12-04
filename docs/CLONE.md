# Clone Function in ts-array

The `clone` function in the `ts-array` library creates a deep clone of an array, supporting a wide range of data types including nested arrays, dates, maps, sets, and objects. This function is particularly useful when working with complex data structures where immutability is important or when you need to work with a copy of the data without affecting the original

## Description

This function takes an array and returns a new array that is a deep copy of the original. It ensures that nested structures are cloned properly, preserving the structure and data of the original array.

## Parameters

- `arr`: The array to be cloned. This can be an array of any type, including nested arrays and arrays containing complex objects.

## Returns

- A deep clone of the original array. Each element is cloned based on its type:
  - Nested arrays are recursively cloned.
  - Date objects are cloned with the same time value.
  - Map objects are cloned with keys and values (values are deep cloned if they are arrays).
  - Set objects are cloned with values (values are deep cloned if they are arrays).
  - Object literals are cloned with all enumerable properties (property values are deep cloned if they are arrays).
  - Other types are copied as is.

## Example

### Cloning Nested Arrays

```typescript
import { clone } from 'ts-array'

const nestedArray = [1, [2, 3], [4, [5, 6]]]
const clonedNestedArray = clone(nestedArray)

console.log(clonedNestedArray) // Output: [1, [2, 3], [4, [5, 6]]]
```

### Cloning Arrays with Objects

```typescript
import { clone } from 'ts-array'

const arrayWithObjects = [{ name: 'Alice' }, { name: 'Bob' }]
const clonedArrayWithObjects = clone(arrayWithObjects)

console.log(clonedArrayWithObjects) // Output: [{ name: 'Alice' }, { name: 'Bob' }]
```

### Cloning Arrays with Dates

```typescript
import { clone } from 'ts-array'

const arrayWithDate = [new Date(2020, 0, 1), new Date(2021, 0, 1)]
const clonedArrayWithDate = clone(arrayWithDate)

console.log(clonedArrayWithDate) // Output: [Date 2020-01-01, Date 2021-01-01]
```

### Cloning Arrays with Maps and Sets

```typescript
import { clone } from 'ts-array'

const arrayWithMapSet = [new Map([['key', 'value']]), new Set([1, 2, 3])]
const clonedArrayWithMapSet = clone(arrayWithMapSet)

console.log(clonedArrayWithMapSet) // Output: [Map { 'key' => 'value' }, Set { 1, 2, 3 }]
```
