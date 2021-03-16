const mysql = require('mysql2');
const inquirer = require("inquirer");

const consoleTable = require("console.table");



// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'employees_db'
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
      message: "Welcome to Employee Tracker you are currently at the Main Menu",
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
  let query = "SELECT * FROM Department";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    mainMenu();
      

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
        name: "DepartmentName"

    }).then(function(answer){

        connection.query("INSERT INTO department (name) VALUES (?)", [answer.DepartmentName] , function(err, res) {
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
        name: "DepartmentID"
      }
    ])
    .then(function(answer) {


      connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salaryTotal, answer.DepartmentID], function(err, res) {
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
        message: "Please enter a role ID",
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
      type: "input",
      message: "Enter employee id",
      name: "id",
    })
    .then(function (answer) {
      var id = answer.Id;

      inquirer
        .prompt({
          type: "input",
          message: "Enter role id",
          name: "roleId",
        })
        .then(function (answer) {
          var role_Id = answer.role_Id;

          var query = "UPDATE employee SET role_id=? WHERE id=?";
          connection.query(query, [id, role_Id], function (err, res) {
            if (err) {
              console.log(err);
            }
            mainMenu();
          });
        });
    });
}

  