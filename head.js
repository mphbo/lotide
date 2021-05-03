const head = function(array) {
  if (array.length > 1) {
    return array[0];
  } else if (array.length === 1) {
    return array;
  } else {
    return undefined;
  }
};



module.exports = head;