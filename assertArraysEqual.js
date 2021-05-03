const eqArrays = require("./eqArrays");

const assertArraysEqual = (actual, expected) => {
  if (eqArrays(expected, actual)) {
    console.log('😀😀😀 The Arrays do match!');
  } else {
    console.log('😡😡😡 The Arrays do not match!');
  }
};

module.exports = assertArraysEqual;