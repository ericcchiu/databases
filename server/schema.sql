DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id int AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20),
  message_text VARCHAR(400),
  roomname VARCHAR(40),
  user_key int,
  room_key int
  -- FOREIGN KEY (user_key) REFERENCES users (id),
  -- FOREIGN KEY (room_key) REFERENCES rooms (id)
);

/* Create other tables and define schemas for them here! */

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id int AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(20) NULL DEFAULT NULL
);

DROP TABLE IF EXISTS rooms;

CREATE TABLE rooms (
  id int AUTO_INCREMENT PRIMARY KEY,
  roomname VARCHAR(40) NULL DEFAULT NULL
);

ALTER TABLE messages ADD FOREIGN KEY (user_key) REFERENCES users (id);
ALTER TABLE messages ADD FOREIGN KEY (room_key) REFERENCES rooms (id);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


