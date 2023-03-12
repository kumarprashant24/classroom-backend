const { default: mongoose } = require('mongoose');
let User = require('../model/user.model');

  module.exports.updateProfilePicture = async (user_details) => {
    const uid = mongoose.Types.ObjectId(user_details.user_id);
    try {
      const data = await User.findByIdAndUpdate(uid,{profile_pic:user_details.profile_pic});
      return { status: 200, message: "profile pic is updated" };
    } catch (error) {
      return { status: 400, message: error.message };
    }
  };

  module.exports.updateProfileDetails = async (user_details) => {
    const uid = mongoose.Types.ObjectId(user_details.user_id);
    try {
      const data = await User.findByIdAndUpdate(uid,{firstname:user_details.firstname,lastname:user_details.lastname,first_tour:true});
    
      return { status: 200, message: "profile details is updated" };
    } catch (error) {
      return { status: 400, message: error.message };
    }
  };