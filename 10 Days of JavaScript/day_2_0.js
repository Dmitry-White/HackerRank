
function getGrade(score) {
  if (score > 25 && score <= 30) {
    return 'A';
  }
  if (score > 20 && score <= 25) {
    return 'B';
  }
  if (score > 15 && score <= 20) {
    return 'C';
  }
  if (score > 10 && score <= 15) {
    return 'D';
  }
  if (score > 5 && score <= 10) {
    return 'E';
  }
  if (score > 0 && score <= 5) {
    return 'F';
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
  inputString = inputString.trim().split('\n').map((string) => string.trim());

  main();
});

function readLine() {
  return inputString[currentLine++];
}
