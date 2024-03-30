export const isValidRUT = (value: string) => {
  if (!value) {
    return true;
  }

  const regex = RegExp("^\\d{2}\\.\\d{3}\\.\\d{3}-\\d$");

  return regex.test(value);
};
//12.345.678-9