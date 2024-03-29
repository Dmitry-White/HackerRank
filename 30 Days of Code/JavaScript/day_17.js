/*
Created on Sat May 13 21:01 2023

@author: Dmitry White
*/

/*
  Write a Calculator class with a single method: int power(int,int).
  The power method takes two integers, n and p, as parameters and returns the integer result of n^p.
  If either n or p is negative, then the method must throw an exception with the message:
  n and p should be non-negative.
*/

class Calculator {
  power(n, p) {
    if (n < 0 || p < 0) {
      throw 'n and p should be non-negative';
    }
    return Math.pow(n, p);
  }
}
