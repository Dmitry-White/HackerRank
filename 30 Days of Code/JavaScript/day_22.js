/*
Created on Sat May 14 13:12 2023

@author: Dmitry White
*/

/*
  The height of a binary search tree is the number of edges between the tree's root and its furthest leaf.
  You are given a pointer, `root`, pointing to the root of a binary search tree.
  Complete the getHeight function provided in your editor so that
  it returns the height of the binary search tree.
  Input:
    The first line contains an integer, `n`, denoting the number of nodes in the tree.
    Each of the  subsequent lines contains an integer, `data`,
    denoting the value of an element that must be added to the BST.
*/

function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}

function BinarySearchTree() {
  this.root = null;
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
  } else {
    if (root.right) {
      this.insert(root.right, data);
    } else {
      root.right = new Node(data);
    }
  }

  return this.root;
};

/*
  The height of a tree is the number of edges between the root node and its furthest leaf.
  More technically put, it's `1 + max(height(leftSubTree), height(rightSubTree))`
  (i.e., one more than the maximum of the heights of its left and right subtrees).
  Any node has a height of 1, and the height of an empty subtree is -1.
  Because the height of each node is `1 + the maximum height of its subtrees`
  and an empty subtree's height is -1, the height of a single-element tree or leaf node is 0.
*/
BinarySearchTree.prototype.getHeight = function (root) {
  if (!root) {
    return -1;
  }
  return 1 + Math.max(this.getHeight(root.left), this.getHeight(root.right));
};
