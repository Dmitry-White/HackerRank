/*
Created on Sat May 13 17:49 2023

@author: Dmitry White
*/

// Given an array, a, of size n distinct elements,
// sort the array in ascending order using the Bubble Sort algorithm.
// Once sorted, print the following  lines:
// 1. "Array is sorted in numSwaps swaps".
// where `numSwaps` is the number of swaps that took place.
// 2. "First Element: firstElement"
// where `firstElement` is the first element in the sorted array.
// 3. "Last Element: lastElement"
// where `lastElement` is the last element in the sorted array.

function bubbleSort() {
  const n = parseInt(readLine().trim(), 10);

  const a = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((aTemp) => parseInt(aTemp, 10));

  let numSwaps = 0;

  for (let i = 0; i < n; i++) {
    // Track number of elements swapped during a single array traversal
    let numberOfSwaps = 0;

    for (let j = 0; j < n - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        const temp = a[j];
        a[j] = a[j + 1];
        a[j + 1] = temp;
        numberOfSwaps++;
      }
    }

    numSwaps += numberOfSwaps;

    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
      break;
    }
  }

  console.log(`Array is sorted in ${numSwaps} swaps.`);
  console.log('First Element:', a[0]);
  console.log('Last Element:', a[a.length - 1]);
}
