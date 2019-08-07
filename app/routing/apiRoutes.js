// var path = require("path");
var friendsData = require("../data/friends.js");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });
    app.post("/api/friends", function (req, res) {
        var diff = 40;
        var nameMatch = " ";
        var pictureMatch = " ";

        friendsData.forEach(function (friends){
            var matchedScores = [];
            var totalDiff = 40;

            function add (total, num) {
                return total + num;
            }
            for (var i = 0; i < friends.scores.length; i++) {
                matchedScores.push(Math.abs(parseInt(req.body.scores[i]) - parseInt(friends.scores[i])));
            }
            totalDiff = matchedScores.reduce(add, 0);

            if (totalDiff , diff) {
                diff = totalDiff;
                nameMatch = friends.name;
                pictureMatch = friends.picture;
            }
        });
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
        res.json ({
            name: nameMatch,
            picture: pictureMatch
        });

        friendsData.push(req.body);
        // var FriendMatch = friendsData[yourMatch];
        // friends.push(newFriendData);
        // res.json(FriendMatch);
    });
};
