function searchInRange(arr: number[], startIndex: number, endIndex: number, target: number) {
    if (!arr.length) {
        return -1;
    }

    if (startIndex > endIndex || endIndex >= arr.length) {
        return -1;
    }

    for (let i = startIndex; i <= endIndex; i++) {
        if (arr[i] === target) {
            return i
        }
    }

    return -1;
}

const foundIndex = searchInRange([1, 2, 3, 4, 5, 10, 20, 30, 40], 5, 4, 3);

if (foundIndex !== -1) {
    console.log(`Element found at ${foundIndex} location`);
} else {
    console.log(`Element didn't found`);
}