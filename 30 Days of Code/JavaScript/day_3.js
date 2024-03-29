/*
  Created on Tue Oct 1 05:20 2019

  @author: Dmitry White
*/

/*
  TODO: Given an integer, n, perform the following conditional actions:
  If n is odd, print Weird
  If n is even and in the inclusive range of 2 to 5, print Not Weird
  If n is even and in the inclusive range of 6 to 20, print Weird
  If n is even and greater than 20, print Not Weird
*/

const isWeird = (N) => {
  const WEIRD = 'Weird';
  const NOT_WEIRD = 'Not Weird';

  const isOdd = !!(N % 2);
  const firstRange = (n) => n >= 2 && n <= 5;
  const secondRange = (n) => n >= 6 && n <= 20;
  const thirdRange = (n) => n > 20;

  if (isOdd) {
    console.log(WEIRD);
  } else if (firstRange(N)) {
    console.log(NOT_WEIRD);
  } else if (secondRange(N)) {
    console.log(WEIRD);
  } else if (thirdRange(N)) {
    console.log(NOT_WEIRD);
  }
};

console.log(isWeird(5));
