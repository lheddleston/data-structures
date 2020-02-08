var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = {}; 
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //add a property to storage object with a string key equal to item
  this.storage[item] = {};
};

setPrototype.contains = function(item) {
  //return boolean reflecting if the value of that item key is undefined
  return this.storage[item] ? true : false;
};

setPrototype.remove = function(item) {
  delete this.storage[item];
  
};

/*
 * Complexity: What is the time complexity of the above functions?
  O(1) for all
 */