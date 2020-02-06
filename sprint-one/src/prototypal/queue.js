var Queue = function() {

  var queueObj = Object.create(queueMethods);
  queueObj.n = 0;
  queueObj.last = 0;
  queueObj.storage = {};

  return queueObj;
};

var queueMethods = {

  enqueue: function(value) {
    this.n++;
    this.storage[this.last] = value;
    this.last++;
  },

  dequeue: function() {
    var start = this.last - this.n;
    var result = this.storage[start];
    delete this.storage[start];
    if (this.n) { this.n--; }
    return result;
  },

  size: function() {
    return this.n;
  }
};


