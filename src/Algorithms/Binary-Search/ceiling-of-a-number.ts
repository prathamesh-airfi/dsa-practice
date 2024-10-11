/*
    Smallest element in array greater than or equal to target

    let arr = [2, 3, 5, 9, 14, 16, 18]

    ceiling(arr, target = 14) = 14
    ceiling(arr, target = 12) = 9
*/

function getCeilingValue(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;

  if (target > arr[end]) return -1;
  if (target < arr[start]) return arr[start];

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    const midItem = arr[mid];

    if (midItem === target) return target;
    else if (target < midItem) end = mid - 1;
    else start = mid + 1;
  }

  return arr[start];
}

const arrQ1 = [0, 2, 4, 6, 19, 25, 39, 41];
const targetQ1 = 40;
const ansQ1 = getCeilingValue(arrQ1, targetQ1);

console.log(`Ceiling value for ${targetQ1} is ${ansQ1}`);
