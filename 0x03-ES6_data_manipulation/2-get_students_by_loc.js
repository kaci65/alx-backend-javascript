export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location.indexOf(city) !== -1);
}
