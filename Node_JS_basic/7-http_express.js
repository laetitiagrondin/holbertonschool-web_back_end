const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.type('text/plain');
  res.write('This is the list of our students\n');
  const originalLog = console.log;
  const logs = [];
  console.log = (message) => {
    logs.push(message);
  };
  countStudents(process.argv[2])
    .then(() => {
      console.log = originalLog;
      res.end(logs.join('\n'));
    })
    .catch(() => {
      console.log = originalLog;
      res.end('Cannot load the database');
    });
});

app.listen(1245);

module.exports = app;
