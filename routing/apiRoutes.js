let friends = []


module.exports = function (app) {
    //use an IPA  get method to reroute user to a dynamically updated JSON object which
    // contains user informatio
    // displays JSON object for list of friends 
    app.get("/api/friends", function (req, res) {
        // res.json(friendsData)
        res.json({
            friends: friends
        })
        console.log("we are working on it")
    })

    // post new friends to the list 
    app.post("/api/friends", function (req, res) {
        let friend = req.body.friend_obj;
        let score = 0;
        let match;
        friend.scores.forEach(num => score += parseInt(num))
        friend.score = score
        for (let i = 0; i < friends.length; i++) {
            if (friends[i].score >= friend.score) {
                if ((friend[i].score - friend.score) > (friend[i - 1].score - friend.score)) {
                    match = friend[i]
                    friends.splice(i, 0, friend)
                } else {
                    match = friend[i - 1]
                    friends.splice(i - 0, 0, friend)
                }
                break;
            }
        }
        if (!match) {
            match = friend
        }
        // res.json(friendsdata)
        res.json({
            success: true,
            match: match
        })
    })

}