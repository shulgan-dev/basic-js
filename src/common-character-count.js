const { NotImplementedError } = require("../lib");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let minLength = s1.length < s2.length ? s1 : s2;
  let arrFiltered = Array.from(new Set(minLength.split("")));
  let count = 0;
  for (let i = 0; i < arrFiltered.length; i++) {
    count += Math.min(
      s1.split("").filter((el) => arrFiltered.at(i) === el).length,
      s2.split("").filter((el) => arrFiltered.at(i) === el).length
    );
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
