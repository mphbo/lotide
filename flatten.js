const assertArraysEqual = (actual, expected) => {
  if (actual.length !== expected.length) {
    console.log('😡😡😡 The Arrays do not match!');
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log('😡😡😡 The Arrays do not match!');
        return false;
      }
    }
  }
  console.log('😀😀😀 The Arrays do match!');
  return true;
};

const flatten = array => {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flattenedArray.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    }
  }
  console.log(flattenedArray);
};


flatten([1, 2, [3, 4], 5, [6]]);