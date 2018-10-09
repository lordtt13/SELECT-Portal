var express = require('express');
var router  = express.Router();
var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/SELECT");



router.get('/login',function(req,res){
    res.render('register.ejs',{title:'Faculty'});
});

module.exports=router;