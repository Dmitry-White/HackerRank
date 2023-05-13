/*
Created on Sat May 13 20:32 2023

@author: Dmitry White
*/

/*
  A Node object has an integer data field, `data`, and a Node instance pointer, `next`,
  pointing to another node (i.e.: the next node in the list).
  A Node `insert` function has two parameters: a pointer, `head`,
  pointing to the first node of a linked list, and an integer, `data`,
  that must be added to the end of the list as a new Node object.

  Complete the insert function so that it creates a new Node
  (pass `data` as the Node constructor argument)
  and inserts it at the tail of the linked list referenced by the `head` parameter.
  Once the new node is added, return the reference to the `head` node.
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {
  this.tail = null;
}

Solution.prototype.insert = function (head, data) {
  const curr = new Node(data);

  if (!head) {
    this.tail = curr;
    return curr;
  } else {
    this.tail.next = curr;
    this.tail = curr;
    return head;
  }
};

Solution.prototype.display = function (head) {
  let start = head;
  while (start) {
    process.stdout.write(start.data + ' ');
    start = start.next;
  }
};
