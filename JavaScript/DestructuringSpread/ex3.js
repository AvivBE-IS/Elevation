let employeesArr = [
  { name: "Joey", id: 1, age: 26 },
  { name: "Lily", id: null, age: 24 },
  { name: "Alice", id: 7, age: null },
  { name: "Sam", id: 8, age: 24 },
  { name: "Ray", id: null, age: null },
];

for (let employee of employeesArr) {
  // Check if id or age is nullish (null or undefined)
  const idValid = employee.id ?? null;
  const ageValid = employee.age ?? null;

  if (idValid === null || ageValid === null) {
    console.log(employee.name);
  }
}
