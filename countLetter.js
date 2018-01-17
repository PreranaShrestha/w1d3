var couLet = function countLetters(letters) {
  var count ;
  var letterCount = {};
  var lettersArray = letters.split("");
  for (var i = 0 ; i < lettersArray.length; i++) {
    count = 1;
    key = lettersArray[i];
    if(key !== " " && !(key in letterCount) ) {
      for (var j = i + 1 ; j < lettersArray.length; j++) {
        if (lettersArray[i] === lettersArray[j]) {
          count = count + 1;
        }
      }
      letterCount[key] = count;
    }
  }

  return letterCount;
};
console.log(couLet("lighthouse in the house"));