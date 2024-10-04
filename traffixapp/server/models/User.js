const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Import bcryptjs

// Define the user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  employeeId: { type: String, required: true, unique: true }, // Unique employee ID
  email: { type: String, required: true, unique: true }, // Unique email
  cnic: { type: String, required: true },
  password: { type: String, required: true },
  area: { type: String, required: true },
  sector: { type: String, required: true },

});








// Hash the password before saving
userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
