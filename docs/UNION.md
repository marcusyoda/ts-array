# Union Function in ts-array

The union function in the ts-array library merges multiple arrays into a single array, ensuring that all elements are unique. This function is useful in scenarios where you need to aggregate data from various sources while eliminating duplicates.

## Description

The union function takes an indefinite number of arrays as input and combines them into one array containing only unique elements. It effectively removes duplicates and unifies the elements from all the provided arrays.

## Parameters

...arrays: A rest parameter that allows for an indefinite number of arrays to be passed to the function. Each array can contain elements of any type.

## Returns

An array containing unique elements from all the provided arrays. This is achieved by using a Set, which inherently only stores unique values.

## Examples

### Union of Multiple Arrays

```typescript
import { union } from 'ts-array'

const array1 = [1, 2, 3]
const array2 = [2, 3, 4]
const array3 = [4, 5, 6]

const result = union(array1, array2, array3)
console.log(result)
// Output:
// [1, 2, 3, 4, 5, 6]
```

### Union with Overlapping Elements

```typescript
import { union } from 'ts-array'

const array1 = ['apple', 'banana']
const array2 = ['banana', 'cherry']
const array3 = ['apple', 'cherry']

const result = union(array1, array2, array3)
console.log(result)
// Output:
// ['apple', 'banana', 'cherry']
```
