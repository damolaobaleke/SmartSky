require('dotenv').config();
const express = require('express');
let bodyParser = require('body-parser'),
    mongoose = require('mongoose');
    flash =  require('connect-flash');
const passport = require('passport'),
    LocalStrategy = require('passport-local')
    uuid4 = require('uuid4');

mongoose.connect("mongodb://localhost/smartsky_1", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex:true })

const app = express();
let cors  =  require('cors');

app.use(express.urlencoded({ extended: true }))
//parse applications json
app.use(express.json())
app.use(cors());
app.set("view engine", "ejs");

const User  = require('./models/users');

app.use(flash());

//PASSPORT CONFIG
app.use(require('express-session')({ 
    secret: uuid4(), //used to encode and decode the sessions 
    resave: false,
    saveUninitialized: false
}))

//set passport up for use
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))

//encrypt- encoding the data and store id of the (user) in the session
passport.serializeUser(User.serializeUser());

//retrieve the user details of the user by fetching the id from the session and then fetching the whole user details from your database --get user out of session
passport.deserializeUser(User.deserializeUser());

//middleware to pass variables across app
app.use(function(req,res, next){
    res.locals.currentUser = req.user
    //res.locals.errorMsg = req.flash('error_message');
    //res.locals.successMsg = req.flash('success_message');
    next()
})


//define routes
let homeRoute = require('./routes/HomeRoute/homeRoute');
let authRoute = require('./routes/authRoute/authRoute');

app.use('/',homeRoute)
app.use(authRoute);


app.use(function(req,res){
    res.status(404).send({error:'error 404'})
})

app.listen(3001, function() {
    console.log("smartsky on port 3001 ")
})