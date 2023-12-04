# Shuffle Function in ts-array

The shuffle function in the ts-array library provides a mechanism to randomize the order of elements in an array. This function is particularly useful in scenarios like creating randomized datasets, games, and simulations where randomness is a key factor.

## Description

The shuffle function takes an array and returns a new array with its elements shuffled into a random order. The function employs the Fisher-Yates (or Knuth) shuffle algorithm for efficient and unbiased shuffling. To avoid modifying the original array, it first creates a clone of the input array and then performs the shuffling on this cloned array.

## Parameters

array: The array whose elements are to be shuffled. It can contain elements of any type.

## Returns

A new array with the elements of the original array in random order. The original array remains unchanged.

## Examples

### Shuffling an Array

```typescript
import { shuffle } from 'ts-array'

const numbers = [1, 2, 3, 4, 5]
const shuffledNumbers = shuffle(numbers)

console.log(shuffledNumbers)
// Output: (randomized) [3, 1, 5, 2, 4]
```

### Shuffling an Array of Strings

```typescript
import { shuffle } from 'ts-array'

const fruits = ['apple', 'banana', 'cherry', 'date']
const shuffledFruits = shuffle(fruits)

console.log(shuffledFruits)
// Output: (randomized) ['date', 'banana', 'apple', 'cherry']
```
