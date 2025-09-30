// const express = require('express');

// const SERVER_PORT = process.env.PORT || 3000;
// // create an express app
// const app = express();

// // 1. Define all specific routes first (WORKING ROUTES)
// // ------------------------------------------------------------------


// // http://localhost:3000/hello
// app.get("/hello", (req, res) => {
//     res.type("text/plain").send("Hello Express JS");
// });

// // http://localhost:3000/about
// app.get('/about', (req, res) => {
//     res.type('text/html');
//     res.status(200).send('<h1> About Page </h1><p> This is the about page </p>');
// });

// // http://localhost:3000/student (Now working with the fix)
// app.get('/student', (req, res) => {
//     const stud = {
//         name: 'John Doe',
//         age: 25,
//         major: 'Computer Science'
//     };
//     res.json(stud); 
// });

// // 2. Define the Catch-All 404 Middleware (MUST BE BEFORE app.listen())
// // ------------------------------------------------------------------

// // ✅ CORRECT POSITION: This catches any request that didn't match a route above it.
// // It will now correctly block anything defined after it, but there's nothing left but the server start.
// app.use((req, res, next) => {
//     res.status(404).send('Sorry, page not found!');
// });


// // 3. Start the Server (MUST BE THE LAST MAJOR COMMAND)
// // ------------------------------------------------------------------
// const server = app.listen(SERVER_PORT, () => {
//     console.log(`Server is running on port http://localhost:${SERVER_PORT}/`);
//     console.log(server.address());
// });


const express = require('express');

const SERVER_PORT = process.env.PORT || 3000;
// create an express app
const app = express();

// 1. Define all specific routes first (WORKING ROUTES)
// ------------------------------------------------------------------


// http://localhost:3000/hello
app.get("/hello", (req, res) => {
    res.type("text/plain").send("Hello Express JS");
});

// http://localhost:3000/about
app.get('/about', (req, res) => {
    res.type('text/html');
    res.status(200).send('<h1> About Page </h1><p> This is the about page </p>');
});

// http://localhost:3000/student (Now working with the fix)
app.get('/student', (req, res) => {
    const stud = {
        name: 'John Doe',
        age: 25,
        major: 'Computer Science'
    };
    res.json(stud); 
});

// 2. Define the Catch-All 404 Middleware (MUST BE BEFORE app.listen())
// ------------------------------------------------------------------

// ✅ CORRECT POSITION: This catches any request that didn't match a route above it.
// It will now correctly block anything defined after it, but there's nothing left but the server start.
app.use((req, res, next) => {
    res.status(404).send('Sorry, page not found!');
});


// 3. Start the Server (MUST BE THE LAST MAJOR COMMAND)
// ------------------------------------------------------------------
const server = app.listen(SERVER_PORT, () => {
    console.log(`Server is running on port http://localhost:${SERVER_PORT}/`);
    // This line logs the server object details, matching your professor's format
    console.log(server.address()); 
});