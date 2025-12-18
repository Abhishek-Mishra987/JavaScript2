//Function Declaration
function add(a, b) {     //Hoisted (can be used before declaration)
  return a + b;
}


//Function Expression
const add1 = function(a, b) {    //Not hoisted (cannot be used before declaration)
  return a + b;
}


// arrow function
const add3 = (a, b) => a + b;


console.log(add(2,5)+ " " + add1(5,8));


function loginUserMessage(username){
    return `${username} just logged in`
}

console.log(loginUserMessage("Abhishek"));


//=====================================================================================

// (...)
//Rest → Pack things together
// Spread → Open things up

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500))


const user = {
  username: "Abhishek",
  price: 199
}

//===============================================================================

// handling objects

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);  
}

//handleObject(user);

handleObject({
  username: "Mishra",
  price: 3456
});

// we can also handle arrays

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

console.log(returnSecondValue(myNewArray));

