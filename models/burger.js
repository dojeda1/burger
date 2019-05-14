var orm = require("../config/orm.js");

var burger = {
    selectAll: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res);
        });
    },
    insertOne: function (val, callback) {
        orm.insertOne("burgers", "burger_name", "devoured", val, "FALSE", function (res) {
            callback(res);
        });
    },
    updateOne: function (val, id, callback) {
        orm.updateOne("burgers", "devoured", val, "id", id, function (res) {
            callback(res);
        });
    }
};

module.exports = burger;