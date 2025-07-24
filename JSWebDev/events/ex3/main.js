const NUM_OF_BOXES = 10;

const getRandomColor = function () {
  const niceColors = [
    "#8e44ad",
    "#3498db",
    "#c0392b",
    "#f1c40f",
    "#d35400",
    "#2ecc71",
    "#1abc9c",
    "#2c3e50",
    "#7f8c8d",
  ];

  const randomPosition = Math.floor(Math.random() * niceColors.length);
  return niceColors[randomPosition];
};

const foo = function () {
  console.log("Inside foo");
  const container = document.getElementById("container");
  for (let i = 0; i < NUM_OF_BOXES; i++) {
    let box = document.createElement("div");
    box.style.height = "70px";
    box.style.width = "800px";
    container.appendChild(box);
    box.style.backgroundColor = getRandomColor();
    // Add mouseenter event for this specific box
    box.addEventListener("mouseenter", function () {
      this.style.backgroundColor = getRandomColor();
    });
  }
  //container.style.backgroundColor = "blue";

  //console.log("A box have been created.");

  console.log("Color changed.");
};
