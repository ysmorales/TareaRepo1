
export const getCSVInfo = (file, next) => {
  let reader = new FileReader();
  reader.onload = function (e) {
    let items = parseCSV(e.target.result);
    next(items)
  };
  reader.readAsText(file);
}

export const parseCSV = (str) => {
  var arr = []
  var quote = false

  for (var row = 0, col = 0, c = 0; c < str.length; c++) {
    let cc = str[c]
    let nc = str[c + 1]
    arr[row] = arr[row] || []
    arr[row][col] = arr[row][col] || ''

    if (cc == '"' && quote && nc == '"') {
      arr[row][col] += cc
      c++
      continue
    }

    if (cc == '"') {
      quote = !quote
      continue
    }

    if (cc == ',' && !quote) {
      col++
      continue
    }

    // if it's a newline (CRLF) and we're not in a quoted field,
    // skip the next character and move on to the next row and move to
    // column 0 of that new row
    if (cc == '\r' && nc == '\n' && !quote) {
      row++
      col = 0
      c++
      continue
    }

    // if it's a newline (LF or CR) and we're not in a quoted field,
    // move on to the next row and move to column 0 of that new row
    if (cc == '\n' && !quote) {
      row++
      col = 0
      continue
    }
    if (cc == '\r' && !quote) {
      row++
      col = 0
      continue
    }

    // otherwise, append the current character to the current column
    arr[row][col] += cc
  }

  return arr
}
