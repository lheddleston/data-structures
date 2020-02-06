// Function should build an object that has the functionality to have values added to the
// top of the stack, values removed from the stack and return the number of items in the stack

var Stack = function() {

  this.n = 0;
  this.storage = {};

};

Stack.prototype.push = function(value) {
  this.n++;
  this.storage[this.n] = value;
};

Stack.prototype.pop = function() {
  var result = this.storage[this.n];
  delete this.storage[this.n];
  if (this.n) { this.n--; }
  return result;
};

Stack.prototype.size = function() {
  return this.n;
};