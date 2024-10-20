import { Stack } from "./stack";

function reverseString(inputStr: string): string {
  let reversedStr = "";
  let stack = new Stack<string>(inputStr.length);

  for (const char of inputStr) stack.push(char);

  while (!stack.isEmpty()) reversedStr += stack.pop();

  return reversedStr;
}

let inputStr = "Nayan";
console.log(reverseString(inputStr));
