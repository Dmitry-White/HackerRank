/*
  Created on Tue Oct 1 04:54 2019

  @author: Dmitry White
*/

/*
  TODO: Print the sum of both integers on the first line,
  the sum of both doubles (scaled to 1 decimal place) on the second line,
  and then the two concatenated strings on the third line.
*/

const sum = (secondInt, secondDouble, secondString) => {
  const i = 4;
  const d = 4.0;
  const s = 'HackerRank ';

  // Print the sum of both integer variables on a new line.
  console.log(secondInt + i);

  // Print the sum of the double variables on a new line.
  console.log((secondDouble + d).toFixed(1));

  // Concatenate and print the String variables on a new line
  // The 's' variable above should be printed first.
  console.log(s + secondString);
};

console.log('Sum: ', sum(1, 2.5, 'Hi'));
