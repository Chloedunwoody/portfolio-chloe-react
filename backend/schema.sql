create database portfolio;
use portfolio;

CREATE TABLE hobbies (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    href VARCHAR(255),
    imageSrc VARCHAR(255),
    imageAlt VARCHAR(255)
);

CREATE TABLE journey (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    description VARCHAR(255)
);

CREATE TABLE projects (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255),
    subtitle VARCHAR(255)
    description VARCHAR(255),
    image VARCHAR(255),
    link VARCHAR(255)
);

CREATE TABLE skills (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
);

CREATE TABLE personalInfo (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    section VERCHAR(255),
    text VARCHAR(400),
);
