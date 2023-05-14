/*
Created on Sun May 14 16:56 2023

@author: Dmitry White
*/

/*
  This problem is about unit testing.
  Your company needs a function that meets the following requirements:
  1. For a given array of `n` integers,
    the function returns the index of the element  with the minimum value in the array.
    If there is more than one element with the minimum value, it returns the smallest index.
  2. If an empty array is passed to the function, it raises an exception.

  Complete the following methods for unit testing.
  In the class TestDataEmptyArray:
    get_array() returns an empty array

  In the class TestDataUniqueValues:
    get_array() returns an array of size at least 2 with all unique elements
    get_expected_result() returns the expected minimum value index for this array

  In the class TestDataExactlyTwoDifferentMinimums:
    get_array() returns an array where the minimum value occurs at exactly 2 indices
    get_expected_result() returns the expected index
*/

function minimumIndex(seq) {
  if (seq.length == 0) {
    throw new Error(
      'Cannot get the minimum value index from an empty sequence',
    );
  }
  let min_idx = 0;
  for (let i = 1; i < seq.length; i++) {
    if (seq[i] < seq[min_idx]) {
      min_idx = i;
    }
  }
  return min_idx;
}

class TestDataEmptyArray {
  static get_array() {
    return [];
  }
}

class TestDataUniqueValues {
  static get_array() {
    return [3, 6, 9, 2, 4, 8];
  }

  static get_expected_result() {
    return 3;
  }
}

class TestDataExactlyTwoDifferentMinimums {
  static get_array() {
    return [4, 3, 4, 5, 4, 3];
  }

  static get_expected_result() {
    return 1;
  }
}
