export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return (this._name);
  }

  get length() {
    return (this._length);
  }

  get students() {
    return (this._name);
  }

  set name(newName) {
    if (typeof (newName) !== 'string') throw TypeError('Name must be a string');
    this._name = newName;
  }

  set length(newLength) {
    if (typeof (newLength) !== 'number') throw TypeError('Length must be a number');
    this._length = newLength;
  }

  set students(newStudents) {
    newStudents.forEach((newStudent) => {
      if (typeof (newStudent) !== 'string') {
        throw TypeError('Students must be an array of strings');
      }
    });
    this._students = newStudents;
  }
}
