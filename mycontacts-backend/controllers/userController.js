// To handle errors inside the now-async routes (without Try-Catch blocks), we need to use the Express-Async-Handler MIDDLEWARE.
const asyncHandler = require('express-async-handler');

// @desc    Register a user
// @route   POST/api/users/register
// @access  public
const registerUser = (req, res) => {
    res.status(200).json({ message: "Successfully Registered the User!" });
}

// @desc    Login a user
// @route   POST/api/users/login
// @access  public
const loginUser = (req, res) => {
    res.status(200).json({ message: "Successful Logged in the User!" });
};

// @desc    Get current user info
// @route   GET/api/users/current
// @access  private
const currentUser = (req, res) => {
    res.status(200).json({ message: "Successfully received Current User Information!" });
};

module.exports = { loginUser, registerUser, currentUser };