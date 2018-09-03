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

var sSchema= new mongoose.Schema({
    empid:Number,name:String,dept:String,deg:String,mob:String,email:String,cabin:String
});

var school= mongoose.model("teacher",sSchema);

app.get('/', function (req, res) {
    var start=[{usecase:"Site Under Construction",
        image:"https://images.static-collegedunia.com/public/college_data/images/pdfthumb/1472706286PAT-brochure/full-0.jpg"}]
    res.render("landing.ejs",{start:start});
});


app.listen(63342,process.env.IP,function(){
    console.log("The Server has Started");
});