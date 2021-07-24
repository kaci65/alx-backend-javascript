export default function getStudentsByLocation(students, city) {
  if (Array.isArray(students)) {
    const studentsLoc = students.filter((student) => student.location === city);
    return studentsLoc;
  }
  return [];
}
