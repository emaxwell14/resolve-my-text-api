/* eslint-disable no-underscore-dangle */

const { assert } = require('chai');
const httpMocks = require('node-mocks-http');
const { computeLetters } = require('../../src/routes/letterRoute');

describe('Letter Router', () => {
  let mockRes;
  let mockReq;

  beforeEach(() => {
    mockRes = httpMocks.createResponse();
    mockReq = httpMocks.createRequest();
  });

  it('when request body contains numbers should return status ok', () => {
    mockReq._setBody({ number: 123 });
    computeLetters(mockReq, mockRes);
    assert.equal(mockRes.statusCode, 200);
  });

  it('when request body is empty should return status unprocessable', () => {
    computeLetters(mockReq, mockRes);
    assert.equal(mockRes.statusCode, 422);
    assert.equal(mockRes._getData().error, 'Request body must contain number field');
  });

  it('when request contains an invalid number should return status unprocessable', () => {
    mockReq._setBody({ number: 'abc' });
    computeLetters(mockReq, mockRes);
    assert.equal(mockRes.statusCode, 422);
    assert.equal(mockRes._getData().error, 'Request body number field must be an integer');
  });
});
