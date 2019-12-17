// require express and path for re-routing purposes 
var path = require("path");

// set up get requests for specific URL paths 
// do this as an export so it can be run on our server file 

module.exports = function (app) {
    // shows our survey when our the url is compleated with the extention "/survey"
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};