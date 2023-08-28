// Import controller methods
const { getAllContacts, createContact, getContact, updateContact, deleteContact } = require('../controllers/contactController');
const validateToken = require('../middleware/validateTokenHandler');

// Create a Router
const express = require('express');
const router = express.Router();

// Use Validate Token Middleware before accessing any Route
router.use(validateToken);

// Define each Route, and then use .get()/post()/put()/delete() method to handle HTTP request

// @desc    Get all contacts && Create a contact
router.route('/').get(getAllContacts).post(createContact);

// @desc    Get a single Contact && Update a Contact && Delete a Contact
router.route('/:id').get(getContact).put(updateContact).delete(deleteContact);

// Exporting the Router
module.exports = router;