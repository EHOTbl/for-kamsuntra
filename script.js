let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Change this line
let result = difficultSpelling.match(myRegex);

console.log(result);

// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line

let result = chewieQuote.match(chewieRegex);

console.log(result);

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result = text.match(myRegex);

let reCriminals = /C+/; // Change this line

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

function htmlColorNames(arr) {
  // Only change code below this line
  arr.splice(0, 2, "DarkSalmon", "BlanchedAlmond");
  // Only change code above this line
  return arr;
}

console.log(
  htmlColorNames([
    "DarkGoldenRod",
    "WhiteSmoke",
    "LavenderBlush",
    "PaleTurquoise",
    "FireBrick",
  ])
);

function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"]; // Change this line
  return sentence;
}

function quickCheck(arr, elem) {
  // Only change code below this line
return arr.indexOf(elem) >= 0 ? true :false
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

console.log(quickCheck('Hello'));


let arr=[];
let str = "";

let date= new Date();

for (let el in arr){
  el+=10;
};


arr.forEach(el=>console.log(el));

const nums = [1, 2, 3, 4, 5, 6, 7, 8]

const sum = nums.reduce(function (currentSum, currentNumber) {
  return currentSum + currentNumber
}, 0);
