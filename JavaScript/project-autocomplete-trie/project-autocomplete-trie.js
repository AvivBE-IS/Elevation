export class Node {
  constructor(letter, endOfWord = false) {
    this.letter = letter;
    this.endOfWord = endOfWord;
    this.childs = {};
  }

  addChild(child) {
    const letter = child.letter;
    this.childs[letter] = child;
  }

  getChild(letter) {
    return this.childs[letter];
  }

  addWord(word) {
    if (!this.wordValidation(word)) return false;
    let current = this;
    for (let letter of word) {
      if (!current.childs.hasOwnProperty(letter)) {
        current.childs[letter] = new Node(letter);
      }
      current = current.childs[letter];
    }
    current.endOfWord = true; // Marking the last letter
    console.log(`Added ${word} to dictionary`);
    return true;
  }

  findWord(word) {
    let current = this;
    for (let letter of word) {
      if (!current.childs.hasOwnProperty(letter)) {
        console.log(`✗ ${word} not found in dictionary`);
        return false;
      }
      if (current.endOfWord === true) {
        console.log(`✓ ${word} exists in dictionary`);
        return true;
      }
      current = current.childs[letter];
    }
    return false;
  }

  wordValidation(word) {
    if (!word || typeof word !== "string") {
      console.log("Not a valid word.");
      return false;
    }

    if (!/^[a-zA-Z]+$/.test(word)) {
      console.log("Word must contain only letters.");
      return false;
    }
    return true;
  }
  predictWords(prefix) {
    if (!this.wordValidation(prefix)) return false;

    let current = this;
    for (let letter of prefix) {
      if (!current.childs.hasOwnProperty(letter)) {
        console.log(`✗ Prefix '${prefix}' not found.`);
        return false;
      }
      current = current.childs[letter];
    }

    const predictions = [];

    function dfs(node, path) {
      if (node.endOfWord) {
        predictions.push(prefix + path);
      }

      for (let childLetter in node.childs) {
        dfs(node.childs[childLetter], path + childLetter);
      }
    }

    dfs(current, "");
    if (predictions.length === 0) {
      console.log(`✓ No completions found for '${prefix}'`);
    } else {
      console.log(`✓ Completions for '${prefix}': ${predictions.join(", ")}`);
    }

    return predictions;
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

console.log(
  "=== AutoComplete Trie Console ===\nType 'help' for commands (or 'exit' to quit):"
);

export function enterWord() {
  const input = document.getElementById("addWordTxt");
  const word = input.value.trim();
  if (!word) {
    alert("Please enter a word.");
    return;
  }
  // TODO: Add logic to insert the word into your trie here
  alert(`Word "${word}" added!`);
  input.value = "";
}
window.enterWord = enterWord;
export { Node, enterWord };

// const parent = new Node();
// parent.addWord("cat");

// if (require.main === module) {
//   while (true) {
//     const input = prompt("> ");
//     const command = input.split(" ")[0].toLowerCase().trim();

//     switch (command) {
//       case "exit":
//         console.log("Goodbye!");
//         break;
//       case "help":
//         commandsPrinting();
//         continue;
//       case "add":
//         const arg = input.split(" ")[1]?.toLowerCase().trim();
//         if (!arg) {
//           console.log("Enter an argument. add + <word>");
//           continue;
//         }
//         parent.addWord(arg);
//         continue;
//       default:
//         console.log("Unknown command. Type 'help' for options.");
//         continue;
//     }
//     break;
//   }
// }
