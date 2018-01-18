var countLetters = function (letters){
  var count ;
  var letterCount = {};
  var lettersArray = letters.split(" ").join("").split("");
  for (var i = 0 ; i < lettersArray.length; i++) {
    count = 1;
    key = lettersArray[i];
    if(!(key in letterCount) ) {
      for (var j = i + 1 ; j < lettersArray.length; j++) {
        if (lettersArray[i] === lettersArray[j]) {
          count++;
        }
      }
      letterCount[key] = count;
    }
  }

  return letterCount;

};
console.log(countLetters("lighthouse in the house"));

