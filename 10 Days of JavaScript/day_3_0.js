
/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
* */
function getSecondLargest(nums) {
  let max = 0;
  let prev_max = 0;

  nums.sort((a, b) => a - b).forEach((num) => {
    if (num > max) {
      prev_max = max;
      max = num;
    }
  });

  return prev_max;
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
