export default function updateStudentGradeByCity(listStudents, city, newGrades) {
    return listStudents
    .filter(student => student.location === city)
    .map(student => {
        const gradeObj = newGrades.find(g => g.studentId === student.id);
        return {
            ...student,
            grade: gradeObj ? gradeObj.grade : "N/A"
        };
    });
}
