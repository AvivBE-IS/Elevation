let movies = [
  { title: "Dareangel", studio: "Marvel", year: 2023 },
  { title: "Batterfly", studio: "Fox", year: 2021 },
  { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
  { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
];
//Write some code that prints out:

// "Let's go watch some movies" if at least one of the movies is by "Marvel"
// "Let's stay home" otherwise
// "Futuristic stuff" if all the movies are from after the year 2020
// "Yawn" otherwise
if (movies.some((m) => m.studio === "Marvel"))
  console.log("Let's go watch some movies");
else console.log("Let's stay home");
if (movies.every((m) => m.year > "2020"))
  console.log("Let's go watch some movies");
else console.log("Yawn");
