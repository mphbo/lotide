// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`😀😀😀  Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`😡😡😡  Assertion Failed: ${actual} !== ${expected}`);
//   }

// };



const countLetters = sentence => {
  let numOfLetters = {};
  sentence = sentence.split(' ').join('');

  for (let i = 0; i < sentence.length; i++) {
    if (numOfLetters[sentence[i]]) {
      numOfLetters[sentence[i]] += 1;
    } else numOfLetters[sentence[i]] = 1;
  }
  return numOfLetters;
};

// console.log(countLetters('hello what is your name'));
module.exports = countLetters;



