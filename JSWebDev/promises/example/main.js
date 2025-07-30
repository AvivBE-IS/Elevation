const getRandomWord = function () {
  let words = [
    "Bonanza",
    "Elusive",
    "Hindrance",
    "Astute",
    "Polaroid",
    "Phonic",
    "Yonder",
  ];

  // using setTimeout to simulate an async operation that takes time
  setTimeout(() => {
    return words[Math.floor(Math.random() * words.length)];
  }, 1000);
};
console.log(getRandomWord());
