const http = require('http');
const os = require('os');

const hostname = os.hostname();
const port = 3000;
const version = '1.0.0';

console.log(`Server IP: ${os.networkInterfaces().eth0[0].address}`);
console.log(`Hostname: ${hostname}`);
console.log(`Application Version: ${version}`);

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`Server IP: ${os.networkInterfaces().eth0[0].address}\nHostname: ${hostname}\nApplication Version: ${version}`);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

