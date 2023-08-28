const mongoose = require('mongoose');

// Create a Schema for Contacts
// A Schema is a blueprint of how the data will be stored in the database.
// It defines the shape of documents within a collection - information about the Fields of the Document.
const contactSchema = mongoose.Schema({
    // We need to associate each Contact with a User.
    // So, we need to add a reference to the User Model.
    user_id: {
        type: mongoose.Schema.Types.ObjectId,   // The ObjectID of the User Model is created automatically by MongoDB.
        required: true,
        ref: 'User'     // This is the Model name of the User Model.
    },
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

// What is the purpose of the ref property?
// The ref property tells Mongoose which Model to use during population.
// In simple terms, the ref property tells Mongoose which other Model to use for population.
// Population is the process of automatically replacing the specified paths in the document with document(s) from other collection(s).
