DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

-- DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id int AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20),
  message_text VARCHAR(400),
  roomname VARCHAR(40),
  user_key int
);


/* Create other tables and define schemas for them here! */

-- DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id int AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20) NULL DEFAULT NULL
);




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


