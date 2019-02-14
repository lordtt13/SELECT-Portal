var express               = require('express'),
    router                = express.Router() ,
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    User                  = require("../models/user"),
    generator             = require('generate-password'),
    nodemailer            = require('nodemailer');
var teacher= mongoose.model("teacher");

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {

    }
});

var mailOptions = {
    from: "",
    to: '',
    subject: '',
    body: ''
};


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
    console.log(password);
    teacher.find({email:req.body.email},function(err,teachers){
        if(teachers.length==1) {
            User.register(new User({username: teachers[0].empid+''}),password,
                 function (err, user) {
                    if (err) {
                        console.log(err);
                        return res.render("landing.ejs");
                    }
                    mailOptions.text='Your Pass Word for the Select portal is '+ password;
                   transporter.sendMail(mailOptions, function(error, info){
                         if (error) {
                             console.log(error);
                         } else {
                             console.log('Email sent: ' + info.response);
                         }
                     });
                    res.redirect('/fac_login/');

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
    console.log(password);
    return password;
}

module.exports=router;