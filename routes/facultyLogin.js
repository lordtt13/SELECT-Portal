var express = require('express');
var router  = express.Router();

router.get('/',function(req,res){
    res.render('login.ejs',{title:'Faculty'});
});

module.exports=router;