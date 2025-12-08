//object literals
// A collection of key–value pairs.
// Keys are called properties.



const mySym = Symbol("key1")

const JsUser = {
    name: "Abhishek",
    "full name": "Abhishek Mishra",
    age: 22,
    [mySym]: "mykey1",     // symbol is used here
    location: "Jabalpur",
    email: "abhishek@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// // for accessing
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


JsUser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JsUser);


// Useful Object Methods
// 1. Object.keys(obj)
// → Returns array of property names
// Example: ["name", "age"]
// 2. Object.values(obj)
// → Returns array of values
// Example: ["Abhi", 20]
// 3. Object.entries(obj)
// → Returns array of [key, value] pairs
// Example: [["name", "Abhi"], ["age", 20]]
// 4. Object.freeze(obj)
// → Makes object immutable (no change allowed)
// 5. Object.seal(obj)
// → Cannot add/remove properties, but can update existing ones.
