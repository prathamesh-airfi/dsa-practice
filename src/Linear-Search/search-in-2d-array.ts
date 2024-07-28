function searchIn2DArray(arr: number[][], target: number) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[j].length; j++) {
            if (arr[i][j] === target) {
                return target;
            }
        }
    }

    return null;
}

const elementFound = searchIn2DArray([[3], [6], [7], [5]], 50)

console.log(elementFound)