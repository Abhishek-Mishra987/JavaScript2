const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
    
})

//=============

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },2000)
}).then(function(){
    console.log("Async 2 resolved.");
    
})

//==============

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Abhishek", email: "abhi@gmail.com"})
    }, 2000)
})
promiseThree.then(function(user){
    console.log(user);
})

// //====================

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Mishra", password: "12345"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 3000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username; 
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("Promise is either resolved or rejected.")
)

//==========

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "JS", password: "99345"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 3000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    }
     catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

//===========

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error){
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

/// same thing in different style: 

fetch('https://api.github.com/users/Abhishek-Mishra987')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))