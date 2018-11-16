module.exports = {
  computeLettersForNumber,
};

// TODO create error types
const ERROR_MSG_INVALID_NUMBER_PARAM = 'Request body number field must be an integer';
const ERROR_MSG_MISSING_NUMBER_PARAM = 'Request body must contain number field';

const convertNumberToDigitArray = number => number.toString().split('');

function computeLettersForNumber(number) {
  if (!Number.isInteger(number)) {
    const errorMsg = number ? ERROR_MSG_INVALID_NUMBER_PARAM : ERROR_MSG_MISSING_NUMBER_PARAM;
    throw Error(errorMsg);
  }

  const numbersEnteredArray = convertNumberToDigitArray(number);

  const allLetterArrays = [];
  numbersEnteredArray.forEach(currentNumber => {
    allLetterArrays.push(getLettersForOneNumber(currentNumber));
  });

  // Need to define result here as it is being passed through the recursive method
  const result = [];
  generatePossibilitiesRecursively(allLetterArrays, result, 0, '');
  return result;
}

function generatePossibilitiesRecursively(currentLetterArrays, result, depth, currentPossibility) {
  // If current array has reached the end, add build up string to result
  if (depth === currentLetterArrays.length) {
    result.push(currentPossibility);
    return;
  }

  // Loop over the current array at a certain depth. Will keep arriving here until at max depth
  currentLetterArrays[depth].forEach(nextLetter => {
    generatePossibilitiesRecursively(currentLetterArrays, result, depth + 1, `${currentPossibility}${nextLetter}`);
  });
}

function getLettersForOneNumber(number) {
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
}
