const mysql = require('mysql2');
const express = require('express');
const db = require('./db/database');


// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  });