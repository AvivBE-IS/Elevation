const prompt = require("prompt-sync")();

function commandsPrinting() {
  console.log("Commands");
  console.log("add <word>        - Add word to dictionary");
  console.log("find <word>       - Check if word exists");
  console.log("complete <prefix> - Get completions");
  console.log("help              - Show this message");
  console.log("exit              - Quit program");
}

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
