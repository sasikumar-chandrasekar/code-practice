// IFEs

// "IFE" typically stands for "Immediately Invoked Function Expression." 
// An IIFE is a design pattern used to encapsulate code within a function 
// and execute it immediately after its declaration.

// const http = require('http');

// // Using an IIFE to encapsulate the server logic
// (function () {
//     // Define the port for the server to listen on
//     const PORT = 3000;

//     // Create an HTTP server
//     const server = http.createServer((req, res) => {
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('Hello, World!\n');
//     });

//     // Start the server and listen on the specified port
//     server.listen(PORT, () => {
//         console.log(`Server is listening on port ${PORT}`);
//     });
// })();

const http = require("http");

(function () {
    const PORT = "5000"
    const server = http.createServer((req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end("hello")
    })
    server.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
})();


