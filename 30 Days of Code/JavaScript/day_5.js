/*
Created on Sat May 13 13:35 2023

@author: Dmitry White
*/

// TODO: Given an integer, n, print its first  multiples.
// Each multiple n*i (where 1 <= i <= 10) should be printed on a new line in the form:
// n x i = result.

const firstMultiple = (n) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${n} x ${i} =`, n * i);
  }
};
