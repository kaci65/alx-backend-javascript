export default function updateUniqueItems(groceryMap) {
  for (const [key, value] of groceryMap.entries()) {
    if (value === 1) {
      groceryMap.set(key, 100);
    }
  }
  return groceryMap;
}
