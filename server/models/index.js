var db = require('../db');

module.exports = {
  messages: {
    get: function () {
     console.log('THIS IS A MODEL MESSAGES???? GET');
    }, // a function which produces all the messages
    post: function () {
      console.log('THIS IS A MODEL MESAGGES???? POST');
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      console.log('THIS IS A MODEL USERS???? POST');
      
    },
    post: function () {
      console.log('THIS IS A MODEL USERS???? POST');
    }
  }
};

