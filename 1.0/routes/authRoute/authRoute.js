const express = require('express');
const router = express.Router();
const passport = require('passport');

let {register, verifyEmail, login, logout, getUser, updateUser} = require('../../controllers/authController/authController');

router.post('/sign-up', register);

router.get('/verify-email', verifyEmail);

//If gets into the controller, then its successful 
router.post('/login',login)

router.get('/landing',(req,res)=>{res.send({landingpage:'successful'})})

router.get('/logout', logout);

router.get('/profile/:id/', getUser);

router.put('/profile/:id/', updateUser);

module.exports = router


