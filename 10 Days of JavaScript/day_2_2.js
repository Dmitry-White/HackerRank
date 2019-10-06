
/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
  const vowelsAlphabet = 'aeiou';
  const vowels = [];
  const consonants = [];
  for (let i = 0; i <= s.length; i++) {
    vowelsAlphabet.includes(s[i])
      ? vowels.push(s[i])
      : consonants.push(s[i]);
  }
  console.log(`${vowels.join('\n')}\n${consonants.join('\n')}`);
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
