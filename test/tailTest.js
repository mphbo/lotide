const assertEqual = require('../assertEqual');
const tail = require('../tail');


assertEqual(tail(['one', 'two', 'three', 'four']), ['two', 'three', 'four']);
assertEqual(tail([1, 2, 3, 4, 5]).length, [2, 3, 4, 5].length);
assertEqual(tail([1]), []);
assertEqual(tail([]), []);