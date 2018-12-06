var db = require('../db/index');

module.exports = {
  messages: {
    get: function () {
      console.log('THIS IS A MODEL MESSAGES???? GET');
      let queryString = 'SELECT * FROM messages';
      db.query(queryString, queryArgs, function (err, results) {
        if (err) {
          throw err;
        }
        console.log(results)
      });
    }, // a function which produces all the messages
    post: function () {
      console.log('THIS IS A MODEL MESAGGES???? POST');
      let queryString = `INSERT INTO messages (username, message_text, roomname) VALUES ('Frank', 'Sup, dude', 'Room')`;
      db.query(queryString, function (err, results) {
        if (err) {
          // throw err;
          console.log("ERROR ON MESSAGES POST REQUEST: ", err)
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
    post: function (username, callback) {
      // let queryString = `INSERT INTO users (username) VALUES ('${username}');`;
      let queryString = `INSERT INTO users SET ?`;

      console.log('db import: ', db.query);

      db.query(`INSERT INTO users ('username') VALUES ('John');`, (err, results) => {
        if (err) {
          console.log("ERROR ON USERS POST REQUEST: ", err)
          callback(err);
        }
        console.log("USERS DB POST RESULTS: ", results);
        callback(null, results);
        db.end();
      });
    }
  }
};

