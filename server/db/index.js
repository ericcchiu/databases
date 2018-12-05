var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var dbConnection= mysql.createConnection({
    host: "localhost",
    user: "student",
    database: 'chat'
  });

dbConnection.connect = (err) => {
    if(err) {
        console.log('ERROR CONNECTING TO CHAT DB: ', err);
    }
    console.log("CONNECTED TO CHAT DB!!!!!!");
}