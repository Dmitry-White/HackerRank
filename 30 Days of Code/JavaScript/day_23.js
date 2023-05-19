/*
Created on Sun May 14 14:21 2023

@author: Dmitry White
*/

/*
  A level-order traversal, also known as a breadth-first search,
  visits each level of a tree's nodes from left to right, top to bottom.
  You are given a pointer, `root`, pointing to the root of a binary search tree.
  Complete the levelOrder function so that it prints the level-order traversal of the binary search tree.
  Print node.data items as space-separated line of integers. No return value is expected.
  Hint: You'll find a queue helpful in completing this challenge.
*/

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
  this.queue = [];
}

BinarySearchTree.prototype.insert = function (root, data) {
  if (root === null) {
    this.root = new Node(data);

    return this.root;
  }

  if (data <= root.data) {
    if (root.left) {
      this.insert(root.left, data);
    } else {
      root.left = new Node(data);
    }
  } else if (root.right) {
    this.insert(root.right, data);
  } else {
    root.right = new Node(data);
  }

  return this.root;
};

/*
  A level-order traversal of tree `t` is a recursive algorithm that processes the root,
  followed by the children of the root (from left to right),
  followed by the grandchildren of the root (from left to right), etc.
*/
BinarySearchTree.prototype.levelOrder = function (root) {
  const toPrint = [];

  if (root) {
    this.queue.push(root);

    while (this.queue.length !== 0) {
      const tree = this.queue.shift();

      toPrint.push(tree.data);

      if (tree.left) {
        this.queue.push(tree.left);
      }

      if (tree.right) {
        this.queue.push(tree.right);
      }
    }
  }
  console.log(toPrint.join(' '));
};
