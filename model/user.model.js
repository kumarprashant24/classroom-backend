const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  user_id: String,
  password: String,
  userIdentification:String,
  profile_pic:String,
  first_tour:Boolean

});

module.exports = mongoose.model('user', userSchema);