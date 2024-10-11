function findMin(arr: number[]) {
    let min = arr[0];

    arr.forEach(elem => {
        if (elem < min) {
            min = elem;
        }
    });

    return min;
}

console.log(`Min number is: ${findMin([10, 20, 30, 40, 3])}`)