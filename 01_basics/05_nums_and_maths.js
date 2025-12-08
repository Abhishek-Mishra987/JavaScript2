const score = 400
console.log(score);
//output:  400

const balance = new Number(100);
console.log(balance);//output: [Number: 100]

console.log(balance.length);
//output: undefined  (because number does not have .length property)

console.log(balance.toString().length);
//output: 3

console.log(balance.toFixed(2));
//output: 100.00

const otherNum = 123.66545
console.log(otherNum.toPrecision(4));
//output: 123.7


const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'))
//output: 10,00,000


console.log("===================================");


// ++++++++++++++++++++++++++++++ Maths +++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  // output: 4
console.log(Math.round(4.6));  // output: 5
console.log(Math.ceil(4.2));  // output: 5
console.log(Math.floor(4.9));  // output: 4
console.log(Math.max(2,5,7,8,9));  // output: 9
console.log(Math.min(2,5,7,8,9));  // output: 2

console.log(Math.random());  // any random value btw 0 and 1
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);


// if we want numbers in any specific range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
