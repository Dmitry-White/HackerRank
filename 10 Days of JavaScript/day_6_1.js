
// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
  const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const date = new Date(dateString);
  return week[date.getDay()];
}


// Service Code
function main() {
  const d = +(readLine());

  for (let i = 0; i < d; i++) {
    const date = readLine();

    console.log(getDayName(date));
  }
}

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
