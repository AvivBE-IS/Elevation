function pause(milliseconds) {
  var date = new Date();
  while (new Date() - date <= milliseconds) {
    /* Do nothing */
  }
}

function firstFunc() {
  pause(3000);
  console.log("I have to go first.");
}

function secondFunc() {
  console.log("Then I can go");
}

firstFunc();
secondFunc();
