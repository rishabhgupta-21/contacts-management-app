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