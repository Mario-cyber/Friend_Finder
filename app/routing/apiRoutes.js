module.exports = function (app) {

    //use an IPA  get method to reroute user to a dynamically updated JSON object which
    // contains user information


    // displays JSON object for list of friends 
    app.get("api/friends", function (err, res) {

        res.json(friendsdata)

        console.log("we are working on it")
    })

    // post new friends to the list 
    app.post("/api/friends", function (err, res) {

        res.json(friendsdata)

        console.log("we are STILL working on it")

    })

}