export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.get(endpoint) === undefined) {
    weakMap.set(endpoint, 1);
  } else {
    weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  }
  if (weakMap.get(endpoint) >= 5) {
    throw TypeError('Endpoint load is high');
  }
}
