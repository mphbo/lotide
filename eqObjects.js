const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀😀😀  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😡😡😡  Assertion Failed: ${actual} !== ${expected}`);
  }

};

const eqArrays = (actual, expected) => {
  if (actual.length !== expected.length) {
    console.log(false);
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        console.log(false);
        return false;
      }
    }
  }
  console.log(true);
  return true;
};


const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log(false);
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key])) {
      return eqArrays(object1[key], object2[key])
    } else if (object2[key] === undefined) {
      console.log(false);
      return false;
    } else if (object1[key] !== object2[key]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
  return true;
}



// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false


// assertEqual(ab, ba);
// assertEqual(ab, abc);