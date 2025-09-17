var http = require("http");

const Employee = require("./Employee");

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(Employee.getAllEmployees()));
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            let employees = Employee.getAllEmployees();
            let employeeNames = employees.map(emp => `${emp.firstName} ${emp.lastName}`);
            employeeNames.sort();
            res.end(JSON.stringify(employeeNames));
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format
            //e.g. { "total_salary" : 100 }
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            let totalSalary = Employee.getAllEmployees().reduce((acc, emp) => acc + emp.Salary, 0);
            res.end(JSON.stringify({ "total_salary": totalSalary }));
    }
    else if (req.url !== '/' && req.url !== '/employee' && req.url !== '/employee/names' && req.url !== '/employee/totalsalary') {
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
}
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})