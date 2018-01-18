var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};
//Identify who follows the most people
var followMostPeople = function() {
  var maxFollower = 0;
  var follower;
  for(var key in data) {
    var follows = data[key].follows.length;
    if(maxFollower < follows) {
      maxFollower = follows;
      follower = key;
    }
  }
  return (follower);
};

console.log("Maximum follow:" + followMostPeople());


var mostFollower = function() {
  var followObj = {};
  var max = 0;
  for(var key in data) {
      followObj[key] = 0;
    for(var keys in data) {
      data[keys].follows.forEach(function(follow) {
        if(key === follow) {
          followObj[key]++;
        }
      });
    }
  }
  for(var key in followObj) {
      if(max <= followObj[key]) {
        max = followObj[key];
      }

  }
    // console.lhow toog(Object.keys(followObj).filter(user => user === max));
    console.log("Maximum follower "+Object.keys(followObj).reduce((a, b) => followObj[a] > followObj[b] ? a : b));
};
mostFollower();

//most has most followers over 30
var mostFollowerOver30 = function() {
  var followObj = {};
  var max = 0;
  for(var key in data) {
      followObj[key] = 0;
    for(var keys in data) {
      data[keys].follows.forEach(function(follow) {
        if(key === follow && data[key].age > 30) {
          followObj[key]++;
        }
      });
    }
  }
  for(var key in followObj) {
    if(max <= followObj[key]) {
      max = followObj[key];
    }

  }
    // console.lhow toog(Object.keys(followObj).filter(user => user === max));
  console.log("Maximum follower age greater than 30 "+Object.keys(followObj).reduce((a, b) => followObj[a] > followObj[b] ? a : b));
};
mostFollowerOver30();

//indentify who follow someone that doesn't follow them back

var notFollowBack = function() {
  var notFollowList = { };
  for(var keys in data) {
    notFollowList[keys] = [];
    var follows = data[keys].follows;
    //console.log(follows);
    follows.forEach(function(key) {
      // console.log(data[key].follows);
      //
      var listFollow = data[key].follows.filter(follow => {
        //console.log(follow, keys +":");
          return follow === keys ;
      });
      if(!(listFollow.length > 0)){
        console.log("true");
        notFollowList[keys].push(key);
      }
    });



  }
console.log(notFollowList);
};

notFollowBack();




