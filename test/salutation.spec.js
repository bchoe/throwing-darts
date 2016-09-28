const chai = require('chai');
const expect = chai.expect;
const scoreFunction = require ('../index.js');

describe('scoreThrows', () => {

  it('should be a function', () => {
    expect(scoreFunction).to.be.a('function');
  });



});
