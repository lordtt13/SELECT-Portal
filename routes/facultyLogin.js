var express               = require('express'),
    router                = express.Router() ,
    mongoose              = require("mongoose"),
    passportLocalMongoose = require("passport-local-mongoose"),
    passport              = require("passport"),
    User                  = require("../models/user")


router.get("/", function(req, res){
    res.render("login.ejs");
});


router.post("/", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
}), function(req, res){
});


router.get("/register", function(req, res){
    res.render("register.ejs");
});

router.post("/register", function(req, res){
    User.register(new User({username: req.body.username,email:'Email'}), req.body.username, function (err, user) {
        if (err) {
            console.log(err);
            return res.render("landing.ejs");
        }
        passport.authenticate("local")(req, res, function () {
            res.redirect("register.ejs");
        });
    });
});


module.exports=router;