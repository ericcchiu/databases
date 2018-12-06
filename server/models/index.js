var db = require('../db');

module.exports = {
  messages: {
    get: function () {
      console.log('THIS IS A MODEL MESSAGES???? GET');
      let queryString = 'SELECT * FROM messages';
      db.query(queryString, queryArgs, function(err, results) {
        if (err) {
          throw err;
        }
        console.log(results)
     });
    }, // a function which produces all the messages
    post: function () {
      console.log('THIS IS A MODEL MESAGGES???? POST');
      let queryString = `INSERT INTO messages (username, message_text, roomname) VALUES ('Frank', 'Sup, dude', 'Room')`;
      db.query(queryString, queryArgs, function(err, results) {
        if (err) {
          throw err;
        }
        console.log(results)
     });
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

