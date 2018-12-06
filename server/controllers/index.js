var models = require('../models');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('THIS IS A CONTROLLERS MESSAGES???? GET');
      res.statusCode = 200;
      res.end("SDGDGSGAAfjkhsdfgl;hdsl;gjkadsl;fjasdfgjkaslgk");

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('THIS IS A CONTROLLERS MESSAGES???? POST');
      req.on('data', (chunk) => {
        console.log('CHUNK: ', chunk);
      }).on('end', () => { });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('THIS IS A CONTROLLERS USERS???? GET');
    },
    post: function (req, res) {
      console.log('USERNAME IN REQUEST: ', req.body.username)
      models.users.post(req.body.username, (err, results) => {
        if (err) {
          console.log('ERROR POSTING USERNAME TO USERS FROM CONTROLLER: ', err)
        } else {
          console.log(results);
        }
      })
      res.sendStatus(201);
      res.end();
    }
  }
};

