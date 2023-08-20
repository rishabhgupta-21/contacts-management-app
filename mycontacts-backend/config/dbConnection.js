const mongoose = require('mongoose');

// Create a function for connecting to MongoDB
const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        // console.log(connect);
        console.log(`MongoDB Connected.\nHost: ${connect.connection.host}\nName: ${connect.connection.name}`);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDb;

// What is process.exit(1)?
// process.exit(1) will stop the server from running. It will stop the server from listening to the PORT.
// process.exit(1) is used to exit the process with a 'failure' code. It will stop the server from running.
// process.exit(0) is used to exit the process with a 'success' code. It will stop the server from running.

// What happens after that, on the client's end?
// The client will get a 'connection refused' error.
