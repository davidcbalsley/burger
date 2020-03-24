var express = require("express");

// Create the router for the app
var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

// Create all routes and their associated logic
router.get("/", function(req, res) {
    // Nothing yet
});

// Export routes for server.js to use
module.exports = router;