var app               = require('express'),
    router                = app.Router() ,
    mongoose              = require("mongoose"),
    passport              = require("passport"),
    User                  = require("../models/user");

var teacher=mongoose.model("teacher");
var hello='anshu';
router.get('/',function (req,res,) {
    res.render('projects.ejs',{msg:hello});
});

router.get('/submit',function(req,res){
    res.render('submitForm.ejs');
});
router.post('/submit',function(req,res){

    hello=req.body.name1;
    res.redirect('../')
})

module.exports=router;