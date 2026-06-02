// require express
const express = require("express")

//Router
const router = express.Router();
//require controller
const loginController = require("../controllers/validation/authAdmin.controller")
//Init Method Request
router.post("/login",loginController)
//Eport
module.exports=router;