const url = require('url');

const address = "http://localhost:3000/user?id=101&name=Priya";

const parsedUrl = url.parse(address, true);

console.log("Host:", parsedUrl.host);
console.log("Path Name:", parsedUrl.pathname);
console.log("Query Parameters:", parsedUrl.query);