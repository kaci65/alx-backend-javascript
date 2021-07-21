export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    const idList = students.map((student) => student.id);
    return idList;
  }
  return [];
}
