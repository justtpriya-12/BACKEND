const users = {
    name : "Priya",
    age : 20,
}
const http = require('http');
const fs = require('fs');

const server = http.createServer( (req, res) => {
    const method = req.method;
    const url = req.url;
    if(method === 'GET' && url === '/users'){
        res.writeHead(200, {"Content-Type" : "application/users"});
        res.end(JSON.stringify(users));
    }else if(method === 'POST' && url ==='/data'){
        let body = ""; 
        req.on("data", (chunk) =>{
            body += chunk;
        })
        req.on("end", ()=>{
            fs.appendFile("./CLASSWORK/file.txt", body,() =>{
                res.writeHead(201, "data save successfull");
                res.end();
            })
        })

    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});