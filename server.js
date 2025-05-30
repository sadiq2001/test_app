//server.js
const http = require('http');
const sum = require('./app');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    const result = sum(20, 40); // Example of calling the sum function
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`The sum of 20 and 40 is: ${result}`);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
