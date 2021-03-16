DROP DATABASE IF EXISTS employees_DB;

CREATE DATABASE employees_DB;


USE employees_DB;


CREATE TABLE Department (
id INT NOT NULL AUTO_INCREMENT,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE Role (
id INT NOT NULL AUTO_INCREMENT,
title VARCHAR(30) NOT NULL,
salary DECIMAL  NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE Employee (
id INT NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY (id)
);