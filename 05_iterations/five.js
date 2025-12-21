// foreach

// forEach() is an array method used to execute a provided function once for each array element.
// Introduced in ES5.
// Does not return a new array (unlike map).


const numbers = [10, 20, 30];

numbers.forEach(function(num) {
  console.log(num);
});




const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
    {
        languageName: "java",
        languageFileName: "jv"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "ruby",
        languageFileName: "rb"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})