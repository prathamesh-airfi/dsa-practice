function findMinIn2dArray(arr: number[][]) {
    let min = arr[0][0];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[j].length; j++) {
            if (arr[i][j] < min) {
                min = arr[i][j];
            }
        }
    }

    return min;
}


console.log(findMinIn2dArray([[3], [6], [7], [5]]))