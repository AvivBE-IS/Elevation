//Create a Bank module. It should have a variable and two functions:
// A private money variable which starts off at 500
// A depositCash function which takes a cash parameter and uses it to increase money
// A checkBalance function which logs the money

const Bank = function () {
  let money = 0;
  const deposit = function (cash) {
    money += cash;
  };
  const showBalance = function () {
    console.log(money);
  };
  return {
    deposit: deposit,
    showBalance: showBalance,
  };
};

const bank = Bank();
bank.deposit(200);
bank.deposit(250);
bank.showBalance(); //should print 950
