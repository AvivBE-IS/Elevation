const prompt = require("prompt-sync")();

const CHECK_BALANCE = "1";
const DEPOSIT_MONEY = "2";
const WITHDRAW_MONEY = "3";
const EXIT = "4";

class Bank {
  #balance = 0;
  #option = "0";

  flow() {
    this.#displayMenu();
    this.#takeOption();
    return this.#handleOption();
  }

  #displayMenu() {
    console.log(
      "\n=== Banking System ===\n1) Check Balance\n2) Deposit Money\n3) Withdraw Money\n4) Exit"
    );
  }

  #takeOption() {
    this.#option = prompt("Choose option (1-4): ");
    while (
      this.#option !== CHECK_BALANCE &&
      this.#option !== DEPOSIT_MONEY &&
      this.#option !== WITHDRAW_MONEY &&
      this.#option !== EXIT
    ) {
      console.log("Please enter a valid digit (1-4)");
      this.#option = prompt("Choose option (1-4): ");
    }
  }

  #handleOption() {
    switch (this.#option) {
      case CHECK_BALANCE:
        this.#checkBalance();
        break;
      case DEPOSIT_MONEY:
        this.#depositMoney();
        break;
      case WITHDRAW_MONEY:
        this.#withdrawMoney();
        break;
      case EXIT:
        console.log("Exiting...");
        return EXIT;
    }
    return "continue";
  }

  #checkBalance() {
    console.log(`Your balance is $${this.#balance}`);
  }

  #depositMoney() {
    const amount = parseFloat(prompt("Enter amount to deposit: "));
    if (isNaN(amount) || amount <= 0) {
      console.log("Invalid amount");
      return;
    }
    this.#balance += amount;
    console.log(`Deposited $${amount}`);
  }

  #withdrawMoney() {
    const amount = parseFloat(prompt("Enter amount to withdraw: "));
    if (isNaN(amount) || amount <= 0) {
      console.log("Invalid amount");
      return;
    }
    if (amount > this.#balance) {
      console.log("Insufficient funds");
      return;
    }
    this.#balance -= amount;
    console.log(`Withdrew $${amount}`);
  }
}

const bank = new Bank();
let option = "0";

while (true) {
  option = bank.flow();
  if (option === EXIT) break;
}
