CREATE DATABASE book_publisher;

USE book_publisher;

CREATE TABLE author (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    bio TEXT
);

INSERT INTO author (name, bio) VALUES ('Jane Austen', 'Author of Pride and Prejudice');
INSERT INTO author (name, bio) VALUES ('George Orwell', 'Author of 1984');
