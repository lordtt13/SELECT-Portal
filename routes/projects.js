var app               = require('express'),
    router                = app.Router() ,
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    User                  = require("../models/user");

var teacher=mongoose.model("teacher");

module.exports=router;