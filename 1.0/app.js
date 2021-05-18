require('dotenv').config();
const express = require('express');
let bodyParser = require('body-parser'),
    mongoose = require('mongoose');
passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect("mongodb://localhost/smartsky_1", { useNewUrlParser: true, useUnifiedTopology: true })

const app = express();
app.set("view engine", "ejs");



//define routes

let homeRoute = require('./routes/HomeRoute/homeRoute')

app.use(homeRoute)

app.use(function(req,res){
    res.status(404).send({error:'error 404'})
})

app.listen(3001, function() {
    console.log("smartsky on port 3001 ")
})