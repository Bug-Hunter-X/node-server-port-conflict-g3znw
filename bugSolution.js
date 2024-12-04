const http = require('http');

const port = 8080;

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const handleError = (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use. Please choose a different port.`);
    process.exit(1);
  } else {
    console.error(`An unexpected error occurred: ${err}`);
    process.exit(1);
  }
};

server.on('error', handleError);

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});