const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const blogRoutes = require('./Routes/blogRoutes.js');

const app = express();
const PORT =  3000;

app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb+srv://rozendhami69:root@cluster0.qhr7nxm.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

// Event handlers for MongoDB connection
db.on('connected', () => {
  console.log('Connected to MongoDB');
});

db.on('error', (error) => {
  console.error(`MongoDB connection error: ${error}`);
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});
// Routes
app.use('/blogs', blogRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
