# RemoveDuplicates Function in ts-array

The removeDuplicates function in the ts-array library is a straightforward tool for eliminating duplicate primitive values from an array. This function is essential for cleaning data sets, ensuring uniqueness of elements, and simplifying data processing tasks.

## Description

The removeDuplicates function takes an array containing primitive values (such as string, number, boolean, null, or undefined) and returns a new array with all duplicate values removed. It achieves this by utilizing a Set, a built-in JavaScript object that stores unique values.

## Parameters

arr: The array from which duplicates are to be removed. This array can contain primitive values like strings, numbers, booleans, as well as null and undefined.

## Returns

An array containing only unique values from the original array. This ensures that each value in the array appears only once.

## Throws

Throws an error if the input is not an array.

## Examples

### Removing Duplicates from an Array

```typescript
import { removeDuplicates } from 'ts-array'

const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5, null, null, undefined]
const uniqueArray = removeDuplicates(arrayWithDuplicates)

console.log(uniqueArray)
// Output:
// [1, 2, 3, 4, 5, null, undefined]
```

### Handling Non-Array Input

```typescript
import { removeDuplicates } from 'ts-array'

try {
  const result = removeDuplicates('not an array')
  console.log(result)
} catch (error) {
  console.error(error.message)
}
// Output:
// 'Input must be array'
```
