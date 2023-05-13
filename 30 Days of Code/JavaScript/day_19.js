/*
Created on Sat May 13 21:31 2023

@author: Dmitry White
*/

/*
  The AdvancedArithmetic interface and the method declaration
  for the abstract divisorSum(n) method.
  Complete the implementation of Calculator class,
  which implements the AdvancedArithmetic interface.
  The implementation for the divisorSum(n) method must return the sum of all divisors of n.
*/

const getSum = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum = n % i === 0 ? sum + i : sum;
  }

  console.log('I implemented: AdvancedArithmetic');
  console.log(sum);
};
