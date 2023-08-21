const mongoose = require('mongoose');

// Create a Schema for Users
const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Mandatory - Please add a Username"],
    },
    email: {
        type: String,
        required: [true, "Mandatory - Please add the user's Email Address"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Mandatory - Please add a Password"],
    }
}, {
    timestamps: true,
})

// Return a Model compiled from this Schema
module.exports = mongoose.model('User', userSchema);