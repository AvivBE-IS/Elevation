const validate = function () {
  const btn = document.getElementById("btn");
  const name = document.getElementById("name").value;
  const salary = document.getElementById("salary").value;
  const birthday = document.getElementById("birthday").value;
  const phone = document.getElementById("phone").value;
  const warning = document.querySelector("#textDiv");
  //const warning = document.getElementById("warningTxt");
  warning.innerHTML = "Hello World";
  console.log(warning); // Should not be null
  warning.innerHTML = "some message";
  if (name.length === 0) {
    warning.innerHTML = "Name is missing";
  } else if (name.length < 2) {
    warning.innerHTML = "At least 2 characters required";
  } else if (salary < 10000 || salary > 16000) {
    warning.innerHTML = "Salary not valid";
  } else {
    warning.innerHTML = ""; // Clear the warning if all is good
  }
  console.log(
    "btn=",
    btn,
    "name=",
    name,
    "birthday=",
    birthday,
    "phone=",
    phone
  );
};
