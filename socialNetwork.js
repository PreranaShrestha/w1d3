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
console.log("Who follows the most people");
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
console.log("Who has the most follower:");
console.log(mostFollower());

////Identify who follows the most people above 30
var followMostAbove30 = function() {
  var followList = {};
  for(var id in data) {
    var follows = data[id].follows;
    followList[id] = follows.length;
  }
  var vals = Object.keys(followList).map(function(key) {
    return followList[key];
  });
  var max = Math.max(...vals);
  var maxFollows = Object.keys(followList).filter(function(follow){
    return followList[follow] === max;
  });
  return maxFollows.filter(function(id) {
    return data[id].age > 30;

  });

};
console.log("Has most follow above 30:");
console.log(followMostAbove30());

//who has the most follower above 30
var mostFollowerAbove30 = function() {
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
  var maxFollowers = Object.keys(followerList).filter(function(follow){
    return followerList[follow] === max;
  });
  return maxFollowers.filter(function(id) {
  return data[id].age > 30;
});
};
console.log("Most followers above 30:");
console.log(mostFollowerAbove30());

//indentify who follow someone that doesn't follow them back
var notFollowBack = function() {
  var notFollowList = {};
  for(var keys in data) {
    notFollowList[keys] = [];
    var follows = data[keys].follows;
    follows.forEach(function(key) {
      var listFollow = data[key].follows.filter(follow => {
          return follow === keys ;
      });
      if(!(listFollow.length > 0)){
        notFollowList[keys].push(key);
      }
    });
  }
return(notFollowList);
};
console.log("Who doesnot follow back:");
console.log(notFollowBack());


//list all the name who follow and who follow them

var listFollowFollower = function() {
  var followFollowerList = {};
  for(var id in data) {
    followFollowerList[id] = {
      name: data[id].name,
      follows: [],
      followers: []

    };
    data[id].follows.forEach(function(follow) {
      followFollowerList[id].follows.push(data[follow].name);
    });
    for(var idNext in data) {
      data[idNext].follows.forEach(function(follow) {
        if(follow === id) {
          followFollowerList[id].followers.push(data[idNext].name);
        }
      });
    }
  }
  return followFollowerList;
};
console.log("List of follower and Follow:");
console.log(listFollowFollower());

// List of everyone and their reach
var listOfReach = function () {
  var follower;
  var reach = {};
  for (var id in data) {
    reach[id] = [];
    for (var id1 in data) {
      follower = data[id1].follows.filter(function (follow) {
        return follow === id;
      });
      if (follower.length !== 0) {
          reach[id].push(id1);
      }
    }

  }
  return(reach);
}
console.log("List of everyone and their reach");
console.log(listOfReach());

