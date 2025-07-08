// const square = function (num) {
//   console.log(num * num);
// };

const square = (num) => console.log(num * num);

square(4); // should print 16

// formalTitle = getFormalTitle("Madamme", "Lellouche")
// console.log(formalTitle) //returns "Maddame Lellouche"

const formalTitle = (title, name) => title + name;
console.log(formalTitle("Maddame", " Lellouche"));
