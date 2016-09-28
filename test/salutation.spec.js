const chai = require('chai');
const expect = chai.expect;
const scoreThrows = require ('../index.js');

describe('scoreThrows', () => {

    it('should be a function', () => {
      expect(scoreThrows).to.be.a('function');
    });

    describe('scoring function', () =>{

      it('should return a final score', () => {
        expect(scoreThrows([1,2,3,4])).to.equal(140);
      });

  });
});



