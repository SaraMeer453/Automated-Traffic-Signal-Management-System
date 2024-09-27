const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://i210644:GdBjlhUnmpZOVa4e@traffix-database.ve2gr.mongodb.net/?retryWrites=true&w=majority&appName=Traffix-Database');
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
