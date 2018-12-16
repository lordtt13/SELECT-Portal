var app         = require('express'),
    router      = app.Router(),
    mongoose    = require('mongoose');

mongoose.connect("mongodb://localhost/SELECT");

router.get('/',isLoggedIn,function (req,res) {
    res.render('dashboard.ejs');

})

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/fac_login');
    }
}
module.exports = router;