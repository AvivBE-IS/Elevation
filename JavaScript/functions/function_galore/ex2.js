const story =
  "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage.";
const specialChars = [",", ".", "'", '"', "?", "!", ";"];
const wordCounts = {};

// Function to clean special characters and lowercase
function cleanText(sentence, specialChars) {
  for (let sign of specialChars) {
    sentence = sentence.replaceAll(sign, "");
  }
  return sentence.toLowerCase();
}

// Function to count word occurrences
function addToCounter(counter, word) {
  if (word in counter) {
    counter[word] += 1;
  } else {
    counter[word] = 1;
  }
}

// Clean the story text
const cleanedStory = cleanText(story, specialChars);

// Split into words and count
const words = cleanedStory.split(" ");
for (let word of words) {
  addToCounter(wordCounts, word);
}

console.log(wordCounts);
