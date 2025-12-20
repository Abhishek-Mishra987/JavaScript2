let i = 1;
while (i <= 20) {
  console.log(i);
  i = i+2;
}


// reverse a number

let num = 1234;
let rev = 0;

while (num > 0) {
  let digit = num % 10;
  rev = rev * 10 + digit;
  num = Math.floor(num / 10);
}

console.log(rev); // 4321


let arr = ["Krrish", "Superman", "Spiderman", "Batman"];
let j = 0;

while (j < arr.length) {
  console.log(arr[j]);
  j++;
}



let m = 10;

do {
  console.log("Hello");
} while (m < 5);
