// "use strict";

const user = {
    username: "abhishek",
    price: 789,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        
    }
}

user.welcomeMessage();


//========================================================

function func(){
    console.log(this);
}

// func()

const func1 = function(){
    console.log(this);
}

// func1()

const func2 = () => {         // Arrow functions do NOT have their own this
    console.log(this);        // They inherit this from their surrounding (lexical) scope
}

// func2();

//====================================================================

// implicit return
//If there is only one expression, braces and return are optional.
const add = (a, b) => a + b;

// in case of single parameter
const square = x => x * x;

const addTwo = (num1, num2) => ({username: "abhishek"})
console.log(addTwo(4,6));
