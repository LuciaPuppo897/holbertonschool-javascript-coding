const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    const lines = data.split('\n').filter(line => line.trim() !== '');

    if (lines.length === 0) {
      throw new Error('No valid student data found in the database');
    }

    const header = lines[0].split(',');
    const students = lines.slice(1);

    const result = {
      totalStudents: students.length
    };

    header.forEach((field, index) => {
      const fieldStudents = students.map(student => student.split(',')[index].trim()).filter(Boolean);
      result[`studentsIn${field}`] = fieldStudents.length;
      result[`listOf${field}`] = fieldStudents.join(', ');
    });

    console.log(result);
    console.log(`Number of students: ${result.totalStudents}`);
  } catch (error) {
    throw new Error(error)
  }
}

module.exports = countStudents;
