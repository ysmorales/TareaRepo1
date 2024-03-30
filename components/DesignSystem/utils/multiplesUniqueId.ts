import generateUniqueId from "./generateUniqueId";

// The function receives a count as an input parameter. It uses a for loop to generate an array of
// unique IDs. The number of unique IDs generated is equal to the count passed to the function.
// The unique IDs are produced by the function generateUniqueId, which is called within the loop.
// The function then returns the array of unique IDs. This function would be useful in scenarios
// where multiple unique identifiers are needed, for instance, assigning unique keys to dynamically
// generated elements in a list.
export const multiplesUniqueId = (count: number) => {
  const ids = [];
  for (let i = 0; i < count; i++) {
    ids.push(generateUniqueId());
  }

  return ids;
};
