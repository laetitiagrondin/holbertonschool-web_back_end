const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((data) => {
        const responseText = `This is the list of our students\n${data}`;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(responseText);
      })
      .catch((err) => {
        const responseText = `This is the list of our students\n${err.message}`;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(responseText);
      });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
