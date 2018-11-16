const { assert } = require('chai');
const { computeLettersForNumber } = require('../../src/services/letterService');

describe('Letter Service', () => {
  /* ########## ERROR TESTS ########## */

  it('should throw an error if no number is passed', () => {
    assert.throws(computeLettersForNumber, Error);
  });

  it('should throw an error if null is passed', () => {
    assert.throws(() => computeLettersForNumber(null), Error);
  });

  it('should throw an error if an invalid number is passed', () => {
    assert.throws(() => computeLettersForNumber('not a number'), Error);
  });

  it('should throw an error if number one is passed', () => {
    assert.throws(() => computeLettersForNumber('1'), Error);
  });

  /* ########## SINGLE NUMBER TESTS ########## */

  it('should return correct strings for number two', () => {
    assert.deepEqual(computeLettersForNumber('2'), ['a', 'b', 'c']);
  });

  it('should return correct strings for number three', () => {
    assert.deepEqual(computeLettersForNumber('3'), ['d', 'e', 'f']);
  });

  it('should return correct strings for number four', () => {
    assert.deepEqual(computeLettersForNumber('4'), ['g', 'h', 'i']);
  });

  it('should return correct strings for number five', () => {
    assert.deepEqual(computeLettersForNumber('5'), ['j', 'k', 'l']);
  });

  it('should return correct strings for number six', () => {
    assert.deepEqual(computeLettersForNumber('6'), ['m', 'n', 'o']);
  });

  it('should return correct strings for number seven', () => {
    assert.deepEqual(computeLettersForNumber('7'), ['p', 'q', 'r', 's']);
  });

  it('should return correct strings for number eight', () => {
    assert.deepEqual(computeLettersForNumber('8'), ['t', 'u', 'v']);
  });

  it('should return correct strings for number nine', () => {
    assert.deepEqual(computeLettersForNumber('9'), ['w', 'x', 'y', 'z']);
  });

  it('should return correct strings for number zero', () => {
    assert.deepEqual(computeLettersForNumber('0'), [' ']);
  });

  /* ########## TWO NUMBER TESTS ########## */

  it('should return correct strings for two of the same number with three possibilities', () => {
    assert.deepEqual(computeLettersForNumber('22'), ['aa', 'ab', 'ac', 'ba', 'bb', 'bc', 'ca', 'cb', 'cc']);
  });

  it('should return correct strings for two different numbers with three possibilities', () => {
    assert.deepEqual(computeLettersForNumber('34'), ['dg', 'dh', 'di', 'eg', 'eh', 'ei', 'fg', 'fh', 'fi']);
  });

  it('should return correct strings for two of the same number with four possibilities', () => {
    assert.deepEqual(computeLettersForNumber('99'), [
      'ww',
      'wx',
      'wy',
      'wz',
      'xw',
      'xx',
      'xy',
      'xz',
      'yw',
      'yx',
      'yy',
      'yz',
      'zw',
      'zx',
      'zy',
      'zz',
    ]);
  });

  it('should return correct strings for two different numbers with four possibilities', () => {
    assert.deepEqual(computeLettersForNumber('97'), [
      'wp',
      'wq',
      'wr',
      'ws',
      'xp',
      'xq',
      'xr',
      'xs',
      'yp',
      'yq',
      'yr',
      'ys',
      'zp',
      'zq',
      'zr',
      'zs',
    ]);
  });

  it('should return correct strings for one number with three possibilities and one with four possibilities', () => {
    assert.deepEqual(computeLettersForNumber('67'), [
      'mp',
      'mq',
      'mr',
      'ms',
      'np',
      'nq',
      'nr',
      'ns',
      'op',
      'oq',
      'or',
      'os',
    ]);
  });

  it('should return correct strings for two number including zero', () => {
    assert.deepEqual(computeLettersForNumber('20'), ['a ', 'b ', 'c ']);
  });

  /* ########## THREE NUMBER TESTS ########## */

  it('should return correct strings for three numbers', () => {
    assert.deepEqual(computeLettersForNumber('234'), [
      'adg',
      'adh',
      'adi',
      'aeg',
      'aeh',
      'aei',
      'afg',
      'afh',
      'afi',
      'bdg',
      'bdh',
      'bdi',
      'beg',
      'beh',
      'bei',
      'bfg',
      'bfh',
      'bfi',
      'cdg',
      'cdh',
      'cdi',
      'ceg',
      'ceh',
      'cei',
      'cfg',
      'cfh',
      'cfi',
    ]);
  });

  /* ########## LARGER NUMBER TESTS (USING LENGTH) ########## */

  it('should return correct strings for three many numbers with three possibilities', () => {
    assert.equal(computeLettersForNumber('234').length, 3 ** 3);
  });

  // Math.pow() makes the test more readable so disabling linter
  /* eslint-disable no-restricted-properties */

  it('should return correct strings for five numbers with three possibilities', () => {
    assert.equal(computeLettersForNumber('23456').length, Math.pow(3, 5));
  });

  it('should return correct strings for five numbers with four possibilities', () => {
    assert.equal(computeLettersForNumber('79979').length, Math.pow(4, 5));
  });

  it('should return correct strings for ten numbers with three possibilities', () => {
    assert.equal(computeLettersForNumber('2345683454').length, Math.pow(3, 10));
  });

  it('should return correct strings for ten numbers with four possibilities', () => {
    assert.equal(computeLettersForNumber('7997997799').length, Math.pow(4, 10));
  });

  // TODO handle timeout when string reaches 13
  it('should return correct strings for 13 numbers with three possibilities', () => {
    assert.equal(computeLettersForNumber('2345568343554').length, Math.pow(3, 13));
  });

  /* eslint-enable no-restricted-properties */
});
