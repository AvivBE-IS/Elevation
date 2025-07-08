//Write a function called isEven that accepts a number as a parameter and checks if the number is even
//  or not. Return true if it is even or false if it is odd. Don't Google this one ;) Use modulo %

function isEven(number) {
  return !(number % 2);
}

console.log(isEven(4));
console.log(isEven(3));
