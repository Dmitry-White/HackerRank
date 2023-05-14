/*
Created on Sun May 14 15:06 2023

@author: Dmitry White
*/

/*
  A Node object has an integer data field, `data`, and a Node instance pointer, `next`,
  pointing to another node (i.e.: the next node in a list).
  A `removeDuplicates` function takes a pointer to the `head` node of a linked list as a parameter.
  Complete `removeDuplicates` so that it deletes any duplicate nodes from the list
  and returns the head of the updated list.
  Note: The `head` pointer may be null, indicating that the list is empty.
  Be sure to reset your `next` pointer when performing deletions to avoid breaking the list.
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function Solution() {}

Solution.prototype.insert = function (head, data) {
  const p = new Node(data);
  if (!head) {
    head = p;
  } else if (!head.next) {
    head.next = p;
  } else {
    let start = head;
    while (start.next) {
      start = start.next;
    }
    start.next = p;
  }
  return head;
};

Solution.prototype.display = function (head) {
  let start = head;
  while (start) {
    process.stdout.write(start.data + ' ');
    start = start.next;
  }
};

/*
  Removing an element from a linked list of nodes in a language with automatic garbage collection
  is all about simply changing the next reference from one node so that it points to another node.
*/
Solution.prototype.removeDuplicates = function (head) {
  let start = head;
  while (start && start.next) {
    if (start.data === start.next.data) {
      start.next = start.next.next;
    } else {
      start = start.next;
    }
  }

  return head;
};
