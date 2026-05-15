import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((fields) => {
        const text = ['This is the list of our students'];
        Object.keys(fields).sort().forEach((f) => {
          text.push(`Number of students in ${f}: ${fields[f].length}. List: ${fields[f].join(', ')}`);
        });
        res.status(200).send(text.join('\n'));
      })
      .catch(() => res.status(500).send('Cannot load the database'));
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    return readDatabase(process.argv[2])
      .then((fields) => res.status(200).send(`List: ${fields[major].join(', ')}`))
      .catch(() => res.status(500).send('Cannot load the database'));
  }
}
