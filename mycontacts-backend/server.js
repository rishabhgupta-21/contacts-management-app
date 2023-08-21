const express = require('express');
const connectDb = require('./config/dbConnection');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');

// Connect to MongoDB
connectDb();
// Create an Express App
const app = express();

// Define a PORT
const port = process.env.PORT || 5000;

// Home Page Route - example (self)
app.get('/', (req, res) => {
    res.send('Home Page');
})

// We are not going to configure all our Routes in this server.js file
// For a better project structure, we will create a folder, which will handle all our Routes.

// MIDDLEWARE
app.use(express.json());
app.use('/api/contacts', require('./routes/contactRoutes'));            // provide router path inside the require() function
app.use('/api/users', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})