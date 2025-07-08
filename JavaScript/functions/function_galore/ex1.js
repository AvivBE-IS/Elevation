const people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!",
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub",
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power",
  },
];

//"Damian is a 55+ Nursery Assistant from Bekyo, Zimbia. Damian loves to say
//  "With great responsibility comes great power"."

const capitalize = function (str) {
  let capitalizedStr = "";
  capitalizedStr += str[0].toUpperCase(); // first letter, capitalized
  capitalizedStr += str.slice(1); // rest of the string
  return capitalizedStr;
};

function capitalizeEveryWord(str) {
  let capitalizeEveryWordStr = "";
  let capitalizedWords = str.split(" ");
  for (let word of capitalizedWords) {
    capitalizeEveryWordStr += capitalize(word);
    capitalizeEveryWordStr += " ";
  }
  return capitalizeEveryWordStr;
}

const countryCity = function (city, country) {
  let str = "";
  str += capitalize(city) + ", " + capitalize(country);
  return str;
};

const getCatchphrase = function (catchphrase) {
  let str = ``;
  str += '"';
  str += catchphrase;
  str += '"';
  return str;
};

// console.log(capitalizeEveryWord(people_info[0].profession));
// console.log(capitalizeEveryWord(people_info[1].profession));
// console.log(capitalizeEveryWord(people_info[2].profession));
//console.log(countryCity(people_info[2]));

const getSummary = function (person) {
  let summary = "";
  summary += capitalize(person.name);
  summary += ` is ` + person.age + ` `; //Yes - you can put a function call inside the tick quotes!
  summary += capitalizeEveryWord(person.profession);
  summary += `from ${countryCity(person.city, person.country)} `;
  summary +=
    capitalize(person.name) +
    `Loves to say ` +
    getCatchphrase(person.catchphrase) +
    ".";
  return summary;
};

console.log(getSummary(people_info[0]));
console.log(getSummary(people_info[1]));
console.log(getSummary(people_info[2]));
