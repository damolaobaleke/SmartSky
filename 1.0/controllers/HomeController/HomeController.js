const express = require('express');
const User = require('../../models/users');
const { render } = require('ejs');


module.exports = {

    storeUser: (req, res) => {
        User.find({}, (err, userInDb) => {
            const users = !err ? userInDb : console.log(err);
            res.send({ data: users });
        })
    },

    getAllUsers: (req, res) => {
        User.find({}, async(err, usersInDb) => {
            if (!err) {
                res.render("Home/home", { data: usersInDb })
            }
        })
    }

}