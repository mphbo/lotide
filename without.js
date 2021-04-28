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

// const without = (source, itemsToRemove) => {
//   let goodCandy = source;
//   for (let i = 0; i < source.length; i++) {
//     for (let j = 0; j < itemsToRemove.length; j++) {
//       if (source[i] === itemsToRemove[j]) {
//         goodCandy.splice(i, 1);
//       }
//     }
//   }
//   // console.log(goodCandy);
//   return goodCandy;
// };

const without = (source, itemsToRemove) => {
  let newArray = source;

  for (let i = 0; i < itemsToRemove.length; i++) {
    newArray = newArray.filter(items => {
      return (items !== itemsToRemove[i])
    })
  }
  console.log(newArray);
  return newArray;
}

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
