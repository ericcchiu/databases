var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

Connection = mysql.createConnection({
    host: "localhost",
    user: "student",
    password: "student",
    database: 'chat'
});

Connection.connect = (err) => {
    if (err) {
        console.log('ERROR CONNECTING TO CHAT DB: ', err);
    } else {
        console.log("CONNECTED TO CHAT DB!!!!!! IN DB FOLDER");
    }
}

module.exports = Connection;