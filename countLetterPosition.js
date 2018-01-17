var letInd = function lettersIndices(letters) {
  var letterInd = {};
  var lettersArray = letters.split("");
  for (var i = 0 ; i < lettersArray.length; i++) {

    count = 1;
    key = lettersArray[i];
    if(key !== " " && !(key in letterInd)) {
      letterInd[key] = [];
      for (var j = i  ; j < lettersArray.length; j++) {
        if(key === letters[j]) {
        letterInd[key].push(j);
        //console.log(letterInd);
        }
      }

    }
  }

  return letterInd;
};
console.log(letInd("lighthouse in the house"));