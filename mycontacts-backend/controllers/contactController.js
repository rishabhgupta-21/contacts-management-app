// Controllers will contain the LOGIC for all our Responses to all Requests.
// Controllers will also connect with our Database.


// @desc    Get all contacts
// @route   GET /api/contacts
// @access  public
const getAllContacts = (req, res) => {
    res.status(200).json({ message: 'Get all Contacts' });
}

// @desc    Create a contact
// @route   POST /api/contacts
// @access  public
const createContact = (req, res) => {
    res.status(201).json({ message: 'Create Contact' });                // 201 - Resource Created
}

// @desc    Get a single Contact
// @route   GET /api/contacts/:id
// @access  public
const getContact = (req, res) => {
    res.status(200).json({ message: `Get Contact ${req.params.id}` });
}

// @desc    Update a Contact
// @route   PUT /api/contacts/:id
// @access  public
const updateContact = (req, res) => {
    res.status(200).json({ message: `Update Contact ${req.params.id}` });
}

// @desc    Delete a Contact
// @route   DELETE /api/contacts/:id
// @access  public
const deleteContact = (req, res) => {
    res.status(200).json({ message: `Delete Contact ${req.params.id}` });
}

// Export all the methods
module.exports = { getAllContacts, createContact, getContact, updateContact, deleteContact }