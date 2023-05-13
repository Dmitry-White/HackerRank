/*
Created on Sat May 13 14:06 2023

@author: Dmitry White
*/

// TODO: Given a string, S, of length N that is indexed from 0 to N-1,
// print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line.
// Note: 0 is considered to be an even index.

const isOdd = (n) => n % 2 !== 0;

const processLine = (line) => {
  const chars = line.split('');
  const oddChars = [];
  const evenChars = [];

  chars.forEach((char, index) => {
    isOdd(index) ? oddChars.push(char) : evenChars.push(char);
  });

  console.log(`${evenChars.join('')} ${oddChars.join('')}`);
};

function processData(input) {
  const [t, ...lines] = input.split('\n');

  for (let i = 0; i < t; i++) {
    processLine(lines[i]);
  }
}
