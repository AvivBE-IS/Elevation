const returnTime = function (time) {
  console.log("The current time is: " + time);
};

//Create a function called getTime that takes one parameter - a function - then calls it with an argument.
//Note that returnTime receives a parameter! So when we call it from getTime, make sure to pass the argument.
//const time = new Date().
const getTime = (func) => func(new Date());

getTime(returnTime);
