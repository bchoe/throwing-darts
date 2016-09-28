function scoreThrows(score){
  if(score < 5){
    return 10;
  } else if(score >= 5 && score <10){
    return 5;
  } else {
    return 0;
  }
}


function scoreFunction(arr){
  let finalScore = 0;
  for (let i = 0; i < arr.length; i++){
    finalScore += scoreThrows(arr[i]);
  }
  if (finalScore === (arr.length) * 10){
    finalScore += 100;
  }
  return finalScore;
}

console.log(scoreFunction([1,2,3]));
console.log(scoreFunction([6,7,8]));
module.exports = scoreThrows;


/*switch(score){
    case score < 5:
      return 10;
    case score >= 5 && score < 10:
      return 5;
    default:
      return 0;
  }*/
