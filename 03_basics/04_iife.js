// Immediately Invoked Function Expressions (IIFE)

// It runs as soon as it is defined
// It creates its own scope
// Used to avoid global scope pollution

(function abhi(){                                            // named IIFE
    console.log("This area belongs to abhishek");
    
})();

// in case of Multiple IIFEs
// Use ; to avoid errors

((name)=>{
    console.log(`The name is ${name}`);
})('Abhishek')