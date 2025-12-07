const accountId = 144455
let accEmail = "abhi@gmail.com"
let contact = 3456789
var age = 56

console.time("loop");

// accountId = 3455

console.log(accountId);
console.table([accountId, accEmail, contact, age])



for (let i = 0; i < 1000000; i++) {}
console.timeEnd("loop");
console.count("Click"); //Counts how many times it’s called.
console.count("Click");


console.group("User Details");    //Creates an indented group of logs.
console.log("Name: Alice");
console.log("Age: 22");
console.groupEnd();

let x = 10;
console.debug("Debugging value:", x);


console.log(typeof null); // => object
console.log(typeof undefined);  // => undefined



// console.time() / console.timeEnd()
// Measures how long a piece of code takes.

console.time("loop");
for (let i = 0; i < 10; i++) {}
console.timeEnd("loop");
