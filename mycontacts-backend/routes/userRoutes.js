// Import controller methods
const { loginUser, registerUser, currentUser } = require('../controllers/userController');

// Create a Router
const express = require('express');
const router = express.Router();

// @desc   Register a user
router.route('/register').post(registerUser);

// @desc    Login a user
router.route('/login').post(loginUser);

// @desc    Get Current User Information
router.route('/current').get(currentUser);

// Export the Router
module.exports = router;