// This Middleware will validate the token sent by the user in the Authorization header of the request.
// If the token is valid, then the user will be allowed to access the protected routes.

const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, res, next) => {
    let token;
    let authHeader = req.headers.Authorization || req.headers.authorization;
    // Why are there two options here?
    // Because the Authorization header is case-insensitive.
    // So, the user can send the token in either Authorization or authorization header.
    // We need to check both the options.

    if (authHeader && authHeader.startsWith('Bearer')) {
        // Extract the Token
        token = authHeader.split(' ')[1];

        // Verify the Token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            // Throw error if err exists
            if (err) {
                res.status(401);    // Unauthorized
                throw new Error('User is Not Authorized!');
            }

            // If Authorization Code is correct, attach the decoded user data to the request object's user property
            req.user = decoded.user;

            // Call the next() function to pass control to the next middleware function, which is currentUser() in userController.js
            next();
        })
    }
})

module.exports = validateToken;