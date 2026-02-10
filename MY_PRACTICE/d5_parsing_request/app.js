const http = require('http');

const userRequestHandler = require('./_04_parsing');

const server = http.createServer(userRequestHandler);

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
}); 