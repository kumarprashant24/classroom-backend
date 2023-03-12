const router = require('express').Router();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const user = require('../model/user.model');
const { CLIENT_URL} = require('../config');


passport.use(
    new LocalStrategy({
        passReqToCallback:true
      },(req,user_id, password, done) => {
      user.findOne({ user_id }, (err, data) => {
        // const salt = bcrypt.genSaltSync(10);
        if (data) {
            if(data.password === req.body.password && data.userIdentification === req.body.userIdentification)
              return done(null, data);
            return done(null, false, {
                message: 'invalid credentials',
              });
        } else {
        //   const passHash = bcrypt.hashSync(password, salt);
          user({ user_id, password,firstname:"",lastname:"",userIdentification:req.body.userIdentification,first_tour:false,profile_pic:"" }).save((err, data) => {
            return done(null, data);
          });
        }
      });
    })
  );

  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function (id, done) {
  
    user
      .findById(id)
      .exec((err, user) => {
        done(err, user);
      });
  });

  router.post('/login', passport.authenticate('local'), (req, res) =>
  res.send({ success: true, user: req.user })
);


router.get('/login/success', (req, res) => {
    // console.log(req.user);
    if (req.user) {
      res.send({ success: true, user: req.user });
    } else res.send({ success: false });
  });

router.get('/logout', (req, res) => {
    // req.logout();
    // req.session = null;
    // res.redirect(CLIENT_URL);

    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect(CLIENT_URL);

      });
  });

  module.exports = router;