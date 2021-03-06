const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(
  [[1, [[2], 3], 4], [[[5]]]], 
  [[1, [[2], 3], 4], [[[5]]]]), true);

  assertEqual(eqArrays([1, 4, 3], [1, 2, 3]), false);
assertEqual(eqArrays(
  [[1, [[2], 3], 4], [[[45]]]], 
  [[1, [[2], 3], 4], [[[5]]]]), false);
