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
var followMost = function() {
  var followList = {};
  for(var id in data) {
    var follows = data[id].follows;
    followList[id] = follows.length;
  }
  var vals = Object.keys(followList).map(function(key) {
    return followList[key];
  });

  var max = Math.max(...vals);
  return Object.keys(followList).filter(function(follow){
    return followList[follow] === max;

  });
};

console.log(followMost());


//who has the most follower
var mostFollower = function() {
  var followerList = [];
  for(var id in data) {
    followerList[id] = 0;
    for(var id1 in data) {
      var follows = data[id1].follows;
      follows.forEach(function(follow) {
        if(id === follow) {
          followerList[id] += 1;
        }
      });
    }
  }
  var vals = Object.keys(followerList).map(function(key) {
    return followerList[key];
  });

  var max = Math.max(...vals);
  return Object.keys(followerList).filter(function(follow){
    return followerList[follow] === max;
  });
return followerList;
};
console.log(mostFollower());

