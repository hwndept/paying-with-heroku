const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.write('Hi!');
  res.end();
});

server.listen(port, () => {
  console.info(`listening ${server.address().port}`);
});
