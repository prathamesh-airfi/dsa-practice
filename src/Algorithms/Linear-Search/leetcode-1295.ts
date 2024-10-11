/*
    Q: 1295. Find Numbers with Even Number of Digits

    Description:
        Given an array nums of integers, return how many of them contain an even number of digits.

    Example 1:
        Input: nums = [555,901,482,1771]
        Output: 1 
        Explanation: 
        Only 1771 contains an even number of digits.
*/

function findNumbers(nums: number[]): number {
  let count = 0;
  
  for(let i = 0; i < nums.length; i++) {
    if (countDigits(nums[i]) % 2 === 0) {
        count += 1;
    }
  }
  return count;
};

function countDigits(num: number): number {

    if (num < 0) {
        num *= -1
    }

   /* Logic 1 */
    // let digitCount = 1;
    // while(num >= 10) {
    //     digitCount += 1;
    //     num =  Math.floor(num / 10);
    // }
    // return digitCount;

    /* Logic 2 */
    return Math.floor(Math.log10(num) + 1);
}

const nums = [12,345,2,6,7896, 0];
const op = 2;

console.log(findNumbers(nums));