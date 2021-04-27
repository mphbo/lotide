const eqArrays = (actual, expected) => {
  if (actual.length !== expected.length) {
    console.log('😡😡😡The Arrays do not match!');
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log('😡😡😡The Arrays do not match!');
        return false;
      }
    }
  }
  console.log('😀😀😀The Arrays do match!');
  return true;
};


eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false