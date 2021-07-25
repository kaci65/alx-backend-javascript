export default function updateUniqueItems(groceryMap) {
  if (groceryMap instanceof Map) {
    for (const [key, value] of groceryMap) {
      if (value === 1) {
        groceryMap.set(key, 100);
      }
    }
    return groceryMap;
  }
  throw TypeError('Cannot process');
}
