const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questions = [
  "What is your name? ",
  "What is your email? ",
  "What is your age? ",
  "What is your favorite color? ",
];

let answers = [];
let i = 0;

function askQuestion() {
  if (i < questions.length) {
    rl.question(questions[i], (answer) => {
      answers.push(answer);
      i++;
      askQuestion(); // ask the next one
    });
  } else {
    rl.close();
    console.log("Thanks! Here are your answers:");
    console.log(answers);
  }
}

askQuestion();
