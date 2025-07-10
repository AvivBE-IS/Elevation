const coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: { beans: 10, price: 20 },
    americano: { beans: 5, price: 10 },
    doubleShot: { beans: 15, price: 30 },
    frenchPress: { beans: 12, price: 24 },
  },
  money: 20,
  buyBeans: function (numBeans) {
    this.money -= numBeans;
    this.beans += numBeans;
    console.log("CoffeeShop just bought " + numBeans + " beans.");
  },

  makeDrink: function (drinkType) {
    const drink = this.drinkRequirements[drinkType];

    if (!drink) {
      console.log("Sorry, we don't make " + drinkType);
      return;
    }

    if (this.beans >= drink.beans) {
      this.beans -= drink.beans;
      this.money += drink.price; // Use price here
      console.log("Drinking " + drinkType);
      console.log("CoffeeShop earned " + drink.price);
      console.log("CoffeeShop money is " + this.money);
    } else {
      console.log("Sorry, we're all out of beans!");
      // Buy beans equal to the amount needed for the drink
      this.buyBeans(drink.beans);
    }
  },
};

coffeeShop.makeDrink("latte");
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); // now safely handled
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress");
