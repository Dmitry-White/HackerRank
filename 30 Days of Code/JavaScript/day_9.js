/*
Created on Sat May 13 16:11 2023

@author: Dmitry White
*/

// Complete the factorial function in the editor below.
// Be sure to use recursion.
// factorial has the following paramter:
// int n: an integer

function factorial(n) {
  if (n == 1) {
    return 1;
  }
  return n * factorial(n - 1);
}