const fibonacci = function (position) {
  let result;
  let previousValue = 1;
  let temp = 0;
  if (position < 1) return "OOPS";
  for (let i = 1; i <= position; i++) {
    result = previousValue + temp;
    previousValue = temp;
    temp = result;
  }
  return result;
};

// Do not edit below this line
module.exports = fibonacci;
