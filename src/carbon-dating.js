const { NotImplementedError } = require("../lib");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(n) {
  if (typeof n != "string" || isNaN(parseFloat(n)) || +n > 15 || +n <= 0) {
    return false;
  }
  let k = 0.693 / HALF_LIFE_PERIOD;
  let rez = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(n)) / k);
  if (rez < 0) {
    return false;
  }
  return rez;
}

module.exports = {
  dateSample,
};
