export class Stack<T> {
  private arr: T[];
  private top = -1;

  constructor(capacity: number) {
    this.arr = new Array(capacity);
  }

  isFull() {
    return this.top === this.arr.length - 1;
  }

  isEmpty() {
    return this.top === -1;
  }

  push(item: T) {
    if (this.isFull()) throw new Error("Stack overflow!");
    this.arr[++this.top] = item;
  }

  pop(): T {
    if (this.isEmpty()) throw new Error("Stack Underflow");
    return this.arr[this.top--];
  }

  peek(): T {
    if (this.isEmpty()) throw new Error("Stack Underflow");
    return this.arr[this.top];
  }
}
