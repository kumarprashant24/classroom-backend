const router = require('express').Router();
const user = require('../controller/user.controller');

router.post('/', user.updateProfilePic);
router.post('/updateDetails', user.updateProfileDetails);


module.exports = router;