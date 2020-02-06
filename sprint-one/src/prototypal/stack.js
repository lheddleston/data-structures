var Stack = function() {
  // Function should build an object that has the functionality to have values added to the
  // top of the stack, values removed from the stack and return the number of items in the stack

  var newObject = Object.create(stackMethods);
  newObject.n = 0;
  newObject.storage = {};

  return newObject;
};

var stackMethods = {

  push: function(value) {
    this.n++;
    this.storage[this.n] = value;
  },

  pop: function() {
    var result = this.storage[this.n];
    delete result;
    if (this.n) { this.n--; }
    return result;
  },

  size: function() {
    return this.n;
  }
};


