const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡  Assertion Failed: ${actual} !== ${expected}`);
  }

};


const countOnly = (allItems, itemsToCount) => {
  let newObj = {};

  for (let item in itemsToCount) {
    if (itemsToCount[item]) {
      for (let i = 0; i < allItems.length; i++) {
        if (item === allItems[i]) {
          if (newObj[item] === undefined) {
            newObj[item] = 1;
          } else newObj[item] += 1;
        }
      }
    }
  }
  return newObj;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
