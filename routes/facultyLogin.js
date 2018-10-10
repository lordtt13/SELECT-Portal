var express               = require('express'),
    router                = express.Router() ,
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    User                  = require("../models/user"),
    generator             = require('generate-password');

var teacher= mongoose.model("teacher");


router.get("/", function(req, res){
    res.render("login.ejs",{query:req.query});
});


router.post("/", passport.authenticate("local", {
    successRedirect: "/faculty",
    failureRedirect: "?error=402",
}));


router.get("/register", function(req, res){
    res.render("register.ejs",{query: req.query});
});

router.post("/register", function(req, res){
    var password = generatePassword();
    teacher.find({email:req.body.email},function(err,teachers){
        if(teachers.length==1) {
            User.register(new User({username: teachers[0].empid+''}),password,
                 function (err, user) {
                    if (err) {
                        console.log(err);
                        return res.render("landing.ejs");
                    }
                    res.redirect('/fac_login');
                });
        } else {
            res.redirect('?error=401');
        }
    });

});

function generatePassword(){
    var password = generator.generate({
        length:6,
        numbers:true
    });
    return password;
}

module.exports=router;