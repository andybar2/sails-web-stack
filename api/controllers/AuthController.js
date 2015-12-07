/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

var passport = require("passport");

module.exports = {
  login: function(req, res) {
    passport.authenticate('local', function(err, user, info) {
      if ((err) || (!user))
        return res.json(401, err);

      req.logIn(user, function(err) {
        if (err) return res.json(401, err);
        return res.json(200, user);
      });
    })(req, res);
  },

  logout: function(req, res) {
    if (req.isAuthenticated()) {
      req.logOut();
      res.json(200, {messages: ['You Have Successfully Logged Out']});
    }
    else
      return res.json(401, {messages: ['Unauthorized']})
  },

  currentUser: function(req, res) {
    if (req.isAuthenticated())
      return res.json(200, req.user[0]);
    else
      return res.json(401, {messages: ['Unauthorized']})
  },

  _config: {}
};
