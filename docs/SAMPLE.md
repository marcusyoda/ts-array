# Sample Function in ts-array

The sample function in the ts-array library is designed to randomly select an element from an array. This function is useful in situations where you need to randomly pick a value from a set of options, such as in simulations, games, or data analysis.

## Description

The sample function takes an array as input and returns a random element from that array. If the array is empty, the function returns undefined. This function ensures that each element in the array has an equal chance of being selected.

## Parameters

array: The array from which a random element will be selected. It can contain elements of any type.

## Returns

A randomly selected element from the given array. If the array is empty, the function returns undefined.

## Examples

### Sampling a Random Element

```typescript
import { sample } from 'ts-array'

const colors = ['red', 'blue', 'green', 'yellow']
const randomColor = sample(colors)

console.log(randomColor)
// Output: (randomly) 'green'
```

### Handling an Empty Array

```typescript
import { sample } from 'ts-array'

const emptyArray = []
const result = sample(emptyArray)

console.log(result)
// Output:
// undefined
```
