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
  return true;
};

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`😀😀😀 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`)
  } else {
    console.log(`😡😡😡 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

assertObjectsEqual({cans: 4, tea: 3}, {cans: 4, tea: 3});