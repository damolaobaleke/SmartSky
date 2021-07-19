const User  = require('../models/users');
const passport = require('passport')
const localStrategy = require("passport-local").Strategy;


passport.use(new localStrategy(User.authenticate()));

//encrypt- encoding the data and store id of the (user) in the session
passport.serializeUser(User.serializeUser());

//retrieve the user details of the user by fetching the id from the session and then fetching the whole user details from your database --get user out of session
passport.deserializeUser(User.deserializeUser());
