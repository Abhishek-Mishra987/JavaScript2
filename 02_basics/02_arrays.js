const arr1 = ["ram", "shyam", "hanuman"]
const arr2 = ["god", "almighty", "superpowerful"]


// arr1.push(arr2)
// it gives output as:
// [ 'ram', 'shyam', 'hanuman', [ 'god', 'almighty', 'superpowerful' ] ]
// so we do not prefer push()



// arr3 = arr1.concat(arr2)
// here output is: 
// [ 'ram', 'shyam', 'hanuman', 'god', 'almighty', 'superpowerful' ]
// although it is giving desired output but we prefer spread operator(...) over this
const arr4 = [...arr1, ...arr2]




//flat() removes nested arrays and returns a single-level array.
const arr5 = [1,2,3, [4,5],7, [8,9,10]]
const real_arr5 = arr5.flat(Infinity) //Infinity tells JS to flatten every level, no matter how deep.
console.log(real_arr5);
// output is: [1, 2, 3, 4, 5, 7, 8, 9, 10]



//flatMap() = map() + flat(1) combined.
//It maps each element and then flattens the result by one level.



console.log(Array.isArray("Abhishek"))    // false
console.log(Array.from("Abhishek"));      // ["A", "b", "h", "i", "s", "h", "e", "k"]
console.log(Array.from({name: "Abhishek"}));   // output: [], because
// Array.from() works only on:
// Array-like objects (must have a length property)
// Iterables (like strings, sets, maps)


//Array.of()

//Array.of() creates a new array from the arguments you pass — no matter how many, even one.
console.log(Array.of(1, 2, 3))    //  output: [ 1, 2, 3 ]
