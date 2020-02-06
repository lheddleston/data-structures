var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var n = 0;
  var last = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // add value to the end of the queue
    n++;
    storage[last] = value;
    last++;
  };

  someInstance.dequeue = function() {
    // remove first value in the queue
    var first = last - n;
    var result = storage[first];
    delete storage[first];
    if (n) { n--; }
    return result;
  };

  someInstance.size = function() {
    return n;
  };

  return someInstance;
};
