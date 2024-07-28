# Binary Search

## Introduction

Binary Search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing the search interval in half. If the value of the search key is less than the item in the middle of the interval, narrow the interval to the lower half. Otherwise, narrow it to the upper half. Repeatedly check until the value is found or the interval is empty.

Order Agnostic Binary Search is a variation of Binary Search that works on both ascending and descending sorted arrays.

## Features

- Efficient search algorithm with O(log n) time complexity.
- Works on sorted arrays or lists.
- Can be implemented both iteratively and recursively.
- Order Agnostic Binary Search handles both ascending and descending sorted arrays.

## Pseudo Code

### Iterative Approach

```pseudo
function binarySearch(arr, target):
    low = 0
    high = length(arr) - 1

    while low <= high:
        mid = low + (high - low) / 2
        if arr[mid] == target:
            return mid
        else if arr[mid] < target:
            low = mid + 1
        else:
            high = mid - 1

    return -1
```

### Recursive Approach

```pseudo
function binarySearch(arr, low, high, target):
    if low > high:
        return -1

    mid = low + (high - low) / 2
    if arr[mid] == target:
        return mid
    else if arr[mid] < target:
        return binarySearch(arr, mid + 1, high, target)
    else:
        return binarySearch(arr, low, mid - 1, target)
```

### Order Agnostic Binary Search

```pseudo
function orderAgnosticBinarySearch(arr, target):
    low = 0
    high = length(arr) - 1
    isAscending = arr[low] < arr[high]

    while low <= high:
        mid = low + (high - low) / 2
        if arr[mid] == target:
            return mid

        if isAscending:
            if arr[mid] < target:
                low = mid + 1
            else:
                high = mid - 1
        else:
            if arr[mid] > target:
                low = mid + 1
            else:
                high = mid - 1

    return -1
```

## Algorithm

### Iterative Approach

1. Initialize `low` to 0 and `high` to `length of array - 1`.
2. While `low` is less than or equal to `high`:
   - Calculate `mid` as `low + (high - low) / 2`.
   - If `arr[mid]` is equal to `target`, return `mid`.
   - If `arr[mid]` is less than `target`, set `low` to `mid + 1`.
   - If `arr[mid]` is greater than `target`, set `high` to `mid - 1`.
3. If the target is not found, return -1.

### Recursive Approach

1. If `low` is greater than `high`, return -1.
2. Calculate `mid` as `low + (high - low) / 2`.
3. If `arr[mid]` is equal to `target`, return `mid`.
4. If `arr[mid]` is less than `target`, recursively call `binarySearch` with `mid + 1` and `high`.
5. If `arr[mid]` is greater than `target`, recursively call `binarySearch` with `low` and `mid - 1`.

### Order Agnostic Binary Search

1. Initialize `low` to 0 and `high` to `length of array - 1`.
2. Determine if the array is sorted in ascending or descending order by comparing the first and last elements.
3. While `low` is less than or equal to `high`:
   - Calculate `mid` as `low + (high - low) / 2`.
   - If `arr[mid]` is equal to `target`, return `mid`.
   - If the array is sorted in ascending order:
     - If `arr[mid]` is less than `target`, set `low` to `mid + 1`.
     - If `arr[mid]` is greater than `target`, set `high` to `mid - 1`.
   - If the array is sorted in descending order:
     - If `arr[mid]` is greater than `target`, set `low` to `mid + 1`.
     - If `arr[mid]` is less than `target`, set `high` to `mid - 1`.
4. If the target is not found, return -1.

## Implementation

### File: `binarySearch.ts`

```typescript
export function binarySearchIterative(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1;
}

export function binarySearchRecursive(arr: number[], low: number, high: number, target: number): number {
    if (low > high) {
        return -1;
    }

    const mid = Math.floor(low + (high - low) / 2);

    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearchRecursive(arr, mid + 1, high, target);
    } else {
        return binarySearchRecursive(arr, low, mid - 1, target);
    }
}

export function orderAgnosticBinarySearch(arr: number[], target: number): number {
    let low = 0;
    let high = arr.length - 1;
    const isAscending = arr[low] < arr[high];

    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        if (isAscending) {
            if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        } else {
            if (arr[mid] > target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }

    return -1;
}
```

### Explanation

- **Iterative Approach**: 
  - The `binarySearchIterative` function repeatedly divides the array in half until the target is found or the search space is exhausted.
  
- **Recursive Approach**:
  - The `binarySearchRecursive` function calls itself with updated search boundaries until the target is found or the search space is exhausted.
  
- **Order Agnostic Binary Search**:
  - The `orderAgnosticBinarySearch` function first determines if the array is sorted in ascending or descending order and then performs the binary search accordingly.

## Complexity

- **Time Complexity**: O(log n) - The time complexity is logarithmic because the search space is halved with each step.
- **Space Complexity**: 
  - Iterative: O(1) - Uses constant space.
  - Recursive: O(log n) - Uses space proportional to the depth of the recursion tree.
  - Order Agnostic: O(1) - Uses constant space.

---
