// Import controller methods
const { loginUser, registerUser, currentUser } = require('../controllers/userController');

// Create a Router
const express = require('express');
const validateToken = require('../middleware/validateTokenHandler');
const router = express.Router();

// @desc   Register a user
router.post('/register', registerUser);

// @desc    Login a user
router.post('/login', loginUser);

// @desc    Get Current User Information
router.route('/current').get(validateToken, currentUser);
// router.get('current', validateToken, currentUser);

// Why are we passing two arguments to the .post() method?
// Because we need to pass the validateToken middleware as well.
// The validateToken middleware will validate the token sent by the user in the Authorization header of the request.
// If the token is valid, then the user will be allowed to access the protected routes.

// I'm confused as to what a MIDDLEWARE actually is. Can you explain when we call something as a middleware?
// A Middleware is a function that has access to the request and response objects.
// It can execute any code, make changes to the request and response objects, end the request-response cycle, and call the next middleware in the stack.
// If the current middleware function does not end the request-response cycle, then it must call next() to pass control to the next middleware function.
// Otherwise, the request will be left hanging.

// Export the Router
module.exports = router;