const generatePossibilitiesRecursively = (currentLetterArrays, result, depth, currentPossibility) => {
  // If current array has reached the end, add build up string to result
  if (depth === currentLetterArrays.length) {
    result.push(currentPossibility);
    return;
  }

  // Loop over the current array at a certain depth. Will keep arriving here until at max depth
  currentLetterArrays[depth].forEach(nextLetter => {
    generatePossibilitiesRecursively(currentLetterArrays, result, depth + 1, `${currentPossibility}${nextLetter}`);
  });
};

const getLettersForOneNumber = number => {
  switch (number) {
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
      return [];
  }
};

const getLettersEachDigit = digitArray => digitArray.map(currentNumber => getLettersForOneNumber(currentNumber));

const convertNumberToDigitArray = number => number.toString().split('');

module.exports = {
  generatePossibilitiesRecursively,
  getLettersEachDigit,
  convertNumberToDigitArray,
};
