function duplicates(arr) {
  for (let i = 0; i < arr.length; i++)
    for (let j = i + 1; j < arr.length; j++)
      if (arr[i] === arr[j]) console.log(arr[i] + ` `);
}
function duplicatesSortedArr(sortedArr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) return sortedArr;
  }
}
function duplicatesSortedArr2Pointers(sortedArr) {
  for (let i = 0, j = 1; i < arr.length; i++, j++) {
    if (arr[i] === arr[j]) {
      {
        console.log(arr[i] + ` `);
        i = j + 1;
        j = i + 1;
      }
    }
  }
}

function sum2Pointers(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return true;
      }
    }
  }
  return false;
}

// function setSol(sortedSetArr, tar) {
//   for (let i=0, j = sortedSetArr.length -1 ,j > 0;){
//     if (sortedSetArr[i] +sortedSetArr[j] === tar) return true;
//     if (sortedSetArr[i] +sortedSetArr[j] < tar) i++;
//     if (sortedSetArr[i] +sortedSetArr[j] > tar) j--;
//   }
// }

console.log(ProcessingInstruction.argv);
