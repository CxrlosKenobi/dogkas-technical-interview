const http = require('http');
const app = require('./src/app');

const server = http.createServer(app);
server.on('listening', () => {
  console.log('Server is listening on port 3000');
})

server.listen(3000);
module.exports = server;