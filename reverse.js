let reverse = function(string) {
  let reversedString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    reversedString += string[i];
  }
  console.log(reversedString);
};
let array = [];
for (let i = 0; i < process.argv.length; i++) {
  array.push(process.argv[i]);
}

array.shift();
array.shift();

// console.log(array);

if (process.argv.length === 1) {
  reverse(array);
  console.log(process.argv.length);
} else if (process.argv.length > 1) {
  for (let i = 0; i < array.length; i++) {
    reverse(array[i]);
  }
}

// console.log(reverse('hello'));