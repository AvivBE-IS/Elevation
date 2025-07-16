const prompt = require("prompt-sync")();

const questions = [
  { "Question 1: What is 2 + 2? ": "4" },
  { "Question 2: What is the capital of France? ": "Paris" },
  { "Question 3: What year is it? ": "2025" },
];
let correctAns = 0;
for (quest of questions) {
  let ans = prompt(Object.keys(quest).toString());
  if (ans === Object.values(quest).toString()) correctAns++;
}

console.log("Final Score: " + correctAns + "/3 correct!");

// Question 1: What is 2 + 2?
// Question 2: What is the capital of France?
// Question 3: What year is it?
// Final Score: 2/3 correct!
