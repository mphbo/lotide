const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡  Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = (actual, expected) => {
  if (actual.length !== expected.length) {
    // console.log(false);
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (Array.isArray(actual[i])) {
        if (actual[i].length !== expected[i].length) {
          return false;
        } else {
          if (eqArrays(actual[i], expected[i])) {
          } else {
            return false;
          }
        }
      }
      else if (actual[i] !== expected[i]) {
        return false;
      }
    }
  }
  // console.log(true);
  return true;
};


console.log(eqArrays(
  [[2, 3], [4, [1,3,4, [5,4]]]], 
  [[2, 3], [4, [1,3,4, [5,44]]]]
  )); // => true

console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false


console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);