var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
     console.log('THIS IS A CONTROLLERS MESSAGES???? GET');
    }, // a function which handles a get request for all messages
    post: function (req, res) {
     console.log('THIS IS A CONTROLLERS MESSAGES???? POST');
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
     console.log('THIS IS A CONTROLLERS USERS???? GET');
    },
    post: function (req, res) {
     console.log('THIS IS A CONTROLLERS USERS???? POST');
    }
  }
};

