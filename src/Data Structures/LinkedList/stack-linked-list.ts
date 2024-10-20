import { _Node } from "./linked-list";

class Stack<T> {
  private top: _Node<T> | null;

  constructor() {
    this.top = null;
  }

  isEmpty(): boolean {
    return this.top === null;
  }

  push(item: T): void {
    const node = new _Node<T>(item);
    node.setNext(this.top);
    this.top = node;
  }

  pop(): T | undefined {
    if (this.isEmpty()) throw new Error("Stack Underflow");

    const poppedValue = this.top?.getValue();
    this.top = this.top?.getNext() || null;
    return poppedValue;
  }

  peek(): T | undefined {
    if (this.isEmpty()) throw new Error("Stack Underflow");
    return this.top?.getValue();
  }
}
