const { letterUtils } = require('../utils');

module.exports = {
  computeLettersForNumber,
};

const ERROR_MSG_INVALID_NUMBER_PARAM = 'Request body number field must be an integer';

/**
 * Converts an integer into an array of possible text strings.
 * Each digit has associated letters based on T9 text input.
 *
 * @param {integer} number
 */
function computeLettersForNumber(number) {
  if (!Number.isInteger(number)) {
    throw Error(ERROR_MSG_INVALID_NUMBER_PARAM);
  }

  const digitArray = letterUtils.convertNumberToDigitArray(number);
  const letterArrays = letterUtils.getLettersEachDigit(digitArray);

  // Need to define result here as it is being passed through a recursive method
  const result = [];
  letterUtils.generatePossibilitiesRecursively(letterArrays, result, 0, '');
  return result;
}
