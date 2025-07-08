//Given the following code, what error do you get? Write the missing part to make the code work:

const displayData = function (alertDataFunc, logDataFunc, data) {
  alertDataFunc(data);
  logDataFunc(data);
};

displayData(console.error, logData, "I like to party");
//Note: do not change any of the code above.
// You only need to add something to make this work. Remember, console.error is a built-in function in JS.

//You are trying to use a variable or function named logData, \
// but it hasn't been declared or defined anywhere in the scope where you're trying to use it.

function logData(data) {
  console.log(data);
}
