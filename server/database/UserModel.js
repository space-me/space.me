const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Create a Schema
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  favorites: {
    type: Array,
    default: [],
  },
});

// Compare the entered password to the encrypted and saved password. 
userSchema.methods.confirmPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//Save the password through bcrypt

// Create a model
const User = mongoose.model('users', userSchema);

module.exports = User;
