export default function hasValuesFromArray(set, array) {
  // for (let elem of array) {
  //  if (set.has(elem)) {
  //    return true;
  //  } else {
  //    return false;
  //  }
  // }
  return array.every((elem) => set.has(elem));
}
