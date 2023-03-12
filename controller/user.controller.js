const mongoose = require('mongoose')
const user = require('../services/user.service');

module.exports.updateProfilePic = async (req, res) => {
    const result = await user.updateProfilePicture(req.body);
    res.send(result);
  };

module.exports.updateProfileDetails = async (req, res) => {
 
    const result = await user.updateProfileDetails(req.body);
    res.send(result);
  };