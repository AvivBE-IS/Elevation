const determineWeather = (temp) => {
  if (temp > 25) {
    return "hot";
  }
  return "cold";
};

const commentOnWeather = (temp) => `It's ` + determineWeather(temp);

//Create a one-line arrow function called commentOnWeather that takes one parameter, temp.
// It should call determineWeather and return the concatenation of "It's " and determineWeather's output:

console.log(commentOnWeather(30)); //returns "It's hot"
console.log(commentOnWeather(22)); //returns "It's cold"
