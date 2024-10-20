import { Stack } from "./stack";

function isBalancedExpression(inputStr: string): boolean {
  const stack = new Stack<string>(inputStr.length);

  for (const char of inputStr) {
    if (char === "(" || char === "[" || char === "<" || char === "{") {
      stack.push(char);
    }

    if (char === ")" || char === "]" || char === ">" || char === "}") {
      if (stack.isEmpty()) return false;
      stack.pop();
    }
  }

  return stack.isEmpty();
}
