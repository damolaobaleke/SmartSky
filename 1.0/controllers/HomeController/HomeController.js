const express = require('express');
const User = require('../../models/users');
const { render } = require('ejs');


module.exports = {

    getHome:(req,res)=>{
        res.send({home: 'success'});
    }

    // getAllUsers: (req, res) => {
    //     User.find({}, async(err, usersInDb) => {
    //         if (!err) {
    //             res.render("Home/home", { data: usersInDb })
    //         }
    //     })
    // }

}