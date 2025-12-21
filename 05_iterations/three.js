
//for...of
//The for...of loop is used to iterate over iterable objects (like arrays, strings, Maps, Sets) and access their values directly.

//syntax: 
// for (variable of iterable) {
//   // code to execute
// }


const numbers = [10, 20, 30];

for (const num of numbers) {
  console.log(num);
}

//================================================================================================

// Map
// A Map is a collection of key-value pairs where:

// Keys can be of any type (objects, functions, primitives)
// Maintains insertion order
// Iterable (can use for...of)


const map = new Map();

// Adding key-value pairs
map.set("name", "Abhishek");
map.set("age", 25);

console.log(map);
// Output: Map(2) { 'name' => 'Abhishek', 'age' => 25 }


const map1 = new Map([["a", 1], ["b", 2]]);
for (let [key, value] of map1) {
  console.log(key, value);
}

//=======================================================================================

//Objects are not iterable

const obj = { name: "Abhishek", age: 25 };

// Trying for...of
for (let x of obj) {
  console.log(x);
}

//output: TypeError: obj is not iterable
