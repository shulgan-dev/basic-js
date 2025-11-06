const { NotImplementedError } = require("../lib");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length === 0) return [];

  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr.at(i)) {
      case "--discard-prev": {
        newArr.pop();
        break;
      }

      case "--double-prev": {
        if (newArr[i - 1]) {
          newArr.push(newArr.at(i - 1));
        }
        break;
      }

      case "--double-next": {
        if (arr.at(i + 1)) {
          newArr.push(arr.at(i + 1));
        }
        break;
      }

      case "--discard-next": {
        i = i + 1;
        newArr.push("");
        break;
      }
      default:
        newArr.push(arr.at(i));
    }
  }
  return newArr.filter((el) => el != "");
}

module.exports = {
  transform,
};
