/*
 * Create the function factorial here
 */
const factorial = (n) => {
  if (n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

// Service Code
function main() {
  const n = +readLine();

  console.log(factorial(n));
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
