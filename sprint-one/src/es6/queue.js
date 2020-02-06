class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.n = 0;
    this.last = 0;
    this.storage = {};

  }
  enqueue(value) {
    this.n++;
    this.storage[this.last] = value;
    this.last++;
  }
  dequeue() {
    var start = this.last - this.n;
    var result = this.storage[start];
    delete this.storage[start];
    if (this.n) { this.n--; }
    return result;
  }
  size() {
    return this.n;
  }
}


