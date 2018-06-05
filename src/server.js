const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.write('Hello from Heroku dynamic env!');
  res.end();
});

server.listen(port, () => {
  console.info(`listening ${server.address().port}`);
});
