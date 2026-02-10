const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    //res.setheader('Content-Type', 'json');
    console.log("METHOD:", req.method);
    console.log("URL:", req.url);
    // console.log("HEADERS:", req.headers);

    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding </title></head>');
        res.write('<body><h1>Enter your details:</h1>');
        res.write('<form action="/submit-details" method="POST">');
        res.write('<input type ="text" name="username" placeholder="enter your name"><br><br>');

        res.write('<label for="gender">Gender:</label>');

        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male" />');
        
        res.write('<label for="female">Female</label>');
        res.write('<input type="radio" id="female" name="gender" value="female" /><br><br>');

        res.write('<input type="submit" value="Submit">');
        
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    else if(req.url.toLowerCase() === "/submit-details" && req.method === "POST"){

        const body = [];
        req.on('data',(chunk) => {
            console.log(chunk);
            body.push(chunk);
        });

        req.on('end', () =>{
            const fullBody = Buffer.concat(body).toString();
            console.log(fullBody);
        });

        fs.writeFileSync('./user.txt', 'Priya Chauhan');
        res.statusCode = 302;
        res.setHeader('location','/');
        
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding </title></head>');
    res.write('<body><h1> Namaste</h1></body>');
    res.write('</html>');
    res.end();
});

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});