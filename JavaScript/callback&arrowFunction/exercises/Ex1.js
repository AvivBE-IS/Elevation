const push = function () {
  console.log("pushing it!");
};

const pull = function () {
  console.log("pulling it!");
};

// const pushPull = function (func) {
//   if (func === push) {
//     return push();
//   } else if (func === pull) {
//     return pull();
//   } else {
//     console.log("Unknown function");
//   }
// };

// const pushPull = function (func) {
//   func();
// };

const pushPull = (func) => func();

//Write a function pushPull that takes one argument - a function - and invokes that function:
pushPull(push); //should print "pushing it!"
pushPull(pull); //should print "pulling it!"
// console.log(typeof push);
