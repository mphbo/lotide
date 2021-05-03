// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`😀😀😀  Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`😡😡😡  Assertion Failed: ${actual} !== ${expected}`);
//   }
// };


const findKey = (obj, callback) => {
  for (let item in obj) {
    if (callback(obj[item])) {
      return item;
    }
  }
};

module.exports = findKey;


// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2)); // => "noma"


// assertEqual(findKey({
//   "Sally": { relationship: true },
//   "Anikan":   { relationship: true },
//   "Numa Numa Guy":      { relationship: true },
//   "Larry Tate":   { relationship: false },
//   "Ogopogo":       { relationship: true },
//   "Albert":  { relationship: false }
// }, x => x.relationship === false), 'Larry Tate');

// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), 'noma');