if (true) {
let b = 20;
const c = 30;
var d = 40;
}

// console.log(b);     this will not work
// console.log(c);     this will also not work
console.log(d); // works

// let and const are Block-scoped
// { } creates a block
// So b and c exist only inside the if block

// let, var, const are function scoped

//==========================================================

if(true){
    const username = "ritesh"
    if(username == "ritesh"){
        const website = " abhi@google.com"
        console.log(username + website);        
    }

    // console.log(website);
    
}
// console.log(username);

//================== important ======================

//hoisting

console.log(addone(5))

function addone(num){    // Function Declaration (Hoisted ✅)
    return num + 1
}


console.log(addthree(5));  //ReferenceError: Cannot access 'addthree' before initialization

const addthree = function(num){     //Function Expression does not supports hoisting
    return num + 3
}


