/*
    Q: 744. Find Smallest Letter Greater Than Target

    Description: 
        You are given an array of characters letters that is sorted in non-decreasing order, 
        and a character target. There are at least two different characters in letters.
        Return the smallest character in letters that is lexicographically greater than target. 
        If such a character does not exist, return the first character in letters.

    Example 1:
        Input: letters = ["c","f","j"], target = "a"
        Output: "c"
        Explanation: The smallest character that is lexicographically greater than 'a' in letters is 'c'.

    Example 2:
        Input: letters = ["c","f","j"], target = "c"
        Output: "f"
        Explanation: The smallest character that is lexicographically greater than 'c' in letters is 'f'.

    Example 3:
        Input: letters = ["x","x","y","y"], target = "z"
        Output: "x"
        Explanation: There are no characters in letters that is lexicographically greater than 'z' so we return letters[0].
*/

function nextGreatestLetter(letters: string[], target: string): string {
  let start = 0;
  let end = letters.length - 1;

  return ''
}

let letters = [""];
let targetChar = "";
let result;

letters = ["c","f","j"]
targetChar = "a";
result = nextGreatestLetter(letters, targetChar);
console.log(`Next Greatest Letter for ${targetChar} is ${result}`);

letters = ["c","f","j"]
targetChar = "c";
result = nextGreatestLetter(letters, targetChar);

console.log(`Next Greatest Letter for ${targetChar} is ${result}`);
letters = ["x","x","y","y"]
targetChar = "z";
result = nextGreatestLetter(letters, targetChar);

console.log(`Next Greatest Letter for ${targetChar} is ${result}`);
letters = ["c","f","j"]
targetChar = "";
result = nextGreatestLetter(letters, targetChar);

console.log(`Next Greatest Letter for ${targetChar} is ${result}`);
letters = ["c","f","j"]
targetChar = "";
result = nextGreatestLetter(letters, targetChar);
console.log(`Next Greatest Letter for ${targetChar} is ${result}`);
