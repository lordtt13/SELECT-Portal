var mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose");

var StudentUserSchema = new mongoose.Schema({
    regno : String,
    password : String
});

StudentUserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',StudentUserSchema);