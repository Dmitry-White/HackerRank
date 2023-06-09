/*
  Created on Sat May 13 16:51 2023

  @author: Dmitry White
*/

/*
  Calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.
  Given a 6 X 6 2D Array, A. An hourglass in A is a subset of values with indices
  falling in this pattern in A's graphical representation:
    a b c
      d
    e f g
  There are 16 hourglasses in A, and an hourglass sum is the sum of an hourglass' values.
*/

const hourglassSum = (initX, initY, arr) => {
  const firstRow =
    arr[initX][initY] + arr[initX][initY + 1] + arr[initX][initY + 2];
  const secondRow = arr[initX + 1][initY + 1];
  const thirdRow =
    arr[initX + 2][initY] +
    arr[initX + 2][initY + 1] +
    arr[initX + 2][initY + 2];

  return firstRow + secondRow + thirdRow;
};

const calculateHourglass = (n, arr) => {
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

console.log(
  'Hourglass: ',
  calculateHourglass([
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ]),
);
