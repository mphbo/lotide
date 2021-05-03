const assertEqual = require('../assertEqual');
const tail = require('../tail');
const assert = require('chai').assert;







describe('tail', () => {

  it('returns all items in an array except for the first, which in this case would be [2, 3, 4, 5]', () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });

  it('returns all items in an array except for the first, which in this case would be ["two", "three", "four"]', () => {
    assert.deepEqual(tail(['one', 'two', 'three', 'four']), ['two', 'three', 'four']);
  });

  it('returns an empty array when only one item is passed in', () => {
    assert.deepEqual(tail([1]), []);
  });

  it('returns an empty array when passed an empty array', () => {
    assert.deepEqual(tail([]), []);
  });

}) 