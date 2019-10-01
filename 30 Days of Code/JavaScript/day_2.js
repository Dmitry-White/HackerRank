/*
Created on Tue Oct 1 05:20 2019

@author: Dmitry White
*/

// TODO: Given the meal price (base cost of a meal),
// tip percent (the percentage of the meal price being added as tip),
// and tax percent (the percentage of the meal price being added as tax) for a meal,
// find and print the meal's total cost.

'use strict';

function solve(meal_cost, tip_percent, tax_percent) {
  const tip = (meal_cost * tip_percent) / 100;
  const tax = (meal_cost * tax_percent) / 100;
  console.log(Math.round(meal_cost + tip + tax));
}


// Service code
function main() {
  const meal_cost = parseFloat(readLine());

  const tip_percent = parseInt(readLine(), 10);

  const tax_percent = parseInt(readLine(), 10);

  solve(meal_cost, tip_percent, tax_percent);
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
  inputString += inputStdin;
});

process.stdin.on('end', _ => {
  inputString = inputString.replace(/\s*$/, '')
    .split('\n')
    .map(str => str.replace(/\s*$/, ''));

  main();
});

function readLine() {
  return inputString[currentLine++];
}
