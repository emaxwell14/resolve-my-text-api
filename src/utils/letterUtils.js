/**
 * Recursive method that accepts a nested array of digit strings and outputs an array of strings which contains
 * each possibility.
 *
 * @param {array} letterArrays Array containing an array for each digit
 * @param {array} result The final output array. If currentPossibility is complete, it is added to this
 * @param {integer} depth Tracks the number of levels that the method has reached in the nested arrays
 * @param {*} currentPossibility String that is build up on each iteration
 */
const generatePossibilitiesRecursively = (letterArrays, result, depth, currentPossibility) => {
  // If current array has reached the end, add build up string to result
  if (depth === letterArrays.length) {
    result.push(currentPossibility);
    return;
  }

  // Recall the method for the current array. Will keep arriving here until at max depth
  letterArrays[depth].forEach(nextLetter => {
    generatePossibilitiesRecursively(letterArrays, result, depth + 1, `${currentPossibility}${nextLetter}`);
  });
};

/**
 * For any valid number string, returning the associated letters.
 * If number is not found, returning an mpty array
 *
 * @param {string} numberString
 */
const getLettersForOneNumber = numberString => {
  switch (numberString) {
    case '2':
      return ['a', 'b', 'c'];
    case '3':
      return ['d', 'e', 'f'];
    case '4':
      return ['g', 'h', 'i'];
    case '5':
      return ['j', 'k', 'l'];
    case '6':
      return ['m', 'n', 'o'];
    case '7':
      return ['p', 'q', 'r', 's'];
    case '8':
      return ['t', 'u', 'v'];
    case '9':
      return ['w', 'x', 'y', 'z'];
    case '0':
      return [' '];
    default:
      return [''];
  }
};

/**
 * For an array of digits, returning an array containing an
 * array of letters for each digit
 *
 * @param {array} digitArray
 */
const getLettersEachDigit = digitArray => digitArray.map(currentNumber => getLettersForOneNumber(currentNumber));

const NUMBER_REGEX = '^[234567890]+$';
const isValidNumber = number => new RegExp(NUMBER_REGEX).test(number);

const MAX_STRING_LENGTH = 12;
const exceedsMaxLength = numberString => numberString.length > MAX_STRING_LENGTH;

module.exports = {
  generatePossibilitiesRecursively,
  getLettersEachDigit,
  isValidNumber,
  exceedsMaxLength,
};
