// define your dependencies 

var express = require("express");
var path = require("path");
// inform node we are creating a "express" server :
var app = express();
// Sets an initial port.
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
// this is boiler-plate stuff
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// add our required files for URL routes

require("../app/routing/htmlRoutes")(app)
require("../app/routing/apiRoutes")




// add a listener to our server this "starts" the server

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});