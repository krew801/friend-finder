//Declaring dependancies based on what we need.
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

//Setting up our ports/default port.
const PORT = process.env.PORT || 8080;


//Creating an instance of an Express server(so we can use it for the rest of our application as well as routing)
app.use(express.static(path.join(__dirname, "./app/public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


//Setting up the app routes.
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing'htmlRoutes"))(app);

//Listening to our PORT
app.listen(PORT, () => {
    console.log("App is listening on PORT: " + PORT);
});