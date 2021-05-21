const express = require('express');
const router = express.Router();

let { getHome } = require('../../controllers/HomeController/HomeController')


router.get("/", getHome);

//router.get("/allusers", getAllUsers)

module.exports = router;