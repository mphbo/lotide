const findKeyByValue = (object, value) => {
  let theKey = '';
  for (let key in object) {
    if (object[key] === value) {
      theKey = key;
    }
  }
  if (theKey === '') {
    return undefined;
  } else {
    return theKey;
  }
};

module.exports = findKeyByValue;


// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`😀😀😀  Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`😡😡😡  Assertion Failed: ${actual} !== ${expected}`);
//   }

// };

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
