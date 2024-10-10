const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define the user schema
const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true }, // User's first name
    lastName: { type: String, required: true },  // User's last name
    employeeId: { type: String, required: true, unique: true }, // Unique Employee ID
    email: { type: String, required: true, unique: true }, // Unique email address
    cnic: { type: String, required: true }, // CNIC (National Identity Card)
    password: { type: String, required: true }, // User's password (hashed)
    area: { type: String, required: true }, // User's area
    sector: { type: String, required: true }, // User's sector
    phoneNumber: { type: String, required: true, unique: true }, // Unique phone number
  });
  

// Hash the password before saving
userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
