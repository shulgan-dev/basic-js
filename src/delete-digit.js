const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = 0;
  let nToS = String(n);

  for (let i = 0; i < nToS.length; i++) {
    let curNum = Number(nToS.slice(0, i) + nToS.slice(i + 1));
    if (curNum > maxNumber) {
      maxNumber = curNum;
    }
  }

  return maxNumber;
}

module.exports = {
  deleteDigit,
};
