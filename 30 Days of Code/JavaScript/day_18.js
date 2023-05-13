/*
Created on Sat May 13 21:10 2023

@author: Dmitry White
*/

/*
  A palindrome is a word, phrase, number, or other sequence of characters
  which reads the same backwards and forwards.
  Can you determine if a given string, S, is a palindrome?
  Write the following declarations and implementations:

  Two instance variables: one for your stack, and one for your queue.
    A void pushCharacter(char ch) method that pushes a character onto a stack.
    A void enqueueCharacter(char ch) method that enqueues a character in the queue instance variable.
    A char popCharacter() method that pops and returns the character at the top of the stack instance variable.
    A char dequeueCharacter() method that dequeues and returns the first character in the queue instance variable.
*/

function Solution() {
  this.stack = [];
  this.queue = [];
}

Solution.prototype.pushCharacter = function (char) {
  this.stack.push(char);
};

Solution.prototype.enqueueCharacter = function (char) {
  this.queue.push(char);
};

Solution.prototype.popCharacter = function () {
  return this.stack.pop();
};

Solution.prototype.dequeueCharacter = function () {
  return this.queue.shift();
};
