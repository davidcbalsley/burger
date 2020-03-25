// Import MySQL connection
var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function() {
        // Nothing yet
    },
    updateOne: function() {
        // Nothing yet
    }
}

module.exports = orm;