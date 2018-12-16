var app               = require('express'),
    router                = app.Router() ,
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    User                  = require("../models/user");

var teacher=mongoose.model("teacher");

router.get('/',function (req,res,) {
    res.render('research.ejs');
});

module.exports=router;