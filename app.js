var express = require("express");
var bodyParser= require("body-parser");
var mongoose = require("mongoose");
var expressSanitizer = require("express-sanitizer");
var methodOverride = require("method-override");

var app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.set("view engine","ejs");
app.use(express.static('public'));
mongoose.connect("mongodb://localhost/SELECT");
app.use(methodOverride("_method"));

//Routes
var faculty=require('./routes/faculty');
var facultyLogin  =require('./routes/facultyLogin')


app.use('/faculty',faculty);
app.use('/fac_login',facultyLogin);


app.get('/', function (req, res){
    res.render("landing.ejs");
});

app.get('/students', function (req, res){
    res.render("student.ejs");
});

app.get('/staff', function (req, res){
    res.render("staff.ejs");
});

app.get('/administration',function(req,res){
    res.render("administration.ejs");
});



app.listen(63342,process.env.IP,function(){
    console.log("The Server has Started");
});
