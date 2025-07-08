function armstrongNum(num) {
  let sum = 0;
  for (let i = num; i > 0; i = Math.floor(i / 10)) {
    sum += Math.pow(i % 10, 2);
  }
  return sum;
}

console.log(armstrongNum(153));
console.log(armstrongNum(4727));
