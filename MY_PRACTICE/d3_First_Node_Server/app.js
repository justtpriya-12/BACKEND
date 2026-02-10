const http = require('http');

// function requestListener(req, res) {
//     console.log(req);
// }
// http.createServer(requestListener);

//anonymous function
const server = http.createServer(function (req, res) {
    console.log(req);
});

// server.listen(3000);

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});