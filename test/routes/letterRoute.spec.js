/* eslint-disable no-underscore-dangle */

const { assert } = require('chai');
const httpMocks = require('node-mocks-http');
const { UNPROCESSABLE_ENTITY, OK } = require('http-status-codes');
const { computeLetters } = require('../../src/routes/letterRoute');

describe('Letter Router', () => {
  let mockRes;
  let mockReq;

  beforeEach(() => {
    mockRes = httpMocks.createResponse();
    mockReq = httpMocks.createRequest();
  });

  it('should return status ok when request body contains numbers', () => {
    mockReq._setBody({ number: '2' });
    computeLetters(mockReq, mockRes);
    assert.equal(mockRes.statusCode, OK);
  });

  it('should return status unprocessable when request body is empty', () => {
    computeLetters(mockReq, mockRes);
    assert.equal(mockRes.statusCode, UNPROCESSABLE_ENTITY);
    assert.equal(
      mockRes._getData().error,
      'Request body number field can only contain the following digits: 234567890'
    );
  });

  it('should return status unprocessable when request contains an invalid number', () => {
    mockReq._setBody({ number: 'abc' });
    computeLetters(mockReq, mockRes);
    assert.equal(mockRes.statusCode, UNPROCESSABLE_ENTITY);
    assert.equal(
      mockRes._getData().error,
      'Request body number field can only contain the following digits: 234567890'
    );
  });
});
