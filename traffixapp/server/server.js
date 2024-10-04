require('dotenv').config(); // Load environment variables from .env

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRouter = require('./router/auth-router');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://i210644:GdBjlhUnmpZOVa4e@traffix-database.ve2gr.mongodb.net/?retryWrites=true&w=majority&appName=Traffix-Database')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Use the authRouter for authentication routes
app.use('/api/auth', authRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
