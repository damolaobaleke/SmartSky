const express = require('express');
let router = express.Router();

let { storeUser, getAllUsers } = require('../../controllers/HomeController/HomeController')


router.get("/", storeUser);

router.get("/allusers", getAllUsers)

module.exports = router;