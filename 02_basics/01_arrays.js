const myArr = [0,1,2,3,4,5]
const myHeros = ["Krrish","shaktiman","suparman","batman"]

const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[3]);

// Array methods

myArr.push(8);   // it adds at last
myArr.unshift(9);  // it adds at beginning
myArr.shift();     // deletes from beginning



console.log(myArr.includes(8));  // returns true and false
console.log(myArr.indexOf(8));


const newArr = myArr.join()
console.log(myArr);  
console.log(newArr);  

// slice syntax: arr.slice(start, end)

console.log(myArr.slice(1,4));
// output: [ 1, 2, 3 ]


// splice syntax:   arr.splice(start, deleteCount, item1, item2, ...)

const arr = [1, 2, 3, 4, 5];
arr.splice(2, 2);
console.log(arr);
// output: [ 1, 2, 5 ]


//(replace)
const array = ["a", "b", "c", "d"];
array.splice(1, 1, "x", "y");
console.log(array);
//output: [ 'a', 'x', 'y', 'c', 'd' ]
