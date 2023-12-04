# toKeyedArray Function in ts-array

The toKeyedArray function in the ts-array library converts a standard JavaScript object (record) into a proxy object that allows array-like operations. This function is particularly useful when you need to perform operations traditionally reserved for arrays (like map, reduce, forEach, filter) on object properties.

## Description

The toKeyedArray function takes an object as input and returns a proxy object. This proxy object mimics the behavior of an array, providing additional methods for object manipulation. It's designed to work with objects where the values are of a consistent type.

## Parameters

obj: The object to be converted into a proxy with array-like methods. It should be a record where keys are strings and values are of any consistent type.
Returns
A proxy object that enables array-like operations on the provided object. This includes methods like map, reduce, forEach, filter, slice, find, findKey, includes, keyOf, and lastKeyOf.

## Examples

### Using Map on an Object

```typescript
import { toKeyedArray } from 'ts-array'

const obj = { a: 1, b: 2 }
const keyedArray = toKeyedArray(obj)
const result = keyedArray.map((value, key) => value * 2)

console.log(result)
// Output:
// [2, 4]
```

### Using Filter on an Object

```typescript
import { toKeyedArray } from 'ts-array'

const obj = { a: 1, b: 2, c: 3 }
const keyedArray = toKeyedArray(obj)
const filtered = keyedArray.filter(value => value > 1)

console.log(filtered)
// Output:
// { b: 2, c: 3 }
```

### Using Reduce on an Object

```typescript
import { toKeyedArray } from 'ts-array'

const obj = { a: 1, b: 2, c: 3 }
const keyedArray = toKeyedArray(obj)
const sum = keyedArray.reduce((acc, value) => acc + value, 0)

console.log(sum)
// Output:
// 6
```

### Using ForEach on an Object

```typescript
import { toKeyedArray } from 'ts-array'

const obj = { a: 'first', b: 'second', c: 'third' }
const keyedArray = toKeyedArray(obj)
keyedArray.forEach((value, key) => console.log(key, value))
// Output:
// a first
// b second
// c third
```

### Using Slice on an Object

```typescript
import { toKeyedArray } from 'ts-array'

const obj = { a: 1, b: 2, c: 3, d: 4 }
const keyedArray = toKeyedArray(obj)
const sliced = keyedArray.slice(1, 3)

console.log(sliced)
// Output:
// [2, 3]
```

### Finding an Element

```typescript
import { toKeyedArray } from 'ts-array'

const obj = { a: 10, b: 20, c: 30 }
const keyedArray = toKeyedArray(obj)
const found = keyedArray.find(value => value === 20)

console.log(found)
// Output:
// 20
```

### Finding a Key

```typescript
import { toKeyedArray } from 'ts-array'

const obj = { a: 'apple', b: 'banana', c: 'cherry' }
const keyedArray = toKeyedArray(obj)
const foundKey = keyedArray.findKey(value => value === 'banana')

console.log(foundKey)
// Output:
// b
```

### Checking if a Value is Included

```typescript
import { toKeyedArray } from 'ts-array'

const obj = { a: 'red', b: 'green', c: 'blue' }
const keyedArray = toKeyedArray(obj)
const hasGreen = keyedArray.includes('green')

console.log(hasGreen)
// Output:
// true
```

### Finding a Key of a Specific Value

```typescript
import { toKeyedArray } from 'ts-array'

const obj = { a: 'cat', b: 'dog', c: 'bird' }
const keyedArray = toKeyedArray(obj)
const keyOfDog = keyedArray.keyOf('dog')

console.log(keyOfDog)
// Output:
// b
```

### Finding the Last Key of a Specific Value

```typescript
import { toKeyedArray } from 'ts-array'

const obj = { a: 'circle', b: 'square', c: 'circle' }
const keyedArray = toKeyedArray(obj)
const lastKeyOfCircle = keyedArray.lastKeyOf('circle')

console.log(lastKeyOfCircle)
// Output:
// c
```
