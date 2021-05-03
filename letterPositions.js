const countLetters = sentence => {
  let positionOfLetters = {};
  sentence = sentence.split(' ').join('');

  for (let i = 0; i < sentence.length; i++) {
    if (positionOfLetters[sentence[i]]) {
      positionOfLetters[sentence[i]].push(i);
    } else {
      positionOfLetters[sentence[i]] = [];
      positionOfLetters[sentence[i]].push(i); 
    }
  }
  return positionOfLetters;
};

module.exports = countLetters;

// console.log(countLetters('lighthouse in the house'));


// const assertArraysEqual = (actual, expected) => {
//   if (actual.length !== expected.length) {
//     console.log('😡😡😡 The Arrays do not match!');
//     return false;
//   } else {
//     for (let i = 0; i < actual.length; i++) {
//       if (actual[i] !== expected[i]) {
//         console.log('😡😡😡 The Arrays do not match!');
//         return false;
//       }
//     }
//   }
//   console.log('😀😀😀 The Arrays do match!');
//   return true;
// };

// assertArraysEqual(countLetters('hello'), {h: [0], e: [1], l: [2, 3], o: [4]})