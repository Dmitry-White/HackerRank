function getLetter(s) {
  const letter = s[0];

  const subsetA = {
    string: 'aeiou',
    value: 'A',
  };
  const subsetB = {
    string: 'bcdfg',
    value: 'B',
  };
  const subsetC = {
    string: 'hjklm',
    value: 'C',
  };
  const subsetD = {
    string: 'npqrstvwxyz',
    value: 'D',
  };

  switch (true) {
    case subsetA.string.includes(letter):
      return subsetA.value;
    case subsetB.string.includes(letter):
      return subsetB.value;
    case subsetC.string.includes(letter):
      return subsetC.value;
    case subsetD.string.includes(letter):
      return subsetD.value;
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
