function addition(x, y) {
  if ((typeof (x) === 'number') && typeof(y) === 'number') {
    return x + y;
  } else {
    throw new TypeError("Parameters contain non-numeric or empty values.");
  }
}
module.exports = addition;