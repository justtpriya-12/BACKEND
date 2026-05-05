const http = require('http');


const server = http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/plain'});

    res.write("Hello! Node.js HTTP Server is running.\n");
    res.write("Welcome Mohit!");

    res.end();
});


server.listen(8080, () => {
    console.log("Server running at http://localhost:8080/");
});