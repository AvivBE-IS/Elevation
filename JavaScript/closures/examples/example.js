const mathOperations = function () {
  const add = function (x, y) {
    return x + y;
  };
  return add;
};

const math = mathOperations();
console.log(math(1, 2));
