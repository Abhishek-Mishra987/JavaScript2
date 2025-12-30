const user = {
    username: "Abhishek",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

//==============================


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this;
}

const userOne = new User("Abhi", 12, true)
const userTwo = new User("Mish", 13, false)
console.log(userOne);
console.log(userTwo);
console.log(userOne.constructor);



// when we write new keyword: a new empty object is created(which is called instance)
// a constructor function is called because of new keyword
// all arguments get injected in this 
// we get inside the result