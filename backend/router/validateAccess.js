const express = require('express');
const router = express.Router();
const { signupController } = require('../controllers/SignupController');
const { loginController } = require('../controllers/loginController');
const { UpdateUserDetails } = require('../controllers/UpdateUserDetails');
const { viewDrivers } = require('../controllers/viewDriver');
const { addDriver } = require('../controllers/adddrivers');
const { deleteDriver } = require('../controllers/deleteDriver');


router.route('/signup').post(signupController);
router.route('/signin').post(loginController);
router.route('/updateuserdetails').post(UpdateUserDetails);
router.route('/viewdrivers').post(viewDrivers);
router.route('/adddriver').post(addDriver);
router.route('/deletedriver').post(deleteDriver);

module.exports = router;