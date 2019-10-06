/*
Created on Tue Oct 1 04:54 2019

@author: Dmitry White
*/

// TODO: Print the sum of both integers on the first line,
// the sum of both doubles (scaled to 1 decimal place) on the second line,
// and then the two concatenated strings on the third line.

function main() {
  const i = 4;
  const d = 4.0;
  const s = 'HackerRank ';
  // Declare second integer, double, and String variables.
  // Read and save an integer, double, and String to your variables.
  const secondInt = parseInt(readLine(), 10);
  const secondDouble = parseFloat(readLine());
  const secondString = readLine();

  // Print the sum of both integer variables on a new line.
  console.log(secondInt + i);

  // Print the sum of the double variables on a new line.
  console.log((secondDouble + d).toFixed(1));

  // Concatenate and print the String variables on a new line
  // The 's' variable above should be printed first.
  console.log(s + secondString);
}


// Service code
process.stdin.resume();
process.stdin.setEncoding('ascii');

let input_stdin = '';
let input_stdin_array = '';
let input_currentline = 0;

process.stdin.on('data', (data) => {
  input_stdin += data;
});

process.stdin.on('end', () => {
  input_stdin_array = input_stdin.split('\n');
  main();
});

// Reads complete line from STDIN
function readLine() {
  return input_stdin_array[input_currentline++];
}
