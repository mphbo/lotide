const eqArrays = (actual, expected) => {
  if (actual.length !== expected.length) {
    // console.log(false);
    return false;
  } else {
    for (let i = 0; i < actual.length; i++) {
      if (Array.isArray(actual[i])) {
        if (actual[i].length !== expected[i].length) {
          return false;
        } else {
          if (eqArrays(actual[i], expected[i])) {
          } else {
            return false;
          }
        }
      }
      else if (actual[i] !== expected[i]) {
        return false;
      }
    }
  }
  // console.log(true);
  return true;
};

module.exports = eqArrays;



