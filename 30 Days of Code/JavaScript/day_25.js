/*
Created on Sun May 14 15:19 2023

@author: Dmitry White
*/

/*
  A prime is a natural number greater than 1 that has no positive divisors other than 1 and itself.
  Given a number, `n`, determine and print whether it is prime or not
  Note: If possible, try to come up with a O(sqrt(n)) primality algorithm,
  or see what sort of optimizations you come up with for an O(n) algorithm.
*/

const isPrimeNaive = (n) => {
  if (n === 1) {
    return false;
  }
  if (n % 2 == 0) {
    return n === 2;
  }
  if (n % 3 == 0) {
    return n === 3;
  }

  const m = Math.sqrt(n);

  for (let i = 5; i <= m; i += 6) {
    if (n % i === 0) {
      return false;
    }
    if (n % (i + 2) == 0) {
      return false;
    }
  }
  return true;
};

const leastFactor = (n) => {
  if (isNaN(n) || !isFinite(n)) return NaN;
  if (n == 0) return 0;
  if (n % 1 || n * n < 2) return 1;
  if (n % 2 == 0) return 2;
  if (n % 3 == 0) return 3;
  if (n % 5 == 0) return 5;

  const m = Math.sqrt(n);

  for (let i = 7; i <= m; i += 30) {
    if (n % i == 0) return i;
    if (n % (i + 4) == 0) return i + 4;
    if (n % (i + 6) == 0) return i + 6;
    if (n % (i + 10) == 0) return i + 10;
    if (n % (i + 12) == 0) return i + 12;
    if (n % (i + 16) == 0) return i + 16;
    if (n % (i + 22) == 0) return i + 22;
    if (n % (i + 24) == 0) return i + 24;
  }
  return n;
};

const isPrime = (n) => {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
  if (n == leastFactor(n)) return true;
  return false;
};
