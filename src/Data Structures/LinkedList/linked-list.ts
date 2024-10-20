export class _Node<T> {
  constructor(private value: T, private next: _Node<T> | null = null) {}

  getValue(): T {
    return this.value;
  }

  setValue(v: T): void {
    this.value = v;
  }

  setNext(next: _Node<T> | null): void {
    this.next = next;
  }

  getNext(): _Node<T> | null {
    return this.next;
  }
}

class LinkedList<T extends string | number> {
  private head: _Node<T> | null = null;
  private tail: _Node<T> | null = null;
  private _size: number = 0;

  /* Time Complexity: O(1) */
  private isEmpty(): boolean {
    return this.head === null && this.tail === null;
  }

  /* Time Complexity: O(n) */
  private getPrevious(node: _Node<T>): _Node<T> | null {
    let current = this.head;
    while (current !== null) {
      if (current.getNext() === node) return current;
      current = current.getNext();
    }
    return null;
  }

  /* Time Complexity: O(n) */
  print(): void {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }

    let current = this.head;
    const result: T[] = [];
    while (current !== null) {
      result.push(current.getValue());
      current = current.getNext();
    }
    console.log(result.join(" -> "));
  }

  /* Time Complexity: O(1) */
  addLast(item: T): void {
    const node = new _Node(item);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.setNext(node);
      this.tail = node;
    }
    this._size++;
  }

  /* Time Complexity: O(1) */
  addFirst(item: T): void {
    const node = new _Node(item);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.setNext(this.head);
      this.head = node;
    }
    this._size++;
  }

  /* Time Complexity: O(n) */
  indexOf(value: T): number {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.getValue() === value) return index;
      current = current.getNext();
      index++;
    }
    return -1;
  }

  /* Time Complexity: O(n) */
  contains(value: T): boolean {
    return this.indexOf(value) !== -1;
  }

  /* Time Complexity: O(1) */
  deleteFirst(): void {
    /* If the list is empty */
    if (this.isEmpty()) throw new Error("No such element");

    /* If the list has only 1 item */
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      /* If the list has more than 1 item */
      const secondNode = this.head!.getNext();
      this.head?.setNext(null);
      this.head = secondNode;
    }
    this._size--;
  }

  /* Time Complexity: O(n) */
  deleteLast(): void {
    /* If the list is empty */
    if (this.isEmpty()) throw new Error("No such element");

    /* If the list has only 1 item */
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      const previousNode = this.getPrevious(this.tail!);
      this.tail = previousNode;
      this.tail?.setNext(null);
    }
    this._size--;
  }

  /* Time Complexity: O(1) */
  size(): number {
    return this._size;
  }

  /* Time Complexity: O(n) */
  toArray(): T[] {
    const result = new Array(this.size());

    let current = this.head;
    let index = 0;

    while (current !== null) {
      result[index++] = current.getValue();
      current = current.getNext();
    }

    return result;
  }

  /* Time Complexity: O(n) */
  reverse(): void {
    let previousNode: _Node<T> | null = null;
    let currentNode: _Node<T> | null = this.head;

    while (currentNode !== null) {
      let nextNode = currentNode.getNext();
      currentNode.setNext(previousNode);
      previousNode = currentNode;
      currentNode = nextNode;
    }

    this.tail = this.head;
    this.head = previousNode;
  }

  /* This method uses two pointer technique to achieve result in 1 pass */
  /* Time Complexity: O(n) */
  getKthFromTheEnd(k: number): T {
    if (this.isEmpty()) throw new Error("List is empty");

    /* Use this when you know the size of linked list */
    if (k > this.size()) throw new Error("Invalid Input value of k");

    let first = this.head;
    let second = this.head;

    /* Traverse the second pointer the (K - 1) distance from the start */
    for (let i = 0; i < k - 1; i++) {
      second = second!.getNext();
      /* Use this when you don't know the size of linked list  */
      if (!second) throw new Error("Invalid Input value of k");
    }

    /* now move both pointers unless second pointer is at the end */
    while (second !== this.tail) {
      first = first?.getNext()!;
      second = second?.getNext()!;
    }

    return first?.getValue()!;
  }

  /* Time Complexity: O(n) */
  printMiddle(): void {
    let first = this.head;
    let second = this.head;

    while (second !== this.tail && second?.getNext() !== this.tail) {
      second = second?.getNext()?.getNext()!;
      first = first?.getNext()!;
    }

    if (second === this.tail) {
      console.log(first?.getValue());
    } else {
      console.log(first?.getValue(), ", ", first?.getNext()?.getValue());
    }
  }

  /* Time Complexity: O(n) */
  hasLoop(): boolean {
    if (this.isEmpty()) throw new Error("List is empty");

    let slow = this.head;
    let fast = this.head;

    while (fast !== null && fast?.getNext() !== null) {
      slow = slow?.getNext()!;
      fast = fast.getNext()?.getNext()!;

      if (slow === fast) return true;
    }

    return false;
  }
}

const linkedList = new LinkedList<number>();
linkedList.addLast(10);
linkedList.addFirst(5);
linkedList.addLast(20);
linkedList.addLast(30);
linkedList.addLast(40);
linkedList.addLast(50);
linkedList.print();
// console.log("Index Of 10 => ", linkedList.indexOf(10), linkedList.contains(10));
// console.log("Index of 5", linkedList.indexOf(5), linkedList.contains(5));
// console.log("Index of 50", linkedList.indexOf(50), linkedList.contains(50));
// console.log("Index of 1", linkedList.indexOf(1), linkedList.contains(1));
// console.log("Index of 60", linkedList.indexOf(60), linkedList.contains(60));
// linkedList.deleteFirst();
// linkedList.deleteFirst();
// linkedList.deleteLast();
// linkedList.deleteLast();
// console.log("\n\n");
// linkedList.print();
// console.log("Size => ", linkedList.size());
// console.log("Arrat => ", linkedList.toArray());
// linkedList.reverse();
// linkedList.print();

// console.log(linkedList.getKthFromTheEnd(-60));
console.log(linkedList.printMiddle());
