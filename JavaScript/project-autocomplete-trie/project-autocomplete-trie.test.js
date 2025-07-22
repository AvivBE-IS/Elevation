const Node = require("./project-autocomplete-trie");

test("addWord should add letters to the trie correctly", () => {
  const root = new Node();
  root.addWord("cat");

  expect(root.childs["c"]).toBeDefined();
  expect(root.childs["c"].childs["a"]).toBeDefined();
  expect(root.childs["c"].childs["a"].childs["t"]).toBeDefined();
  expect(root.childs["c"].childs["a"].childs["t"].endOfWord).toBe(true);
});
