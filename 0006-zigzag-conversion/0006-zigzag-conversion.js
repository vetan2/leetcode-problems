/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1 || numRows > s.length) {
    return s
  }

  const resArr = new Array(numRows).fill("")

  let idx = 0
  let step = 1
  for (const str of s) {
    resArr[idx] += str
    if (idx === 0) {
      step = 1
    } else if (idx === numRows - 1) {
      step = -1
    }

    idx += step
  }

  return resArr.join("")
}
