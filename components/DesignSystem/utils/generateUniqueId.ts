const MAX_LENGTH = 10;
let lastId = 0;

function generateUniqueId(prefix: string = "", length: number = MAX_LENGTH) {
  ++lastId;

  let result = (lastId + "").padStart(length, "0");

  if (typeof prefix === "string" && prefix.trim() !== "") {
    result = `${prefix}-${result}`;
  }

  return result;
}

export default generateUniqueId;
