export function isFieldFirstError(
  errors: Record<string, string | undefined | null>,
  targetField: string,
): boolean {
  for (const [field, errorMessage] of Object.entries(errors)) {
    if (errorMessage !== undefined && errorMessage !== null) {
      return field === targetField;
    }
  }
  return false;
}
