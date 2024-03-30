export function filterClass(
  predefinedClasses: string[],
  initial: string,
  other?: string[],
) {
  // Convert other string array to a single string
  const otherAsString = other?.join(" ");

  // Concatenate initial and otherAsString with a space.
  const totalPredefinedClasses = `${predefinedClasses} ${otherAsString}`;

  return initial
    .split(" ")
    .filter((cls) => totalPredefinedClasses.includes(cls))
    .join(" ");
}
