function checkExists(nums, number) {
  for (let num of nums) {
    if (num === number) return true;
  }
  return false;
}

console.log(checkExists([2, 3, 4, 6], 4));
console.log(checkExists([2, 3, 10, 6], 4));
