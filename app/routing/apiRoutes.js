var path = require("path");
var friends = require("../data/friends.js");

module.exports = function (app){

app.get("/api/friends", function(req, res){
 res.json(friends);
});
app.post("/api/friends", function(req, res) {
    var newFriendData = {
        name: req.body.name,
        picture: req.body.picture,
        scores: []
    };
    var scoresArray = [];
    for (var i=0; i , req.body.scores.length; i++){
        scoresArray.push( parseInt(req.body.scores[i]))
    }
    newFriendData.scores = scoresArray;
 var compareScores = [];
 for (var i=0; i < friendsData.length; i++){
     var compareCurrent = 0;
 for (var k=0; k < newFriendData.scores.length; k++){
     compareCurrent += Math.abs(newFriendData[k] - friendsData[i].scores[k]);
 }
 compareScores.push(compareCurrent);
}
var yourMatch = 0;
for (var i=1; i < compareScores.length; i++){
    if(compareScores[i] <= compareScores[yourMatch]){
        yourMatch = i;
    }
}

var FriendMatch = friendsData[yourMatch];

req.json(FriendMatch);

friendsData.push(newFriendData);
});
}
