const fs = require('fs');

module.exports = function countStudents(path) {
    try {
        const data = fs.readFileSync(path, 'utf8');
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        const fields = {};
        const students = lines.slice(1);
        let totalStudents = 0;
        students.forEach((line) => {
            const parts = line.split(',');
            const firstname = parts[0];
            const field = parts[3];
            if (firstname && field) {
                totalStudents += 1;
                if (!fields[field]) {
                    fields[field] = [];
                }
                fields[field].push(firstname);
            }
        });
        console.log(`Number of students: ${totalStudents}`);
        for (const field of Object.keys(fields)) {
            const list = fields[field].join(', ');
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${list}`);
        }
    } catch (err) {
        throw new Error('Cannot load the database');
    }
}
