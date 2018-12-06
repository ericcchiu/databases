var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      console.log('THIS IS A MODEL MESSAGES???? GET');
      let queryString = 'SELECT * FROM messages';
      db.query(queryString, function (err, results) {
        if (err) {
          console.log("ERROR IN GET MESSAGES: ");
        }
        callback(null, results);
      });
    }, // a function which produces all the messages
    post: function (username, message_text, roomname, callback) {
      console.log('THIS IS A MODEL MESAGGES???? POST');
      let queryString = `INSERT INTO messages ( username, message_text, roomname) VALUES ('${username}', '${message_text}', '${roomname}')`;
      db.query(queryString, function (err, results) {
        if (err) {
          // throw err;
          console.log("ERROR ON MESSAGES POST REQUEST: ", err)
        }
        console.log(results);
        callback(null, results);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      console.log('THIS IS A MODEL USERS???? POST');
      let queryString = 'select * from users';
      db.query(queryString, function (err, results) {
        if (err) {
          console.log('ERROROROROROROR');
        }
        callback(null, results);
      });
    },
    post: function (username, callback) {
      let queryString = 'INSERT INTO users (username) VALUES (?)';

      db.query(queryString, username, (err, results) => {
        if (err) {
          console.log("ERROR ON USERS POST REQUEST: ", err)
          callback(err);
        }
        console.log("USERS DB POST RESULTS: ", results);
        callback(null, results);
      });
    }
  }
};

