const assert = require('chai').assert;

const sampleScript = require('../lib/sampleScript');

describe('testing testing', function() {
    describe('testFunc', function() {
        it('should return 1 when used with input "1"', function() {
            assert.equal(sampleScript.testFunc(1), 1);
        });
        it('should return -1 when used with inputs that are not "1"', function() {
            assert.equal(sampleScript.testFunc(2), -1);
            assert.equal(sampleScript.testFunc("string"), -1);
            assert.equal(sampleScript.testFunc(0), -1);
            assert.equal(sampleScript.testFunc(-1), -1);
        });
    });
});