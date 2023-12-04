# RemoveDuplicateObjects Function in ts-array

The removeDuplicateObjects function in the ts-array library is designed to eliminate duplicate objects from an array based on a specified property, ensuring that each object is unique with respect to that property.

## Description

This function takes an array of objects and a property identifier as input. It removes duplicates by using the specified property to identify unique objects. This is particularly useful when dealing with arrays of objects where uniqueness should be maintained based on a specific attribute or property.

## Parameters

arr: The array of objects from which to remove duplicates. It should be an array containing objects of any type.
identifier: The property of the objects used to identify duplicates. This property is used to determine the uniqueness of each object in the array.

## Returns

An array containing only unique objects. Uniqueness is determined based on the identifier property of the objects.

## Throws

Throws an error if the input is not an array.

## Examples

### Removing Duplicate Objects Based on a Property

```typescript
import { removeDuplicateObjects } from 'ts-array'

const objectsArray = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice' },
]

const result = removeDuplicateObjects(objectsArray, 'id')
console.log(result)
// Output:
// [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
```

### Handling Non-Array Input

```typescript
import { removeDuplicateObjects } from 'ts-array'

try {
  const result = removeDuplicateObjects('not an array', 'id')
  console.log(result)
} catch (error) {
  console.error(error.message)
}
// Output:
// 'Input must be array'
```
