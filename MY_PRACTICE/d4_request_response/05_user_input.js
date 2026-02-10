const http = require('http');
const fs =  require('fs');

const server = http.createServer((req, res) =>{
    //res.setheader('Content-Type', 'json');
    console.log("METHOD:", req.method);
    console.log("URL:", req.url);
    console.log("HEADERS:", req.headers);

    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Complete Coding </title></head>');
        res.write('<body><h1>Enter your details:</h1>');
        res.write('<form action="/submit-details" methods="POST">');
        res.write('<input type ="text" name="username" placeholder="enter your name"><br><br>');

        res.write('<label for="gender">Gender:</label>');

        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="male">Male</label>');

        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<label for="female">Female</label><br><br>');

        res.write('<input type="submit" value="Submit">');
        
        res.write('</form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Complete Coding </title></head>');
    res.write('<body><h1> Namaste</h1></body>');
    res.write('</html>');
    res.end();
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});