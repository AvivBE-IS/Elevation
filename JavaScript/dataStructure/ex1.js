// Create a data structure called UniqueArray

// It should have four methods:

// add(item)
// Stores the item only if it hasn't been added already
// showAll()
// Shows all the added items
// exists(item)
// Returns true if the item has been added, false otherwise
// This should run in O( 1 )
// get(index)
// Returns the item at index index, or -1 if it doesn't exit
// Effectively, this data structure works like a normal array (for the most part), but:

// It only works for primitive types
// It only allows you to add unique items to it

class UniqueArray {
  constructor() {
    this.uniqueArray = new Set();
    this.uniqueSize = 0;
  }
  add(item) {
    if (this.uniqueArray.has(item)) {
      console.log("Item has added already.");
      return false;
    } else {
      this.uniqueArray.add(item);
      console.log(item + " added successfuly");
      return true;
    }
  }

  showAll() {
    this.uniqueArray.forEach((item) => console.log(item));
  }
  exists(item) {
    return this.uniqueArray.has(item);
  }
  get(index) {
    if (index > this.uniqueSize) return -1;
    return [this.uniqueArray.asArray][index];
  }
}

// To test your data structure, use the following code:

const uniqueStuff = new UniqueArray();
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.add("toy");
uniqueStuff.showAll(); //prints ["toy"]
uniqueStuff.exists("toy"); //returns true
uniqueStuff.add("poster");
uniqueStuff.add("hydrogen");
console.log(uniqueStuff.get(2)); //prints "hydrogen"
