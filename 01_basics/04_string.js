const gameName = new String('abhishek')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('i'));


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-3,7);
console.log(anotherString);

const newStringOne = "    Abhishek    ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://abhishekmishra.com/abhishek%20mishra"
console.log(url.replace('%20', '-'));

