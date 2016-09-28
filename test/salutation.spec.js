const chai = require('chai');
const expect = chai.expect;
const scoreFunction = require ('../index.js');


describe('scoreThrows', () => {

  it('should be a function', () => {
    expect(scoreFunction).to.be.a('function');
  });

    describe('throwing darts', () =>{

      it('should return a final score', () => {
        expect(scoreFunction([1,5,11])).to.equal(15);
      });

  });
});



