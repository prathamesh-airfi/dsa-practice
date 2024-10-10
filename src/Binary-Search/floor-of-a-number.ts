/*
    Smallest element in array lesser than or equal to target

    let arr = [2, 3, 5, 9, 14, 16, 18]

    floor(arr, target = 14) = 14
    floor(arr, target = 12) = 9
*/

function getFloorValue(arr: number[], target: number) {
  let start = 0;
  let end = arr.length - 1;

  if (target < arr[start]) return -1;
  if (target > arr[end]) return arr[end];

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    const midItem = arr[mid];

    if (target === midItem) return target;
    else if (target > midItem) start = mid + 1;
    else end = mid - 1;
  }

  return arr[end];
}

const arrQ2 = [0, 2, 4, 6, 19, 25, 39, 41];
let targetQ2 = 5;
let ansQ2 = getFloorValue(arrQ2, targetQ2);

console.log(`Floor value for ${targetQ2} is ${ansQ2}`);

targetQ2 = 38;
ansQ2 = getFloorValue(arrQ2, targetQ2);
console.log(`Floor value for ${targetQ2} is ${ansQ2}`);

targetQ2 = -1;
ansQ2 = getFloorValue(arrQ2, targetQ2);
console.log(`Floor value for ${targetQ2} is ${ansQ2}`);

targetQ2 = 42;
ansQ2 = getFloorValue(arrQ2, targetQ2);
console.log(`Floor value for ${targetQ2} is ${ansQ2}`);
