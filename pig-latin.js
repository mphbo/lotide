const pigLatin = function(string) {
  let newString1 = string;
  newString1 += string[0];
  let newString = newString1.slice(1, newString1.length);
  newString += 'ay';
  return newString;
};

module.exports = pigLatin;

// let sentence = '';
// for (let i = 2; i < process.argv.length; i++) {
//   sentence += pigLatin(process.argv[i]) + ' ';
// }
// console.log(sentence);
