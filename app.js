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

var teacherSchema= new mongoose.Schema({
    empid:Number,name:String,dept:String,deg:String,mob:String,email:String,cabin:String,rank:Number
});

var teacher= mongoose.model("teacher",teacherSchema);

app.get('/', function (req, res){
    res.render("landing.ejs");
});

app.get('/faculty',function(req,res){
    teacher.find({}, function(err, teachers){
        if(err){
            console.log(err);
        }
        else{
            var electrical=[],pedrive=[],instruments=[],controlauto=[];
            teachers.forEach(function(t){
                if(t.dept=="Electrical Engineering")
                    electrical.push(t);
                if(t.dept=="Instrumentation")
                    instruments.push(t);
                if(t.dept=="Energy and Power Electronics")
                    pedrive.push(t);
                if(t.dept=="Control and Automation")
                    controlauto.push(t);
                
            });
            sortTeachers(electrical);
            sortTeachers(pedrive);
            sortTeachers(instruments);
            sortTeachers(controlauto);
            res.render("faculty.ejs",{electrical:electrical, instruments:instruments,pedrive:pedrive,controlauto:controlauto});
            
            }
    });
    
    
});
app.get('/students', function (req, res){
    res.render("student.ejs");
});
app.get('/staff', function (req, res){
    res.render("staff.ejs");
});

app.listen(63342,process.env.IP,function(){
    console.log("The Server has Started");
});


function sortTeachers(teachers){
    var l= teachers.length;
    var i,j;
    for(i=l-1;i>0;i--){
        for(j=0;j<i;j++){
            if(teachers[j].rank>teachers[j+1].rank){
                var temp= teachers[j];
                teachers[j]=teachers[j+1];
                teachers[j+1]=temp;
            }
            else if(teachers[j].rank==teachers[j+1].rank){
                if(teachers[j].name>teachers[j+1].name){
                var temp= teachers[j];
                teachers[j]=teachers[j+1];
                teachers[j+1]=temp;
            }
            }
        }
    }
    
}