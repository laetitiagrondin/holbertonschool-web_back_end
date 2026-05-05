function getListStudentIds(listStudents) {
    if (!Array.isArray(listStudents)) {
        return [];
    }
    return listStudents.map(student => student.id);
}

export default getListStudentIds;
