// How to Iterate Over Object Properties
// for...in Loop (Keys)

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    console.log(`Key is ${key} and value is ${myObject[key]}`);
    
}


//< for in > in arrays

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
    
}