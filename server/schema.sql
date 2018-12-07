DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id int AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20),
  message_text VARCHAR(400),
  roomname VARCHAR(40)
  -- CONSTRAINT username UNIQUE (username)
);

INSERT INTO messages (username, message_text, roomname) VALUES ('Frank', 'Frank is Frank is Frank', 'main');

/* Create other tables and define schemas for them here! */

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id int AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20) NOT NULL UNIQUE,
  CONSTRAINT uc_username UNIQUE (username)
);

INSERT INTO users (username) VALUES ('Frank');
INSERT INTO users (username) VALUES ('Not Frank');
INSERT INTO users (username) VALUES ('Fran');
INSERT INTO users (username) VALUES ('George');


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


