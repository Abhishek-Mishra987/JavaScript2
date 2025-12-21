//REDUCE
//reduce() reduces an array to a single value by 
//accumulating results using a callback function.


//Syntax:
//array.reduce((accumulator, currentValue) => {
//   return updatedAccumulator;
// }, initialValue);

// accumulator → stores accumulated result
// currentValue → current array element
// initialValue → starting value of accumulator (recommended)



const myNums = [1,2,3,4]

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal   
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);

//===================================================


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 1999
    },
    {
        itemName: "cpp course",
        price: 2599
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);
