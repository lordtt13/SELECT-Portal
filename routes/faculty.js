var express = require("express");
var mongoose = require("mongoose");
var router= express.Router();
mongoose.connect("mongodb://localhost/SELECT");

//Routes


var teacherSchema= new mongoose.Schema({
    empid:Number,name:String,dept:String,deg:String,mob:String,email:String,cabin:String,rank:Number
});
var teacher= mongoose.model("teacher",teacherSchema);
router.get('/',function(req,res){
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
    });});
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
module.exports=router;