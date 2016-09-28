function scoreFunction(score){
  switch(score){
    case score < 5:
      return 10;
    case score >= 5 && score < 10:
      return 5;
    default:
      return 0;
  }
}

module.exports = scoreFunction();