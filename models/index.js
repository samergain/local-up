
    //User: require("./user.model"),
    //Project: require("./project.model"),
    //Ticket: require("./ticket.model"),
    //Task: require("./task.model"),
    //Blog: require("./blog.model"),
    //Role: require("./role.model"),
    //ROLES: ["admin", "developer", "client"]


const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.ROLES = ["client", "admin", "developer"];
db.Project = require("./project.model");
db.Ticket = require("./ticket.model");
db.Blog = require("./blog.model");

module.exports = db;