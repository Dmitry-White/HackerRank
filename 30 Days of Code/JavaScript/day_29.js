/*
Created on Sun May 14 17:39 2023

@author: Dmitry White
*/

/*
  Given set S={1, ..., N}, find two integers, A and B (where A < B), from set S
  such that the value of A & B is the maximum possible and also less than a given integer, K.
  In this case, & represents the bitwise AND operator.
*/

function bitwiseAnd(N, K) {
  let max = 0;

  for (let i = 1; i < N; i++) {
    for (let j = i + 1; j <= N; j++) {
      const bitwise = i & j;
      max = bitwise > max && bitwise < K ? bitwise : max;
    }
  }

  return max;
}
