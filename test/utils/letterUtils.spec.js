const { assert } = require('chai');
const { isValidNumber } = require('../../src/utils/letterUtils');

describe('Letter Util - Regex tests', () => {
  it('should return true for a valid short string', () => {
    assert(isValidNumber('2'));
  });

  it('should return true for a valid long string', () => {
    assert(isValidNumber('436346436247983467348643986734895732875235000002'));
  });

  it('should return false for a string containing one', () => {
    assert.isFalse(isValidNumber('1543644346'));
  });

  it('should return false for a string containing letters', () => {
    assert.isFalse(isValidNumber('e634747568'));
  });

  it('should return false for undefined', () => {
    assert.isFalse(isValidNumber());
  });

  it('should return false for null', () => {
    assert.isFalse(isValidNumber(null));
  });
});
