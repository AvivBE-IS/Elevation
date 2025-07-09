const studentScores = [
  92, 87, 76, 95, 88, 72, 91, 83, 79, 96, 85, 74, 89, 93, 81,
];

const grades = studentScores.reduce((counts, score) => {
  counts[score] = (counts[score] || 0) + 1;
  return counts;
}, {});

console.log(grades);
