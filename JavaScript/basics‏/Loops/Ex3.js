const posts = [
  { id: 1, text: "Love this product" },
  { id: 2, text: "This is the worst. DON'T BUY!" },
  { id: 3, text: "So glad I found this. Bought four already!" },
];

const idToRemove = 2;

// Find the index of the post with id 2
let indexToRemove = -1;
for (let postIndex in posts) {
  if (posts[postIndex].id === idToRemove) {
    indexToRemove = i;
    break;
  }
}

// Remove the post if found
if (indexToRemove !== -1) {
  posts.splice(indexToRemove, 1);
}

console.log(posts);
