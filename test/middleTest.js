const assert = require('chai').assert;
const middle = require('../middle.js');

describe('middle should return the middle item/items of an array', () => {
  it('should return an empty array when given an array with one item in it', () => {
    assert.deepEqual(middle([1]), []);
  });
  
  it('should return empty array when given an array with 2 items', () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it('returns array with middle item of given array', () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it('returns array with middle item of given array', () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it('returns array with middle item of given array', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it('returns array with middle item of given array', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
});