// Controllers will contain the LOGIC for all our Responses to all Requests.
// Controllers will also connect with our Database.

// Whenever we interact with MongoDB, we always get a Promise. Sooooo
// To handle errors inside the now-async routes (without Try-Catch blocks), we need to use the Express-Async-Handler MIDDLEWARE.
const asyncHandler = require('express-async-handler');

// Applying CRUD Operations for each API.
// Basically, we want to store our data in the database, and then retrieve it from the database.
const Contact = require('../models/contactModel');



// @desc    Get all contacts
// @route   GET /api/contacts
// @access  public
const getAllContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({});            // {} specifies that we want to find ALL the contacts.
    res.status(200).json(contacts);
})

// @desc    Create a contact
// @route   POST /api/contacts
// @access  public
const createContact = asyncHandler(async (req, res) => {
    console.log(req.body);
    const { name, email, phone } = req.body;

    // Error Handling via Express-Async-Handler
    // 400 - Bad Request
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error('All fields are Mandatory!');
    }

    // Create a new Contact
    const contact = await Contact.create({
        'name': name,
        'email': email,
        'phone': phone
    })

    res.status(201).json(contact);                // 201 - Resource Created
})

// @desc    Get a single Contact
// @route   GET /api/contacts/:id
// @access  public
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);

    // Handle potential error - if the contact with this ID is not found - 404
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found!');
    }

    res.status(200).json(contact);
})

// @desc    Update a Contact
// @route   PUT /api/contacts/:id
// @access  public
const updateContact = asyncHandler(async (req, res) => {
    // Check if contact is found first
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found!');
    }

    // Update the contact
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(updatedContact);
})

// @desc    Delete a Contact
// @route   DELETE /api/contacts/:id
// @access  public
const deleteContact = asyncHandler(async (req, res) => {
    // Check if contact is found first
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error('Contact not found!');
    }

    // Delete the contact
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);

    res.status(200).json(deletedContact);
})

// Export all the methods
module.exports = { getAllContacts, createContact, getContact, updateContact, deleteContact }