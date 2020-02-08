/*
Justification: Create a class LinkedList that has 3 methods that behaves
like a linked list.
Specifcations: no input, outputs a list object, edge cases - empty list
Explanation: No input and the function outputs a new list object
*/

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head) {
      list.tail.next = node;
      list.tail = node;
    } else {
      list.tail = node;
      list.head = node;
    }
  };
         
  list.removeHead = function() {
    var currentHead = list.head;
    list.head = currentHead.next;
    return currentHead.value;
  };

  list.contains = function(target) {
    var current = list.head;
    while (current) {
      if (current.value === target) {
        return true;
      }
      current = current.next;
    }
    return false;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */