/*
Created on Sat May 13 17:41 2023

@author: Dmitry White
*/

// Complete the Difference class by writing the following:
//   A class constructor that takes an array of integers as a parameter
//    and saves it to the elements instance variable.
//   A computeDifference method that finds the maximum absolute difference between any 2 numbers
//    in N and stores it in the maximumDifference instance variable.

const maxDiff = (elements) => {
  const min = Math.max(...elements);
  const max = Math.min(...elements);

  return Math.abs(max - min);
};

const doStuff = (elements) => {
  const N = parseInt(readLine());

  const elements = readLine()
    .split(' ')
    .map((element) => parseInt(element));

  console.log(maxDiff(elements));
};
