const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (items) {
  result = items.reduce((total, currentVal) => total + currentVal, 0);
  return result;
};

const multiply = function (items) {
  result = items.reduce((total, currentVal) => total * currentVal, 1);
  return result;
};

const power = function (x, y) {
  return Math.pow(x, y);
};

const factorial = function (x) {
  let result = x;
  if (x === 0) return 1;
  for (let i = x - 1; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
