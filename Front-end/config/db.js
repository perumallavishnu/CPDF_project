const mongoose = require('mongoose');

// Create the connection
const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/TODO');

// Listen for connection events
connection.on('open', () => {
    console.log("MongoDB Connected");
}).on('error', (error) => {
    console.log("MongoDB Connection ERROR!", error);
});

module.exports = connection;
