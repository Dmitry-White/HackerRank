/*
  Created on Tue Oct 1 05:20 2019

  @author: Dmitry White
*/

/*
  TODO: Given the meal price (base cost of a meal),
  tip percent (the percentage of the meal price being added as tip),
  and tax percent (the percentage of the meal price being added as tax) for a meal,
  find and print the meal's total cost.
*/

const solve = (mealCost, tipPercent, taxPercent) => {
  const tip = (mealCost * tipPercent) / 100;
  const tax = (mealCost * taxPercent) / 100;
  console.log(Math.round(mealCost + tip + tax));
};

console.log('Total: ', solve(10, 10, 2));
