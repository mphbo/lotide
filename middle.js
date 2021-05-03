const middle = array => {
  let centerIndex = Math.floor(array.length / 2);
  let newArray = [];
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    newArray.push(array[centerIndex - 1]);
    newArray.push(array[centerIndex]);
  } else {
    newArray.push(array[centerIndex]);
  }
  // console.log(newArray);
  return(newArray);
}

module.exports = middle;

middle([1]) // => []
middle([1, 2]) // => []

middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]

middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]


