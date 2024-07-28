```markdown
# Linear Search in TypeScript

## Introduction

Linear Search, also known as Sequential Search, is a simple searching algorithm that checks every element in a list until the desired element is found or the list ends. This algorithm is straightforward and works well for small or unsorted lists.

## Features

- Simple and easy-to-understand implementation
- Works on both unsorted and sorted lists
- Can handle any data type that supports equality comparison

## Pseudo Code

```pseudo
function linearSearch(array, target):
    for each element in array:
        if element == target:
            return index of element
    return -1
```

## Algorithm

```algorithm
1. Start at the first element of the array.
2. Compare the current element with the target element.
3. If the current element matches the target element, return the index of the current element.
4. If the current element does not match the target element, move to the next element.
5. Repeat steps 2-4 until the target element is found or the end of the array is reached.
6. If the end of the array is reached without finding the target element, return -1.
```

## Implementation

Create a file named `linearSearch.ts` and add the following code:

```typescript
function linearSearch<T>(arr: T[], target: T): number {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}

// Example usage
const numbers = [1, 3, 5, 7, 9];
const targetNumber = 5;
const index = linearSearch(numbers, targetNumber);
console.log(`Index of ${targetNumber}: ${index}`); // Output: Index of 5: 2

const words = ["apple", "banana", "cherry"];
const targetWord = "banana";
const wordIndex = linearSearch(words, targetWord);
console.log(`Index of ${targetWord}: ${wordIndex}`); // Output: Index of banana: 1
```

### Explanation

The `linearSearch` function takes an array `arr` and a `target` value as its parameters. It iterates through the array, comparing each element with the target value. If a match is found, it returns the index of the element. If no match is found by the end of the loop, it returns `-1`.

## Complexity

- **Time Complexity**: O(n), where n is the number of elements in the list.
- **Space Complexity**: O(1), as no additional space is required beyond the input data.
```
