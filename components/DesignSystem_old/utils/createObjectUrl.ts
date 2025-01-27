export function createObjectUrl(file: File): string {

  try {
    return URL.createObjectURL(file);
  } catch (error) {

  }
  return file as unknown as string

}
