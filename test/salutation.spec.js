const chai = require('chai');
const expect = chai.expect;
const scoreThrows = require ('../index.js');

describe('scoreThrows', () => {

  it('should be a function', () => {
    expect(scoreThrows).to.be.a('function');
  });

});


describe('scoreFunction', () => {

  it('should be a function', () => {
    expect(scoreFunction).to.be.a('function');
  });

});

