const prompt = require("prompt-sync")();

class Node {
  constructor(letter, endOfWord = false) {
    this.letter = letter;
    this.endOfWord = endOfWord;
    this.childs = {};
  }

  addChild(child) {
    letter = child.letter;
    this.childs[letter] = child;
  }

  getChild(letter) {
    return this.childs[letter];
  }
  addWord(word) {
    if (!word || typeof word !== "string") {
      console.log("Not a valid word.");
      return false;
    }

    if (!/^[a-zA-Z]+$/.test(word)) {
      console.log("Word must contain only letters.");
      return false;
    }
    let current = this;
    for (let letter of word) {
      if (!current.childs.hasOwnProperty(letter)) {
        current.childs[letter] = new Node(letter);
      }
      current = current.childs[letter];
    }
    current.endOfWord = true; // Marking the last letter
    console.log(`Added ${word} to dictionary`);
  }
}

function commandsPrinting() {
  console.log("Commands");
  console.log("add <word>        - Add word to dictionary");
  console.log("find <word>       - Check if word exists");
  console.log("complete <prefix> - Get completions");
  console.log("help              - Show this message");
  console.log("exit              - Quit program");
}

const parent = new Node();
parent.addWord("cat");
console.log(
  "=== AutoComplete Trie Console ===\nType 'help' for commands (or 'exit' to quit): "
);
let arg;
//input = "add cat";
mainLoop: while (true) {
  let input = prompt("> ");
  command = input.split(" ")[0].toLowerCase().trim();
  switch (command) {
    case "exit":
      console.log("Goodbye!");
      break mainLoop; // ✅ this breaks the while loop
    case "help":
      commandsPrinting();
      break;
    case "add":
      if (!input.split(" ")[1]) {
        console.log("Enter an argument. add + <word>");
        break;
      }
      arg = input.split(" ")[1].toLowerCase().trim();
      parent.addWord(arg);
      break;
  }
}

module.exports = Node;
