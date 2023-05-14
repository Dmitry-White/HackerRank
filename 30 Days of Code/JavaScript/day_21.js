/*
Created on Sat May 13 21:50 2023

@author: Dmitry White
*/

/*
  Write a single generic function named printArray;
  this function must take an array of generic elements as a parameter.
  The locked Solution class in your editor tests your function.
  Note: You must use generics to solve this challenge. Do not write overloaded functions.
*/

const printArray = (arr) => {
  arr.forEach((element) => console.log(element));
};

const readInputs = (type) => {
  const n = +readLine();
  const arr = [];

  for (let i = 0; i < n; i++) {
    const element = type === 'number' ? +readLine() : readLine();
    arr.push(element);
  }

  return arr;
};

function doStuff() {
  const firstArr = readInputs('number');
  printArray(firstArr);

  const secondArr = readInputs('strings');
  printArray(secondArr);
}
