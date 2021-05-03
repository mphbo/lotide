const eqArrays = require("./eqArrays");

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(expected, actual)) {
    return '😀😀😀 The Arrays do match!';
  } else {
    return '😡😡😡 The Arrays do not match!'
  }
};

module.exports = assertArraysEqual;

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => falseO