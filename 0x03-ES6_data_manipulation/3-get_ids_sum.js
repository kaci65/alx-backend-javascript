export default function getStudentsByLocation(students) {
  return students.reduce((accumulator, student) => accumulator + student.id, 0);
}
