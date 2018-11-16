const { assert } = require('chai');
const { computeLettersForNumber } = require('../../src/services/letterService');

describe('Letter Service', () => {
  it('should throw an error if no number is passed', () => {
    assert.throws(computeLettersForNumber, Error);
  });

  it('should throw an error if null is passed', () => {
    assert.throws(() => computeLettersForNumber(null), Error);
  });

  it('should throw an error if an invalid number is passed', () => {
    assert.throws(() => computeLettersForNumber('not a number'), Error);
  });

  it('should return a string if a valid number is passed', () => {
    assert.typeOf(computeLettersForNumber(123), 'string');
  });
});
