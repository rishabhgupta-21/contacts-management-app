// To handle errors inside the now-async routes (without Try-Catch blocks), we need to use the Express-Async-Handler MIDDLEWARE.
const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

// @desc    Register a user
// @route   POST/api/users/register
// @access  public
const registerUser = asyncHandler(async (req, res) => {
    // To register, we need username, email, password
    const { username, email, password } = req.body;
    // Validation Check
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are Mandatory!")
    }

    // Check if the user already exists
    const userAvailable = await User.findOne({ email });
    if (userAvailable) {
        res.status(400);
        throw new Error("User already exists!");
    }

    // Auto-Salt and Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    console.log(`Hashed Password: ${hashedPassword}`);

    // Register (Create) the user
    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    });

    console.log(`User created: ${user}`);

    if (user) {
        res.status(201).json({ _id: user.id, username: user.username, email: user.email });
    } else {
        res.status(400);
        throw new Error("Invalid User Data!");
    }
});

// @desc    Login a user
// @route   POST/api/users/login
// @access  public
const loginUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Successful Logged in the User!" });
});

// @desc    Get current user info
// @route   GET/api/users/current
// @access  private
const currentUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: "Successfully received Current User Information!" });
});

module.exports = { loginUser, registerUser, currentUser };