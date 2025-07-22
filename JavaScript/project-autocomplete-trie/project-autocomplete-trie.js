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
//onst node = new Node('e', true);

while (true) {
  let command = prompt(
    "=== AutoComplete Trie Console ===\nType 'help' for commands (or 'exit' to quit): "
  );
  switch (command.toLowerCase()) {
    case "exit":
      console.log("Goodbye!");
      break;
    case "help":
      commandsPrinting();
  }
}
