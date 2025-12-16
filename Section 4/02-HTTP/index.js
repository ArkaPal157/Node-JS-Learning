const http = require('node:http');

const server = http.createServer(function (req, res) {
  console.log(`Incoming request for: ${req.url}`);

  // Setting a default success header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  switch (req.url) {
    case '/':
      return res.end('Homepage');
    
    case '/contact-us':
      return res.end('Contact Me at arkapal157@gmail.com');
      
    default:
      res.writeHead(404);
      return res.end('404 Not Found');
  }
});

server.listen(8000, () => {
  console.log('Server is running on PORT: 8000');
});