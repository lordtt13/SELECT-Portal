var express = require("express");
var app=express();
var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","ejs");

app.get('/', function (req, res) {
    var start=[{usecase:"Site Under Construction",image:"https://images.static-collegedunia.com/public/college_data/images/pdfthumb/1472706286PAT-brochure/full-0.jpg"}]
    res.render("landing",{start:start});
});


app.listen(process.env.PORT,process.env.IP,function(){
    console.log("The Server has Started");
});