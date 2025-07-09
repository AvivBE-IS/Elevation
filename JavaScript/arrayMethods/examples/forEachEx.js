let people = [
  { salary: 1300, goodPerformance: false },
  { salary: 1500, goodPerformance: true },
  { salary: 1200, goodPerformance: true },
  { salary: 1700, goodPerformance: false },
  { salary: 1600, goodPerformance: true },
];

//Spot check: given the following array, write a named function outside of a forEach method.
//The function should receive one parameter, person,
//and should increase the person's salary by 300 if their performance was good.

people
  .filter((p) => p.goodPerformance === true)
  .forEach((p) => (p.salary += 300));
console.log(people);
