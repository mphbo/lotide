const map = (array, func) => {
  const results = [];
  for (let item of array) {
    results.push(func(item));
  }
  return results;
};

module.exports = map;

// let words = ["ground", "control", "to", "major", "tom"];


// let results1 = map(words, word => word[0]);
// console.log(results1);


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

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);
// results1 = map(words, word => word[1]);
// assertArraysEqual(results1, ['r', 'o', 'o', 'a', 'o']);

// words = ['Hi', 'I', 'love', 'coding']
// results1 = map(words, word => word[0]);

// assertArraysEqual(results1, ['H', 'I', 'l', 'c']);
