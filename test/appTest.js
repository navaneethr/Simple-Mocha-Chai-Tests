const assert = require('chai').assert;
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe('Hello Tests', function () {
   it('Should return Hello', function () {
      assert.equal(sayHello(), 'hello');
   });
   
   it('should return string', function () {
      assert.typeOf(sayHello(), 'string');
   });
});

describe('AddNumber Tests', function () {
   it('should be greater than 7', function () {
       assert.isAbove(addNumbers(2,7), 7);
   });
   it('should return number', function () {
       assert.typeOf(addNumbers(7,7), 'number');
   });
});