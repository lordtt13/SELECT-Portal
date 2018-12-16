var express               = require('express'),
    router                = express.Router() ,
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    User                  = require("../models/studentuser"),
    generator             = require('generate-password');

var student= mongoose.model("student");


router.get("/", function(req, res){
    res.render("login.ejs",{query:req.query});
});


router.post("/", passport.authenticate("local", {
    successRedirect: "/faculty",
    failureRedirect: "?error=402",
}));


module.exports=router;