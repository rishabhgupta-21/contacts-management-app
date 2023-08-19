const express = require('express');
const router = express.Router();

// Define each Route, and then use .get() method to handle GET request

// @desc    Get all contacts
router.route('/').get((req, res) => {
    res.status(200).json({ message: 'Get all Contacts' });
})

// @desc    Create a contact
router.route('/').post((req, res) => {
    res.status(200).json({ message: 'Create Contact' });
})

// @desc    Get a single Contact
router.route('/:id').get((req, res) => {
    res.status(200).json({ message: `Get Contact ${req.params.id}` });
})

// @desc    Update a Contact
router.route('/:id').put((req, res) => {
    res.status(200).json({ message: `Update Contact ${req.params.id}` });
})

// @desc    Delete a Contact
router.route('/:id').delete((req, res) => {
    res.status(200).json({ message: `Delete Contact ${req.params.id}` });
})

// Exporting the Router
module.exports = router;