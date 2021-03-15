const mysql = require('mysql2');
const inquirer = require("inquirer");

const consoleTable = require("console.table");
const db = require('./db/employees.db');
//const promisemysql = require("promise-mysql");

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "root",
    database: 'employees.db'
  });




connection.connect((err) => {
    if (err) throw err;

    mainMenu();
});

//main menu is prompt to allow users to select the different functions
function mainMenu(){

    
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

        
        switch (answer.action) {
            case "View all departments":
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

        
        name: "deptName",
        type: "input",
        message: "Department Name: "
    }).then((answer) => {
            
        
        connection.query(`INSERT INTO department (name)VALUES ("${answer.deptName}");`, (err, res) => {
            if(err) return err;
            console.log("\n DEPARTMENT ADDED...\n ");
            mainMenu();
        });

    });
}

function viewAllRoles(){
 
  let query = "SELECT * FROM role";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    mainMenu();
  });
}

function viewAllEmployees(){
    let query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
      if (err) throw err;
      console.table(res);
      mainMenu();
    });
  }

function addDepartment(){
    inquirer.prompt({
      
        type: "input",
        message: "Add a department",
        name: "Department Name: "

    }).then(function(answer){



        connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName] , function(err, res) {
            if (err) throw err;
            console.table(res)
            mainMenu();
    })
    })
}

function addRole(){
    inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter a role",
        name: "roleName"
      },
      {
        type: "input",
        message: "Please enter an amount for a salary",
        name: "salaryTotal"
      },
      {
        type: "input",
        message: "Please enter department ID",
        name: "Department ID"
      }
    ])
    .then(function(answer) {


      connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salaryTotal, answer.deptID], function(err, res) {
        if (err) throw err;
        console.table(res);
        mainMenu();
      });
    });
}

function addEmployee(){
    inquirer
    .prompt([
      {
        type: "input",
        message: "Enter a first name for new employee",
        name: "FirstName"
      },
      {
        type: "input",
        message: "Enter a last name for new employee",
        name: "LastName"
      },
      {
        type: "input",
        message: "Please enter a role",
        name: "roleID"
      },
      {
        type: "input",
        message: "Please enter a manager ID if applicable",
        name: "managerID"
      }
    ])
    .then(function(answer) {

      
      connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.FirstName, answer.LastName, answer.roleID, answer.managerID], function(err, res) {
        if (err) throw err;
        console.table(res);
        mainMenu();
      });
    });
}

function updateEmployeeRole(){
    inquirer
    .prompt({
      name: "id",
      type: "input",
      message: "Enter employee id",
    })
    .then(function (answer) {
      var id = answer.id;

      inquirer
        .prompt({
          name: "roleId",
          type: "input",
          message: "Enter role id",
        })
        .then(function (answer) {
          var roleId = answer.roleId;

          var query = "UPDATE employee SET role_id=? WHERE id=?";
          connection.query(query, [roleId, id], function (err, res) {
            if (err) {
              console.log(err);
            }
            mainMenu();
          });
        });
    });
}

  