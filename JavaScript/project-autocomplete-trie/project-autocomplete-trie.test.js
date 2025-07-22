const Node = require("./project-autocomplete-trie");

describe("Trie (Node)", () => {
  let root;

  beforeEach(() => {
    root = new Node();
  });

  test("addWord should add letters to the trie correctly", () => {
    root.addWord("cat");

    expect(root.childs["c"]).toBeDefined();
    expect(root.childs["c"].childs["a"]).toBeDefined();
    expect(root.childs["c"].childs["a"].childs["t"]).toBeDefined();
    expect(root.childs["c"].childs["a"].childs["t"].endOfWord).toBe(true);
  });

  test("addWord should not add empty input", () => {
    const result = root.addWord("");
    expect(result).toBe(false);
  });

  test("addWord should not accept invalid characters", () => {
    const result = root.addWord("c@t");
    expect(result).toBe(false);
  });

  test("addWord shouldn't add duplicate words", () => {
    root.addWord("cat");
    const result = root.addWord("cat");
    expect(result).toBe(false);
  });

  test("findWord should return true for existing word", () => {
    root.addWord("cat");
    const result = root.findWord("cat");
    expect(result).toBe(true);
  });

  test("findWord should return false for non-existing word", () => {
    root.addWord("cat");
    const result = root.findWord("dog");
    expect(result).toBe(false);
  });

  test("findWord should return false for partial match", () => {
    root.addWord("cat");
    const result = root.findWord("ca");
    expect(result).toBe(false);
  });

  test("wordValidation should return true for valid lowercase string", () => {
    const result = root.wordValidation("apple");
    expect(result).toBe(true);
  });

  test("wordValidation should return false for uppercase letters", () => {
    const result = root.wordValidation("Apple");
    expect(result).toBe(false);
  });

  test("wordValidation should return false for special characters", () => {
    const result = root.wordValidation("a@pple");
    expect(result).toBe(false);
  });

  test("predictWords should return completions for valid prefix", () => {
    root.addWord("cat");
    root.addWord("car");
    root.addWord("cart");

    const result = root.predictWords("ca");
    expect(result).toContain("cat");
    expect(result).toContain("car");
    expect(result).toContain("cart");
  });

  test("predictWords should return empty array for prefix not found", () => {
    root.addWord("cat");
    const result = root.predictWords("dog");
    expect(result).toEqual([]);
  });

  test("predictWords should return exact word if it's a complete word", () => {
    root.addWord("cat");
    const result = root.predictWords("cat");
    expect(result).toEqual(["cat"]);
  });
});
