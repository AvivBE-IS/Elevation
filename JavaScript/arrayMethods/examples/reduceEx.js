let scores = [87, 92, 78, 95, 88, 91];

let highScore = scores.reduce((max, score) => (score > max ? score : max), 0);
console.log(highScore);

//Say we want to count how many votes each food item received.
// We could reduce the array into an object with counts:

let votes = ["pizza", "tacos", "pizza", "burgers", "pizza", "tacos", "salad"];
let voteCounts = votes.reduce((counts, vote) => {
  counts[vote] = (counts[vote] || 0) + 1;
  return counts;
}, {});
// Result: { pizza: 3, tacos: 2, burgers: 1, salad: 1 }

//Sum/Total: arr.reduce((sum, num) => sum + num, 0)
//Find maximum: arr.reduce((max, num) => num > max ? num : max, -Infinity)
//Count occurrences: arr.reduce((counts, item) => { counts[item] = (counts[item] || 0) + 1; return counts }, {})
//Group by property: arr.reduce((groups, item) => { groups[item.category] = groups[item.category] || []; groups[item.category].push(item); return groups }, {})
