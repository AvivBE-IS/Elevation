let meatArr = ["beef", "chicken"];
let vegetableArr = ["rabbit", "carrots", "potatoes", "lettuce"];

meatArr = [...meatArr, vegetableArr[0]];

// Destructure rabbit from vegetableArr
let [rabbit, ...correctVegetables] = vegetableArr;
vegetableArr = [...correctVegetables];

console.log("Meat:", meatArr);
console.log("Vegetables:", vegetableArr);

// res:
// let meatArr = ["beef","chicken","rabbit"]
// let vegetableArr = ["carrots","potatoes","lettuce"]
