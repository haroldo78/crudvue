const mongoose = require('mongoose');

// const { Schema } = mongoose;


const userSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    telefone: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  });

module.exports = mongoose.model('user', userSchema);