var express           = require("express"),
    bodyParser        = require("body-parser"),
    mongoose          = require("mongoose"),
    expressSanitizer  = require("express-sanitizer"),
    methodOverride    = require("method-override"),
    passport          = require("passport"),
    LocalStrategy     = require("passport-local");

var app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.set("view engine","ejs");
app.use(express.static('public'));
app.use(methodOverride("_method"));


mongoose.connect("mongodb://localhost/SELECT");


var User = require("./models/user");

app.use(require("express-session")({
    secret: "Anbarasan sucks",
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(function(req,res,next){
   res.locals.currentUser = req.user;
   next();
});

//Routes
var studentLogin  = require('./routes/studentLogin');
app.use('/stud_login',studentLogin);

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("10.50.215.115:63342/");
});


app.listen(63341,process.env.IP,function(){
    console.log("The Server has Started");
});
