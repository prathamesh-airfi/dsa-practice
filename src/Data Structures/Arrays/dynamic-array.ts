class DynamicArray {
  private counter: number = 0;
  private arr: number[];

  constructor(size: number) {
    this.arr = new Array(size);
  }

  private incrSize() {
    const _copy = new Array(this.arr.length * 2);
    for (let i = 0; i < this.arr.length; i++) {
      _copy[i] = this.arr[i];
    }
    this.arr = _copy;
  }

  insert(item: number) {
    if (this.arr.length === this.counter) this.incrSize();
    this.arr[this.counter++] = item;
  }

  insertAt(item: number, index: number) {
    if (this.arr.length === this.counter) this.incrSize();

    for (let i = this.arr.length; i >= index; i--) {
      this.arr[i] = this.arr[i - 1];
    }

    this.arr[index] = item;
    this.counter++;
  }

  removeAt(index: number) {
    if (index < 0 || index >= this.counter) {
      throw new Error("Array index out of bound");
    }

    for (let i = index; i < this.counter - 1; i++) {
      this.arr[i] = this.arr[i + 1];
    }

    this.counter--;
  }

  print() {
    let str = "";
    for (let i = 0; i < this.counter; i++) {
      str += `${this.arr[i]} `;
    }
    console.log(str);
  }

  indexOf(item: number) {
    for (let i = 0; i < this.counter; i++) {
      if (item === this.arr[i]) return i;
    }
    return -1;
  }

  max() {
    let max = this.arr[0];
    for (let i = 1; i < this.counter; i++) {
      if (this.arr[i] > max) {
        max = this.arr[i];
      }
    }
    return max;
  }

  reverse() {
    const _copy = [];
    for (let i = this.counter - 1; i >= 0; i--) {
      _copy[this.counter - (i + 1)] = this.arr[i];
    }
    this.arr = _copy;
  }

  intersect(newArr: number[]) {
    let result = new Set<number>();
    for (let i = 0; i < newArr.length; i++) {
      if (this.indexOf(newArr[i]) >= 0) {
        result.add(newArr[i]);
      }
    }
    return Array.from(result.values());
  }
}

let dArr = new DynamicArray(3);
dArr.insert(10);
dArr.insert(20);
dArr.insert(30);
dArr.insert(40);
dArr.insert(50);
dArr.insert(60);
dArr.insert(70);
dArr.insertAt(350, 3);
dArr.print();
console.log("MAX Element", dArr.max());
dArr.reverse();
console.log("Reverse ==> ");
dArr.print();
console.log(dArr.intersect([1, 2, 5, 70, 30]));
dArr.removeAt(2);
dArr.print();
dArr.removeAt(2);
dArr.print();
dArr.removeAt(2);
dArr.print();
dArr.removeAt(0);
dArr.print();
console.log(dArr.indexOf(10));
