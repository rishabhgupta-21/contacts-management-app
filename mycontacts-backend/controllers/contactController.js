// Controllers will contain the LOGIC for all our Responses to all Requests.
// Controllers will also connect with our Database.

// Whenever we interact with MongoDB, we always get a Promise. Sooooo
// To handle errors inside the now-async routes (without Try-Catch blocks), we need to use the Express-Async-Handler MIDDLEWARE.
const asyncHandler = require('express-async-handler');

// Applying CRUD Operations for each API - only for the particular logged-in user that makes the request.
const Contact = require('../models/contactModel');


// @desc    Get all contacts
// @route   GET /api/contacts
// @access  private
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });            // {} specifies that we want to find ALL the contacts.
    res.status(200).json(contacts);
})

// @desc    Create a contact
// @route   POST /api/contacts
// @access  private
const createContact = asyncHandler(async (req, res) => {
    // console.log(req.body);
    const { name, email, phone } = req.body;

    // Error Handling
    // 400 - Bad Request
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All fields are Mandatory!');
    }

    // Create a new Contact
    const contact = await Contact.create({
        user_id: req.user.id,
        name: name,
        email: email,
        phone: phone
    })

    res.status(201).json(contact);                // 201 - Resource Created
})

// @desc    Get a single Contact
// @route   GET /api/contacts/:id
// @access  private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findOne({ user_id: req.user.id, _id: req.params.id });

    // Handle potential error - if the contact with this ID is not found - 404
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found!');
    }

    res.status(200).json(contact);
})

// @desc    Update a Contact
// @route   PUT /api/contacts/:id
// @access  private
const updateContact = asyncHandler(async (req, res) => {
    // Check if contact is found first
    const contact = await Contact.findOne({ user_id: req.user.id, _id: req.params.id });
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found!');
    }

    // Update the contact
    const updatedContact = await Contact.findOneAndUpdate({ user_id: req.user.id, _id: req.params.id }, req.body, { new: true });

    res.status(200).json(updatedContact);
})

// @desc    Delete a Contact
// @route   DELETE /api/contacts/:id
// @access  private
const deleteContact = asyncHandler(async (req, res) => {
    // Check if contact is found first
    const contact = await Contact.findOne({ user_id: req.user.id, _id: req.params.id });
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found!');
    }

    // Delete the contact
    const deletedContact = await Contact.findOneAndDelete({ user_id: req.user.id, _id: req.params.id });

    res.status(200).json(deletedContact);
})

// Export all the methods
module.exports = { getAllContacts, createContact, getContact, updateContact, deleteContact }


// Why are we not using Try-Catch blocks OR calling the next() function anywhere in our controllers or routes?
// Because we are using the Express-Async-Handler Middleware, which will handle all the errors for us.
// We just need to throw an error, and the Express-Async-Handler Middleware will handle it for us.
// We just need to use the asyncHandler() function, and pass our async function as an argument to it.
// The asyncHandler() function will return a function, which we will use as a callback function for our routes.
// This callback function will be an async function, which will handle all the errors for us.