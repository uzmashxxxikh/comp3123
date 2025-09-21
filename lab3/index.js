const http = require("http");
const employeeModule = require("./employeeModule"); // import module

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8082;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.writeHead(405, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
    return;
  }

  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Welcome to Lab Exercise 03</h1>");
    return;
  }

  if (req.url === "/employee") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(employeeModule.getAllEmployees()));
    return;
  }

  if (req.url === "/employee/names") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(employeeModule.getEmployeeNames()));
    return;
  }

  if (req.url === "/employee/totalsalary") {
    const total = employeeModule.getTotalSalary();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ total_salary: total }));
    return;
  }

  // fallback for unknown routes
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
