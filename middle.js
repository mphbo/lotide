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


const middle = array => {
  let centerIndex = Math.floor(array.length / 2);
  let newArray = [];
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    newArray.push(array[centerIndex - 1]);
    newArray.push(array[centerIndex]);
  } else {
    newArray.push(array[centerIndex]);
  }
  // console.log(newArray);
  return(newArray);
}

middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]

assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
