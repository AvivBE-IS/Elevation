let wordCounter = 0; //global varible

class Node {
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
const trie = new Node();

function enterWord() {
  const input = document.getElementById("addWordTxt");
  console.log("input=" + input);
  const word = input.value.trim();
  if (!word) {
    // alert("✗ Cannot add an empty word.");
    const successDiv = document.getElementById("successDiv");
    successMsg(word);
    return;
  }
  trie.addWord(word);
  console.log(`Word "${word}" added!`);
  input.value = "";
  countWords();
  successMsg(word);
}

const countWords = function () {
  wordCounter++;
  const webCnt = document.getElementById("webCnt");
  console.log("webCnt=" + webCnt);
  webCnt.innerHTML = wordCounter;
};

const successMsg = function (word) {
  const successDiv = document.getElementById("successDiv");
  console.log("webCnt=" + successDiv);
  successDiv.style.visibility = "visible";
  if (word) {
    successDiv.placeholder = `✓ Added '${word}' to dictionary`;
    successDiv.style.backgroundColor = "rgb(198,246,213)";
    successDiv.style.borderColor = "rgb(182,238,200)";
  } else {
    successDiv.placeholder = "✗ Cannot add an empty word.";
    successDiv.style.backgroundColor = "rgb(254, 215, 215)";
    successDiv.style.borderColor = "rgb(253, 209, 209)";
  }
};
const liveSuggestions = function () {
  const userInput = document.getElementById("suggestTxt");
  console.log("userInput " + userInput.value);
  const words = trie.predictWords(userInput.value);
  console.log("words=" + words);
  showSuggetions(words);
};

const showSuggetions = function (words) {
  const insideDiv = document.getElementById("insideDiv");
  const suggestionsList = document.getElementById("suggestionsList");
  const userInput = document.getElementById("suggestTxt");

  suggestionsList.innerHTML = "";
  if (userInput.value === "") {
    console.log("input empty");
    insideDiv.style.visibility = "hidden";

    return true;
  }
  if (!words) return true;
  insideDiv.style.visibility = "visible";

  for (let word of words) {
    const newSuggestion = document.createElement("li");
    newSuggestion.textContent = word;
    suggestionsList.appendChild(newSuggestion);
  }
};
