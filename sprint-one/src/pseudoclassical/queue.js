var Queue = function() {

  this.n = 0;
  this.last = 0;
  this.storage = {};

};

Queue.prototype.enqueue = function(value) {
  this.n++;
  this.storage[this.last] = value;
  this.last++;
};

Queue.prototype.dequeue = function() {
  var start = this.last - this.n;
  var result = this.storage[start];
  delete this.storage[start];
  if (this.n) { this.n--; }
  return result;
};

Queue.prototype.size = function() {
  return this.n;
};


