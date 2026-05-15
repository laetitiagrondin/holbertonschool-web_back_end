import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const students = data.split('\n').filter((l) => l).slice(1);
    const fields = {};
    students.forEach((s) => {
      const [name,,, field] = s.split(',');
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(name);
    });
    resolve(fields);
  });
});

export default readDatabase;
