/*
  Created on Sat May 13 14:29 2023

  @author: Dmitry White
*/

/*
  TODO: Given an array, A, of N integers, print A's elements in reverse order
  as a single line of space-separated numbers.
*/

const reverseOutput = (arr) => {
  console.log(arr.reverse().join(' '));
};

reverseOutput([1, 4, 3, 2]);
