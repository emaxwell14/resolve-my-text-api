module.exports = {
  computeLettersForNumber,
};

// TODO create error types
const ERROR_MSG_INVALID_NUMBER_PARAM = 'Request body number field must be an integer';
const ERROR_MSG_MISSING_NUMBER_PARAM = 'Request body must contain number field';

function computeLettersForNumber(number) {
  if (!Number.isInteger(number)) {
    const errorMsg = number ? ERROR_MSG_INVALID_NUMBER_PARAM : ERROR_MSG_MISSING_NUMBER_PARAM;
    throw Error(errorMsg);
  }

  return '';
}
