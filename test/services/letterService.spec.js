const { assert } = require('chai');
const { computeLettersForNumber } = require('../../src/services/letterService');

describe('Letter Service', () => {
  /* ########## ERROR AND TYPE TESTS ########## */

  it('should throw an error if no number is passed', () => {
    assert.throws(computeLettersForNumber, Error);
  });

  it('should throw an error if null is passed', () => {
    assert.throws(() => computeLettersForNumber(null), Error);
  });

  it('should throw an error if an invalid number is passed', () => {
    assert.throws(() => computeLettersForNumber('not a number'), Error);
  });

  it('should return an array if a valid number is passed', () => {
    assert.typeOf(computeLettersForNumber(123), 'array');
  });

  /* ########## SINGLE NUMBER TESTS ########## */

  it('should return correct strings for number one', () => {
    assert.deepEqual(computeLettersForNumber(1), []);
  });

  it('should return correct strings for number two', () => {
    assert.deepEqual(computeLettersForNumber(2), ['a', 'b', 'c']);
  });

  it('should return correct strings for number three', () => {
    assert.deepEqual(computeLettersForNumber(3), ['d', 'e', 'f']);
  });

  it('should return correct strings for number four', () => {
    assert.deepEqual(computeLettersForNumber(4), ['g', 'h', 'i']);
  });

  it('should return correct strings for number five', () => {
    assert.deepEqual(computeLettersForNumber(5), ['j', 'k', 'l']);
  });

  it('should return correct strings for number six', () => {
    assert.deepEqual(computeLettersForNumber(6), ['m', 'n', 'o']);
  });

  it('should return correct strings for number seven', () => {
    assert.deepEqual(computeLettersForNumber(7), ['p', 'q', 'r', 's']);
  });

  it('should return correct strings for number eight', () => {
    assert.deepEqual(computeLettersForNumber(8), ['t', 'u', 'v']);
  });

  it('should return correct strings for number nine', () => {
    assert.deepEqual(computeLettersForNumber(9), ['w', 'x', 'y', 'z']);
  });

  it('should return correct strings for number zero', () => {
    assert.deepEqual(computeLettersForNumber(0), [' ']);
  });

  /* ########## TWO NUMBER TESTS ########## */

  it('should return correct strings for number zero', () => {
    assert.deepEqual(computeLettersForNumber(22), ['aa', 'ab', 'ac', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc']);
  });
});
