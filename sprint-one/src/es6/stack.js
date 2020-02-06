class Stack {

  constructor() {
    this.n = 0;
    this.storage = {};
  }
  push(value) {
    this.n++;
    this.storage[this.n] = value;
  }
  pop() {
    var result = this.storage[this.n];
    delete this.storage[this.n];
    if (this.n) { this.n--; }
    return result;
  }
  size() {
    return this.n;
  }

}