let vegetables = [
  { name: "Eggplant", color: "purple" },
  { name: "Carrot", color: "orange" },
  { name: "Squash", color: "orange" },
  { name: "Tomatoe", color: "red" },
  { name: "Onion", color: "white" },
  { name: "Sweet Potato", color: "orange" },
];

orangeVeg = vegetables.filter((veg) => veg.color === "orange");
console.log(orangeVeg);

// orangeVeg = vegetables.filter(doesOrange);

// function doesOrange(veg) {
//   if (veg.color === "orange") return true;
//   else return false;
// }
// console.log(orangeVeg);
