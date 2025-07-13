// Earlier in this lesson we discussed what a binary search is and how we can use it to find something in a sorted array in O( log(n) ) time.

// Using the visuals and explanations from earlier, write a findIndex(numbers, num)function that finds the index of num in the given numbers array in O( log(n) ).

// Use the following sorted array to determine what the index of the number 2630 is - you should find it to be 86:

function findIndex(numbers, num) {
  if (!Array.isArray(numbers)) return "numbers isn't an array.";
  if (numbers.length === 0) return "Array is empty";

  let start = 0;
  let end = numbers.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (numbers[mid] === num) return mid;
    else if (numbers[mid] < num) start = mid + 1;
    else end = mid - 1;
  }

  return "num doesn't exist in numbers array";
}

let numbers = [
  24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427,
  442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852,
  896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272,
  1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667,
  1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198,
  2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554,
  2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932,
  2962, 2984, 2987,
];
console.log(findIndex(numbers, 444));
// console.log(numbers.slice(0, numbers.length / 2 - 1));
// console.log("");
// console.log(numbers.slice(numbers.length / 2 + 1));
// console.log("finish");
