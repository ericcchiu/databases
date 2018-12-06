var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('THIS IS A CONTROLLERS MESSAGES???? GET');
      models.messages.get(function (err, results) {
        if (err) {
          console.log("ERROR ON MESSAGES GET REQUEST", err);
        }
        res.json(results);
        res.end();
      });


    }, // a function which handles a get request for all messages
    post: function (req, res) {

      let username = req.body.username;
      let message_text = req.body.message_text;
      let roomname = req.body.roomname;
      console.log('WHAT IS LOVE???' + roomname);



      models.messages.post(username, message_text, roomname, function (err, results) {
        if (err) {
          console.log('Error posting messages in controller: ', err);
        }
        console.log('CONTROLLLERS POST', results);
        res.sendStatus(201);
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

      console.log('THIS IS A CONTROLLERS USERS???? GET');
      models.users.get(function (err, results) {
        if (err) {
          console.log("ERROR GETTING USERS: ", err);
        }
        res.json(results);
        res.end();
      });
    },
    post: function (req, res) {
      console.log('USERNAME IN REQUEST: ', req.body.username)
      models.users.post([req.body.username], (err, results) => {
        if (err) {
          console.log('ERROR POSTING USERNAME TO USERS FROM CONTROLLER: ', err)
        }
        console.log(results);
        res.sendStatus(201);
      });
    }
  }
};

