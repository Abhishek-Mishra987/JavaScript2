// const tinderUser1 = new Object()  // this is singleton object
const tinderUser2 = {}   // this is non singleton object




tinderUser2.id = "123abc"
tinderUser2.name = "mishra"
tinderUser2.isLoggedIn = false

// console.log(tinderUser2);

const regularUser = {
    email: "email@gamil.com",
    fullName: {
        userFullName: {
            firstName: "Abhi",
            lastName: "Mishra"
        }
    }
}

console.log(regularUser.fullName.userFullName.firstName);

 
// joining two or more objects

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

const obj3 = { obj1, obj2 }
console.log(obj3);
// it will give output in this way:
// { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }


// another method
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);
// here output is: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj5 = { ...obj1, ...obj2 }
console.log(obj5);
// here also output is: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// this method is preferred


console.log(Object.keys(tinderUser2));     // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser2));   // [ '123abc', 'mishra', false ]
console.log(Object.entries(tinderUser2));  // [ [ 'id', '123abc' ], [ 'name', 'mishra' ], [ 'isLoggedIn', false ] ]


console.log(tinderUser2.hasOwnProperty('isLoggedIn'));   // true



// Destructuring

const user = {
  name: "Abhishek",
  age: 22,
  city: "Jabalpur"
};


// instead of: 
//const name = user.name;
// const age = user.age;

const { name, age, city } = user;
// we can also rename the variables:
// const { name: username, age: userAge } = user;


console.log(name); // "Abhishek"
console.log(age);  // 22
console.log(city); // "Jabalpur"

