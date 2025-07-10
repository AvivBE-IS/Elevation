//Create a StringFormatter module. It should have two functions:
// capitalizeFirst - receives a string and returns the string with the first letter uppercased, and the next ones lowercased
// toSkewerCase - receives a string and replaces any spaces with a dash

const StringFormatter = function () {
  const capitalizeFirst = function (str) {
    if (str === ``) return "The string is empty";
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  };
  const toSkewerCase = function (str) {
    return str.replace(` `, `-`);
  };
  return {
    capitalizeFirst: capitalizeFirst,
    toSkewerCase: toSkewerCase,
  };
};

const formatter = StringFormatter();

console.log(formatter.capitalizeFirst("dorothy")); //should return Dorothy
console.log(formatter.toSkewerCase("blue box")); //should return blue-box
