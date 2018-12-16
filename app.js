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
    secret: "SDC sucks",
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
var faculty         =require('./routes/faculty');
var facultyLogin    =require('./routes/facultyLogin');
var dashboard       =require('./routes/dashboard');
var publications    =require('./routes/publications');
var projects        =require('./routes/projects');
var research        =require('./routes/research')

app.use('/faculty',faculty);
app.use('/fac_login',facultyLogin);
app.use('/dashboard',dashboard);
app.use('/publications',publications);
app.use('/research',research);
app.use('/projects',projects);



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




//TODO: We can ask them to enter their email id check it with already existing database and then generate a random password and send it to them

app.get("/logout", function(req, res){
    req.logout();
    res.redirect("/");
});


app.listen(63342,process.env.IP,function(){
    console.log("The Server has Started");
});

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()) {
        next();
    } else {
        res.redirect('/fac_login');
    }
}
