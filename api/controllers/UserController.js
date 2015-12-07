/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  /**
   * Add New User
   *
   * @param {String} username
   * @param {String} password
   * @param {String} email (optional)
   * @return {String} msg
   */
  add: function(req, res) {
    //parameters
    var username = (req.param('username') || '').trim();
    var password = (req.param('password') || '').trim();
    var email    = (req.param('email') || '').trim();

    if (username == '' || password == '')
      res.json(500, {msg: 'Please enter all the required fields'});
    else if (username.indexOf(' ') >= 0)
      res.json(500, {msg: 'Username can not have spaces'});
    else {
      //check if there is other user with the same name
      User.findOne({username: username}).exec(function (err, user) {
        if (err) {
          console.log(err);
          res.json(500, {msg: 'Internal error'});
        }
        else if (user)
          res.json(500, {msg: 'User already exists'});
        else {
          User.create({
            username: username,
            password: password,
            email: email,
            superAdmin: false
          }).exec(function (err, user){
            if (err) {
              console.log(err);
              res.json(500, {msg: 'Internal error'});
            }
            else
              res.json(200, {msg: 'User created'});
          });
        }
      });
    }
  }
};
