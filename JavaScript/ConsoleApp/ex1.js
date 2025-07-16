// import promptSync from "prompt-sync";
// const prompt = promptSync();

const prompt = require("prompt-sync")();

class Calculator {
  // Declare private fields
  #num1;
  #num2;
  #op;

  constructor() {
    this.#num1 = Number(prompt("Insert first number: "));
    this.#op = prompt("Insert an operation (+, -, *, /): ");
    this.#num2 = Number(prompt("Insert second number: "));
  }

  // Private methods
  #sum = () => this.#num1 + this.#num2;
  #sub = () => this.#num1 - this.#num2;
  #mul = () => this.#num1 * this.#num2;
  #div = () =>
    this.#num2 !== 0 ? this.#num1 / this.#num2 : "Error: Division by zero";

  opChoosing() {
    switch (this.#op) {
      case `+`:
        console.log("Result:", this.#sum());
        break;
      case `-`:
        console.log("Result:", this.#sub());
        break;
      case `*`:
        console.log("Result:", this.#mul());
        break;
      case `/`:
        console.log("Result:", this.#div());
        break;
      default:
        console.log("Invalid operation");
    }
  }

  cal = () => this.opChoosing();
}

const calc = new Calculator();
calc.cal();

// const num1 = process.argv[0];
// const op = process.argv[1];
// const num2 = process.argv[2];

// node calculator.js 10 + 5
// # Output: 10 + 5 = 15

// node calculator.js 20 / 4
// # Output: 20 / 4 = 5
