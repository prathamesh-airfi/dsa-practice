function iterativeBinarySearch<T>(arr: T[], target: T) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);

        if (arr[mid] > target) end = mid - 1;
        else if (arr[mid] < target) start = mid + 1;
        else return mid;
    }

    return -1;
}

function recursiveBinarySearch<T>(arr: T[], start: number, end: number, target: T) {
    if (start > end) {
        return -1;
    }

    const mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] > target) return recursiveBinarySearch(arr, start, mid - 1, target);
    else if (arr[mid] < target) return recursiveBinarySearch(arr, mid + 1, end, target);
    return mid;
}

function orderIgnosticIterativeBinarySearch<T>(arr: T[], target: T) {
    let start = 0;
    let end = arr.length - 1;
    const isAscending = arr[start] < arr[end];

    while (start <= end) {
        const mid = Math.floor(start + (end - start) / 2);

        if (arr[mid] > target) {
            isAscending ? end = mid - 1 : start = mid + 1;
        } else if (arr[mid] < target) {
            isAscending ? start = mid + 1 : end = mid - 1;
        }
        else {
            return mid;
        }
    }

    return -1;
}

function orderIgnosticRecursiveBinarySearch<T>(arr: T[], start: number, end: number, target: T) {
    if (start > end) {
        return -1;
    }

    const isAscending = arr[start] < arr[end];
    const mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) {
        isAscending ? end = mid - 1 : start = mid + 1;
        return orderIgnosticRecursiveBinarySearch(arr, start, end, target);
    } else {
        isAscending ? start = mid + 1 : end = mid - 1;
        return orderIgnosticRecursiveBinarySearch(arr, start, end, target);
    }
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 1;

const arrIndex = iterativeBinarySearch(arr, target);
const arrIndex2 = recursiveBinarySearch(arr, 0, arr.length - 1, target);
const arrIndex3 = orderIgnosticIterativeBinarySearch(arr, target);
const arrIndex4 = orderIgnosticRecursiveBinarySearch(arr, 0, arr.length - 1, target);

console.log(`Iterative Demo Element ${target} found at ${arrIndex} location.`);
console.log(`Recursive Demo Element ${target} found at ${arrIndex2} location.`);
console.log(`Order Ignostic Iterative Demo Element ${target} found at ${arrIndex2} location.`);
console.log(`Order Ignostic Recursive Demo Element ${target} found at ${arrIndex2} location.`);