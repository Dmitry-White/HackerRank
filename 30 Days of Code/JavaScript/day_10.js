/*
Created on Sat May 13 16:30 2023

@author: Dmitry White
*/

// Given a base-10 integer, n, convert it to binary (base-2).
// Then find and print the base-10 integer
// denoting the maximum number of consecutive 1's in n's binary representation.
// When working with different bases, it is common to show the base as a subscript.

const doStuff = (n) => {
  let curr = 0;
  let max = 0;

  while (n > 0) {
    const remainder = n % 2;
    const quotient = Math.floor(n / 2);

    if (remainder === 1) {
      curr++;
      max = curr > max ? curr : max;
    } else {
      curr = 0;
    }

    n = quotient;
  }

  console.log(max);
};
