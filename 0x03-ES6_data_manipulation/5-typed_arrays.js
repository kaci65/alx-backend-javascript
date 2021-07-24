export default function createInt8TypedArray(length, position, value) {
  const typedArray = new ArrayBuffer(length);
  const dataView = new DataView(typedArray);
  try {
    dataView.setInt8(position, value);
  } catch (error) {
    throw Error('Position outside range');
  }
  return dataView;
}
