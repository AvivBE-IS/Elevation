//Write a function that takes in an array of numbers.
// The function should loop through the numbers and (using the function from Exercise 1)
//  print out the odd numbers.

function isEven(number) {
  return !(number % 2);
}

function printingOddNumber(nums) {
  for (let num of nums) {
    if (!isEven(num)) {
      console.log(num);
    }
  }
}

let nums = [1, 2, 3, 4];
printingOddNumber(nums);
printingOddNumber([2, 2, 3, 5]);
