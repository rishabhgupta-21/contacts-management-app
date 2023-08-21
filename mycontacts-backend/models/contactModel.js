const mongoose = require('mongoose');

// Create a Schema for Contacts
// A Schema is a blueprint of how the data will be stored in the database.
// It defines the shape of documents within a collection - information about the Fields of the Document.
const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Mandatory - Please add the Contact's Name"]
    },
    email: {
        type: String,
        required: [true, "Mandatory - Please add the Contact's Email Address"]
    },
    phone: {
        type: String,
        required: [true, "Mandatory - Please add the Contact's Phone Number"]
    }
}, {
    timestamps: true
})

// Return a Model compiled from this Schema
module.exports = mongoose.model('Contact', contactSchema);

// The first argument is the singular name of the COLLECTION your model is for.
// Mongoose automatically looks for the plural, lowercased version of your model name.
// Thus, for the example above, the model Contact is for the 'contacts' collection in the database.