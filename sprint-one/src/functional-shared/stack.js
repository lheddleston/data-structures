var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var newObj = {};

newObj.n = 0;
newObj.storage = {};

_.extend(newObj, stackMethods);

return newObj;

};




var stackMethods = {

	push: function(value) {
		this.n ++;
		this.storage[this.n] = value;
	},

	pop: function() {
		var result = this.storage[this.n];
		delete this.storage[this.n];
		if (this.n) { this.n--; }
		return result;
	},

	size: function() {
		return this.n;
	}	

};


