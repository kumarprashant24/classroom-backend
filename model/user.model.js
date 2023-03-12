const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  user_id: String,
  password: String,
  userIdentification:String

});

module.exports = mongoose.model('user', userSchema);