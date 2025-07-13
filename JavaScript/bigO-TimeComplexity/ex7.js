// You are given the following spreadsheet data about your employees:

//     _id     |name   |age    |salary
//     --------------------------------
//     ax01    |Ray    |28     |1300
//     qs84    |Lucius |31     |840
//     bg33    |Taylor |18     |2700
// Copy to clipboardErrorCopied
// In reality, you have 320,000 employees, and you need to be able to find the salary of any employee very fast.

// You need to decide how you're going to store this data, such that the function findEmployeeSalary(employeeID) runs in O( 1 ) - constant time.

// Then, of course, write the findEmployeeSalary(employeeID) function.

const NAME = 0;
const AGE = 1;
const SALARY = 2;

const findEmployeeSalary = (id) => employee[id][SALARY];

const employee = {
  ax01: [`Ray`, 28, 1300],
  qs84: [`Lucius`, 31, 840],
  bg33: [`Taylor`, 18, 2700],
};

console.log(findEmployeeSalary(`qs84`));
console.log(findEmployeeSalary(`ax01`));
