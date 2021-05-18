const express = require('express');
const router = express.Router();

let {register} = require('../../controllers/authController/authController');

router.post('/sign-up',register);

router.get('/verify-email')
