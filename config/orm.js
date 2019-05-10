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
    insertOne: function (table, col1, col2, val1, val2, callback) {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?);";
        connection.query(queryString, [table, col1, col2, val1, val2], function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            callback(result);
        });
    },
    updateOne: function (table, col1, val1, col2, val2, callback) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE (?? = ?);";
        connection.query(queryString, [table, col1, val1, col2, val2], function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            callback(result);
        });
    }
};


module.exports = orm;