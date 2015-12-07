/**
 * SendGrid.js
 *
 * @description :: SendGrid Wrapper
 * @docs        :: http://sailsjs.org/#!documentation/services
 */

module.exports = {
  send: function(mail, callback) {
    var SendGrid = require("sendgrid")(sails.config.sendgrid.apiKey);
    
    SendGrid.send({
      to:       mail.to,
      subject:  mail.subject,
      html:     mail.content,
      from:     sails.config.sendgrid.fromEmail,
      fromname: sails.config.sendgrid.fromName
    }, function(err, json) {
      callback(err);
    });
  }
};
