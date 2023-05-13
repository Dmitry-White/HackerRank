/*
Created on Sat May 13 14:40 2023

@author: Dmitry White
*/

// TODO: Given  names and phone numbers,
// assemble a phone book that maps friends' names to their respective phone numbers.
// You will then be given an unknown number of names to query your phone book for.
// For each `name` queried, print the associated entry from your phone book
// on a new line in the form name=phoneNumber;
// if an entry for `name` is not found, print Not found instead.

function processData(input) {
  const [n, ...lines] = input.split('\n');
  const phoneBookData = lines.slice(0, n);
  const names = lines.slice(n);

  const phoneBook = phoneBookData.reduce((acc, curr) => {
    const [name, number] = curr.split(' ');
    acc[name] = number;
    return acc;
  }, {});

  names.forEach((name) => {
    const result = phoneBook[name];
    if (!result) {
      return console.log('Not found');
    }

    console.log(`${name}=${result}`);
  });
}
