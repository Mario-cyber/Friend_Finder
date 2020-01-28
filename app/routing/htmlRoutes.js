// set up get requests for specific URL paths 
// do this as an export so it can be run on our server file 
const path = require("path")
module.exports = function (app) {
    // shows our survey when our the url is compleated with the extention "/survey"
    app.get("/survey", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"));

    });

    app.get("/dummy.js", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/dummy.js"));
    })

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
};