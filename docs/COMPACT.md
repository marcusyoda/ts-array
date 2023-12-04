# Compact Function in ts-array

The `compact` function in the `ts-array` library is designed to remove all falsy values from an array. Falsy values in JavaScript include `false`, `null`, `0`, `""` (empty string), `undefined`, and `NaN`.

## Description

This function filters out all falsy values from an array, returning a new array that contains only truthy values.

## Parameters

- `arr`: The array to be compacted.

## Returns

- A new array with all falsy values removed.

## Example

### Removing Basic Falsy Values

```typescript
import { compact } from 'ts-array'

const compacted = compact([0, 1, false, 2, '', 3])

console.log(compacted) // Output: [1, 2, 3]
```

### Handling Mixed Data Types

```typescript
import { compact } from 'ts-array'

const compacted = compact(['apple', null, 'banana', undefined])

console.log(compacted) // Output: ['apple', 'banana']
```

### Arrays with NaN and Boolean Values

```typescript
import { compact } from 'ts-array'

const compacted = compact([NaN, true, false, 'orange'])

console.log(compacted) // Output: [true, 'orange']
```

### Compacting Arrays of Objects

```typescript
import { compact } from 'ts-array'

const compacted = compact([{}, null, { name: 'Alice' }])

console.log(compacted) // Output: [{}, { name: 'Alice' }]
```

### Nested Arrays

```typescript
import { compact } from 'ts-array'

const compacted = compact([1, 2, [false, 3]])

console.log(compacted) // Output: [1, 2, [false, 3]]
```
