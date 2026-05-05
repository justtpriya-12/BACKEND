const http = require('http');

const server = http.createServer((req, res) => {
    res.write("Server running on port 3001");
    res.end();
});

server.listen(3000, () => {
    console.log("Server started on port 3001");
});