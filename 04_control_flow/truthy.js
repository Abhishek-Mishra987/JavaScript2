// falsy values :=

// false
// 0
// -0
// 0n   // BigInt zero
// ""   // empty string
// null
// undefined
// NaN


//TRUTHY VALUES

// true
// 1
// -1
// "0"
// "false"
// " "
// []
// {}
// function(){}



if ("0n") {
  console.log("Runs");
}

//============================================================


// Nullish Coalescing Operator (??)

// The nullish coalescing operator (??) returns the right-hand value only when the left-hand value is null or undefined.

let val1;
val1 = null ?? 10
console.log(val1);      // output: 10


let age = 20;
console.log(age ?? 18); // 20


//===============================================================

// Terniary operator
// SYNTAX:  condition ? expression_if_true : expression_if_false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");

 