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
