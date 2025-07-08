const posts = [
  {
    id: 1,
    text: "Love this product",
    comments: [],
  },
  {
    id: 2,
    text: "This is the worst. DON'T BUY!",
    comments: [
      { id: 1, text: "Idiot has no idea" },
      { id: 2, text: "Fool!" },
      { id: 3, text: "I agree!" },
    ],
  },
  {
    id: 3,
    text: "So glad I found this. Bought four already!",
    comments: [],
  },
];
const postId = 2;
const commentId = 3;

let postIndex = -1;
// Find the index of the post with id 2
for (let i = 0; i < posts.length; i++) {
  if (posts[i].id === postId) {
    postIndex = i;
    break;
  }
}

if (postIndex !== -1) {
  let commentIndex = -1;
  // Find the index of the comment with id 3 inside the post's comments
  for (let j = 0; j < posts[postIndex].comments.length; j++) {
    if (posts[postIndex].comments[j].id === commentId) {
      commentIndex = j;
      break;
    }
  }

  // Remove the comment if found
  if (commentIndex !== -1) {
    posts[postIndex].comments.splice(commentIndex, 1);
  }
}

console.log(posts);
