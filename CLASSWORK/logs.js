const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {

    const method = req.method;
    const url = req.url;
    const date = new Date().toISOString();
    const log = `New log- ${date} | method: ${method} | url: ${url}\n`;

    fs.appendFile("./CLASSWORK/log.txt", log, (err) => {
        if (err){
            res.writeHead(500);
            res.end();
        } else {
            res.writeHead(200,"done");
            res.end();
        }
    });
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});
