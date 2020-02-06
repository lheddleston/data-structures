var Queue = function() {

  var queueObj = {};
  queueObj.n = 0;
  queueObj.last = 0;
  queueObj.storage = {};

  _.extend(queueObj, queueMethods);

  return queueObj;
};

var queueMethods = {

  enqueue: function(value) {
    this.n++;
    this.storage[this.last] = value;
    this.last++;
  },

  dequeue: function() {
    var first = this.last - this.n;
    var result = this.storage[first];
    delete this.storage[first];
    if (this.n) { this.n--; }
    return result;
  },

  size: function() {
    return this.n;
  }

};


