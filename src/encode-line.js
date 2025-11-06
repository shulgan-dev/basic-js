const { NotImplementedError } = require("../lib");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let count = 0;
  let currentChar = str.at(0);
  let encodeString = "";
  for (let i = 0; i <= str.length; i++) {
    if (str.at(i) === currentChar) {
      count++;
    } else {
      encodeString += `${count > 1 ? count : ""}${currentChar}`;
      currentChar = str.at(i);
      count = 1;
    }
  }
  return encodeString;
}

module.exports = {
  encodeLine,
};
