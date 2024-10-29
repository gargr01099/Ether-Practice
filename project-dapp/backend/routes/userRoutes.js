const express = require("express");
const {saveUserData} = require("../controllers/userController");
const router = express.Router();    

router.post("/save-user", saveUserData);

module.exports = router;