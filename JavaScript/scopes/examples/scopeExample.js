console.log(bag);
var bag = ["flashlight", "medicine"];
var moreItems = ["tent", "water bottle", "knife", "rope"];

if (bag.length < 3) {
  var nextItem = moreItems[0];
  bag.push(nextItem);
}
console.log(nextItem);
