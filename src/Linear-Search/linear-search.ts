function linearSearch(arr: number[], target: number) {
    if (arr.length === 0) {
        return -1;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }

    return -1;
}

const index = linearSearch([1, 2, 3, 4, 5], 30);

if (index !== -1) {
    console.log(`Element found at ${index} location`);
} else {
    console.log(`Element didn't found`);
}