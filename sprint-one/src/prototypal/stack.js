var Stack = function() {
  // Use Object.create with the object from step 2 to create instances of your class
  // Don't use the new keyword
  // Purpose: implement a basic stack data object in the prototypal style
  // IOCE: no input, output result of pop and size, stack object - lifo, 
  // pop from empty object
  // Function should build an object that has the functionality to have values added to the
  // top of the stack, values removed from the stack and return the number of items in the stack

  // Object.create object from functional-shared file
  // Object instance should have .n and .storage
  // Extend that newObject copy
  // Return newObject

 var newObject = Object.create(stackMethods);
 newObject.n = 0;
 newObject.storage = {};

 return newObject;
};

var stackMethods = {
// create function called push with an input value
// increase the size of the object
// add the new value to the Stack 
	push: function(value) {
		this.n++;
		this.storage[this.n] = value;
	},

// create function called pop
// delete value from Stack
// decrease size if > 0
// return deleted value
	pop: function() {
		var result = this.storage[this.n];
		delete result;
		if (this.n) { this.n--;}
		return result;
	},

// create function called size
// return the current size of the object
	size: function() {
		return this.n;
	}
};


