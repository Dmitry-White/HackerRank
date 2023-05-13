/*
Created on Tue Oct 1 04:23 2019

@author: Dmitry White
*/

// TODO: Write a line of code here that prints the contents of input to stdout.

function processData(inputString) {
  console.log('Hello, World.');
  console.log(inputString);
}

// Service code
process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', (input) => {
  _input += input;
});

process.stdin.on('end', () => {
  processData(_input);
});
