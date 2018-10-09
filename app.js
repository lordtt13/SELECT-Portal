var express = require("express");
var bodyParser= require("body-parser");
var mongoose = require("mongoose");
var expressSanitizer = require("express-sanitizer");
var methodOverride = require("method-override");
var passport = require("passport");
var LocalStrategy  = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");

var app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.set("view engine","ejs");
app.use(express.static('public'));
mongoose.connect("mongodb://localhost/SELECT");
app.use(methodOverride("_method"));

var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model("User", UserSchema);

app.use(require("express-session")({
    secret: "SDC sucks",
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


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

app.get("/register", function(req, res){
    res.render("register.ejs");
});

app.post("/register", function(req, res){
    User.register(new User({username: req.body.username}), req.body.password, function (err, user){
        if(err) {
            console.log(err);
            return res.render("landing.ejs");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("register.ejs");
        });
    });
});

app.get("/login", function(req, res){
    res.render("login.ejs");
});


app.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
}), function(req, res){
});

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});


app.listen(63342,process.env.IP,function(){
    console.log("The Server has Started");
});
