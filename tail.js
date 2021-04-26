const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡  Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(array) {
  let newArray = array;
  if (newArray === [] || newArray.length === 1) {
    return [];
  } else {
    newArray.shift();
  }
  return newArray;
};

assertEqual(tail(['one', 'two', 'three', 'four']), ['two', 'three', 'four']);
assertEqual(tail([1, 2, 3, 4, 5]).length, [2, 3, 4, 5].length);
assertEqual(tail([1]), []);
assertEqual(tail([]), []);