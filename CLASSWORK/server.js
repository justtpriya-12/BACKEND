const http = require('http');

const server = http.createServer( (req, res) => {
    const url = req.url;
    const method = req.method;
    console.log(url, method);

    if(url == '/' && method == 'GET'){
        res.end(`hello`);
    }
});

server.listen(3000, () => {
    console.log(`Server running on address http://localhost:3000`);
});