const mysql = require('mysql2');
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const db = require('./db/database');
const promisemysql = require("promise-mysql");

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'employees.db'
  });




connection.connect((err) => {
    if (err) throw err;

    // Start main menu function

    console.log("\n WELCOME TO EMPLOYEE TRACKER \n");
    mainMenu();
});


function mainMenu(){

    // Prompt user to choose an option
    inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "MAIN MENU",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add role",
        "Add an employee",
        "Update employee role",
      ]
    })


    .then((answer) => {

        // Switch case depending on user option
        switch (answer.action) {
            case "View all employees":
                viewAllDepartments();
                break;

            case "View all roles":
                viewAllRoles();
                break;

            case "View all employees":
                viewAllEmployees();
                break;

            case "Add a department":
                addDepartment();
                break;

            case "Add role":
                addRole();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Update employee role":
                updateEmployeeRole();
                break;
        }
    });
}

function viewAllDepartments(){
    inquirer.prompt({

        // Prompt user for name of department
        name: "deptName",
        type: "input",
        message: "Department Name: "
    }).then((answer) => {
            
        // add department to the table
        connection.query(`INSERT INTO department (name)VALUES ("${answer.deptName}");`, (err, res) => {
            if(err) return err;
            console.log("\n DEPARTMENT ADDED...\n ");
            mainMenu();
        });

    });
}

function viewAllRoles(){

    mainMenu();
}

function viewAllEmployees(){

    mainMenu();
}

function addDepartment(){

    mainMenu();
}

function addRole(){

    mainMenu();
}

function addEmployee(){

    mainMenu();
}

function updateEmployeeRole(){

    mainMenu();
}