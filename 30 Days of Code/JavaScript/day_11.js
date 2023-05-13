/*
Created on Sat May 13 16:51 2023

@author: Dmitry White
*/

// Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.
// Given a 6 X 6 2D Array, A. An hourglass in A is a subset of values with indices
// falling in this pattern in A's graphical representation:
//   a b c
//     d
//   e f g
// There are 16 hourglasses in A, and an hourglass sum is the sum of an hourglass' values.

const hourglassSum = (init_x, init_y, arr) => {
  const firstRow =
    arr[init_x][init_y] + arr[init_x][init_y + 1] + arr[init_x][init_y + 2];
  const secondRow = arr[init_x + 1][init_y + 1];
  const thirdRow =
    arr[init_x + 2][init_y] +
    arr[init_x + 2][init_y + 1] +
    arr[init_x + 2][init_y + 2];

  return firstRow + secondRow + thirdRow;
};

const doStuff = (n, arr) => {
  let curr = 0;
  let max = -100;

  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      curr = hourglassSum(i, j, arr);
      max = curr > max ? curr : max;
    }
  }

  console.log(max);
};
