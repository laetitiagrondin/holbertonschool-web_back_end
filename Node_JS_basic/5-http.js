const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
    const database = process.argv[2];

  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('This is the list of our students\n');
    const logs = [];
    const originalLog = console.log;
    console.log = (message) => {
      logs.push(message);
    };
    countStudents(database)
      .then(() => {
        console.log = originalLog;
        res.end(logs.join('\n'));
      })
      .catch(() => {
        console.log = originalLog;
        res.end('Cannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
