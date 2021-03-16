USE employees_DB;

----- Department -----
INSERT INTO Department (id, name)
VALUES (1, "Hospitality");

INSERT INTO Department (id, name)
VALUES (2, "Sales");

INSERT INTO Department (id, name)
VALUES (3, "Management");

INSERT INTO Department (id, name)
VALUES (4, "Matinence");

INSERT INTO Department (id, name)
VALUES (5, "IT");

----- Role -----
INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Server", 20000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Busser", 18000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Bartender", 25000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Front Manager", 40000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "Cook", 30000, 5);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "Head Chef", 40000, 6);

INSERT INTO role (id, title, salary, department_id)
VALUES (7, "Janitor", 28000, 7);

INSERT INTO role (id, title, salary, department_id)
VALUES (8, "IT Manager", 35000, 8);


----- Employee -----
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Jac", "Richmond", 8, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Mamie", "Castro", 5, 6);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Reema", "Flynn", 5, 6);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "Gus", "Alfaro", 7, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Andreas", "Ellis", 3, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (6, "Dorian", "Crossley", 1, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (7, "Jennie", "Serrano", 6, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (8, "Daniyal", "Davies", 1, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (9, "Bear", "Pope", 4, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (10, "Bobbi", "Underwood", 2, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (11, "Anne", "Bone", 1, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (12, "Josef", "Rayner", 2, 4);

