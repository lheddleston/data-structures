//Goal: Write a Graph constructor function that will create a new graph object
// using the methhods in the Graph class prototype

var Graph = function() {
  this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
//O(1)
Graph.prototype.addNode = function(node) {
  this.nodes[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
//O(1)
Graph.prototype.contains = function(node) {
  //includes
  return this.nodes[node] ? true : false;
};

// Removes a node from the graph. All edges connected to that Node are removed as well.
//O(n)
Graph.prototype.removeNode = function(node) {
  delete this.nodes[node];
  for (var key in this.nodes) {
    if (this.nodes[key][node]) {
      delete this.nodes[key][node];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
//O(1)
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return this.nodes[fromNode][toNode] ? true : false;
};

// Connects two nodes in a graph by adding an edge between them.
//O(1)
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.nodes[fromNode][toNode] = true;
  this.nodes[toNode][fromNode] = true;
};

// Remove an edge between any two specified (by value) nodes.
//O(1)
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
// O(n)
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.nodes) {
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */