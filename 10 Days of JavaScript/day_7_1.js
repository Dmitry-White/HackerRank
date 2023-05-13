function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.',
   * followed by one or more letters.
   */

  const re = /\b^(Mr\.|Mrs\.|Ms\.|Dr\.|Er\.)[a-zA-Z]+$\b/;
  /*
   * Do not remove the return statement
   */
  return re;
}

// Service Code
function main() {
  const re = regexVar();
  const s = readLine();

  console.log(!!s.match(re));
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', (_) => {
  inputString = inputString
    .trim()
    .split('\n')
    .map((string) => string.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}
