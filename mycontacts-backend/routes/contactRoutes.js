// Import controller methods
const { getAllContacts, createContact, getContact, updateContact, deleteContact } = require('../controllers/contactController');

// Create a Router
const express = require('express');
const router = express.Router();

// Define each Route, and then use .get() method to handle GET request

// @desc    Get all contacts && Create a contact
router.route('/').get(getAllContacts).post(createContact);

// @desc    Get a single Contact && Update a Contact && Delete a Contact
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

// Exporting the Router
module.exports = router;