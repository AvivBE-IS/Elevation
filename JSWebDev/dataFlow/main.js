const posts = [
  { name: "Alice", text: "Hello world!" },
  { name: "Bob", text: "Nice weather today." },
];

const render = function () {
  const container = document.getElementById("postsContainer");

  // Clear the container first to prevent duplicates
  container.innerHTML = "";

  for (let post of posts) {
    const postDiv = document.createElement("div");
    postDiv.textContent = `${post.name}: ${post.text}`;
    container.appendChild(postDiv);
  }
};

// Initial render
render();

// Add new post on button click
document.getElementById("submitBtn").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value.trim();
  const text = document.getElementById("textInput").value.trim();

  if (name && text) {
    posts.push({ name, text });
    render();

    // Clear inputs
    document.getElementById("nameInput").value = "";
    document.getElementById("textInput").value = "";
  }
});
