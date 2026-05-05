const http = require('http');

const server = http.createServer((req, res) => {
  console.log('hello');
});

const port = 3000;
server.listen(3000, () => {
  console.log(`listen at port ${port}`)
});