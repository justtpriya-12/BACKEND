const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    // Request Method
    const method = req.method;

    // Request URL
    const requestUrl = req.url;

    // Request Headers
    const headers = req.headers;

    // Query String parsing
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;

    res.writeHead(200, { 'Content-Type': 'text/plain' });

    res.write("Request Method: " + method + "\n");
    res.write("Request URL: " + requestUrl + "\n");

    res.write("\nHeaders:\n");
    res.write(JSON.stringify(headers, null, 2));

    res.write("\n\nQuery Strings:\n");
    res.write(JSON.stringify(query, null, 2));

    res.write("\n\n");

    // Custom Response based on method
    if (method === "GET") {
        res.write("This is a response for GET request");
    }
    else if (method === "POST") {
        res.write("This is a response for POST request");
    }
    else {
        res.write("Other HTTP method received");
    }

    res.end();
});

server.listen(8080, () => {
    console.log("Server running at http://localhost:8080");
});