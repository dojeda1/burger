var connection = require("./connection.js");

var orm = {
    selectAll: function (table, callback) {
        var queryString = "SELECT * FROM ??;";
        connection.query(queryString, [table], function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            callback(result);
        });
    },
    insertOne: function (table, col, value) {
        var queryString = "INSERT INTO ?? (??, devoured) VALUES (?, FALSE);";
        connection.query(queryString, [table, col, value], function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            callback(result);
        });
    },
    updateOne: function (table, col, value, id) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE (id = ?);";
        connection.query(queryString, [table, col, value, id], function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            callback(result);
        });
    }
};


module.exports = orm;