var Stack = function() {

  var someInstance = {};
  var n = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    // add value to object
    n++;
    storage[n] = value;
  };

  someInstance.pop = function() {
    // delete value from object
    var result = storage[n];
    delete storage[n];
    if (n) {
      n--;
    }
    return result;
  };

  someInstance.size = function() {
    // return size of instance
    return n;
  };

  return someInstance;
};
