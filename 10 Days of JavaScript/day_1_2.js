// Write your code here. Read input using 'readLine()' and print output using 'console.log()'.

// Print the area of the circle:

// Print the perimeter of the circle:
function main() {
  const { PI } = Math;
  const r = readLine();
  console.log(PI * r * r);
  console.log(2 * PI * r);

  try {
    // Attempt to redefine the value of constant variable PI
    PI = 0;
    // Attempt to print the value of PI
    console.log(PI);
  } catch (error) {
    console.error("You correctly declared 'PI' as a constant.");
  }
}

// Service Code
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
