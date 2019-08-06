// var path = require("path");
var friends = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var newFriendData = {
            name: req.body.name,
            picture: req.body.picture,
            scores: req.body.scores
        };
        // var scoresArray = [];
        // for (var i = 0; i < req.body.scores.length; i++) {
        //     scores.push(parseInt(req.body.scores[i]))
        // }
        // newFriendData.scores = scoresArray;
        // console.log("This is the scores array: " + scoresArray)
        // var compareScores = [];
        // for (var i = 0; i < friendsData.length; i++) {
        //     var compareCurrent = 0;
        //     for (var j = 0; j < newFriendData.scores.length; j++) {
        //         compareCurrent += Math.abs(newFriendData[j] - friendsData[i].scores[j]);
        //         console.log(compareCurrent);
        //     }
        //     compareScores.push(compareCurrent);
        // }
        // var yourMatch = 0;
        // for (var i = 1; i < compareScores.length; i++) {
        //     if (compareScores[i] <= compareScores[yourMatch]) {
        //         yourMatch = i;
        //     }
        // }

        // var FriendMatch = friendsData[yourMatch];
        friends.push(newFriendData);
        // res.json(FriendMatch);
    });
}
