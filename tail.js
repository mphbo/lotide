const tail = function(array) {
  let newArray = array;
  if (newArray === [] || newArray.length === 1) {
    return [];
  } else {
    newArray.shift();
  }
  return newArray;
};

module.exports = tail;