require('dotenv').config();
const express = require('express');
let mongoose = require('mongoose')
    flash =  require('connect-flash');
const passport = require('passport'),
    localStrategy = require('passport-local').Strategy;
const cookieParser = require("cookie-parser");


mongoose.connect("mongodb://localhost/smartsky_1", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })
mongoose.set('useFindAndModify', false);

const app = express();
let cors  =  require('cors');

app.use(express.urlencoded({ extended: true }))
//parse applications json
app.use(express.json())
app.use(cors());
app.set("view engine", "ejs");

//Models
const User  = require('./models/users');

//Define Routes
let homeRoute = require('./routes/HomeRoute/homeRoute');
let authRoute = require('./routes/authRoute/authRoute');

app.use(flash());


//set passport up for use
//PASSPORT CONFIG -------------------------MIDDLEWARE SETUP
app.use(require("express-session")({
    secret: "smartSky",
    resave: false,
    saveUninitialized: false
}));
app.use(cookieParser("smartSky"));
//initialize passport authentication
app.use(passport.initialize())
//persist login session
app.use(passport.session())

passport.use(new localStrategy(User.authenticate()));

//encrypt- encoding the data and store id of the (user) in the session
passport.serializeUser(User.serializeUser());

//retrieve the user details of the user by fetching the id from the session and then fetching the whole user details from your database --get user out of session
passport.deserializeUser(User.deserializeUser());
//PASSPORT CONFIG --------------------------MIDDLEWARE SETUP

//middleware to pass variables across app
app.use(function(req,res, next){
    res.locals.currentUser = req.user
    //res.locals.errorMsg = req.flash('error_message');
    next()
})


app.use('/',homeRoute)
app.use(authRoute);


app.use(function(req,res){
    res.status(404).send({error:'error 404'})
})

app.listen(3001, function() {
    console.log("smartsky listening on port 3001 ")
})