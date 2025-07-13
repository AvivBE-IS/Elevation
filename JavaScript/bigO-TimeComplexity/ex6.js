function findDuplicates(arr) {
  const seen = {};

  for (let element of arr) {
    if (seen[element]) {
      console.log("There is a duplicate");
      return true;
    }
    seen[element] = true;
  }

  return false;
}

// Test
console.log(findDuplicates([1, 2, 3, 4, 1])); // true
console.log(findDuplicates([1, 2, 3, 4])); // false
