var express = require("express");

// Create the router for the app
var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create all routes and their associated logic

// 
router.get("/", function(req, res) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

// Export routes for server.js to use
module.exports = router;