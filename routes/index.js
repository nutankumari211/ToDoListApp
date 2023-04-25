const express=require('express');

//create new router object
const router=express.Router();

//access home_controlller
const homeController=require('../controllers/home_controller');
console.log("home_controlller accessed");

//GET request, is requesting data from a specified source that is homeController
router.get('/', homeController.home);
console.log("home_controller called for get to get data");

console.log("router loaded");
module.exports=router;