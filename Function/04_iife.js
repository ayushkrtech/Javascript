// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named iife
    console.log(`DB CONNECTED`)
})();                          // must end with ;

( (name) => {
    // unamed iife
    console.log(`BD CONNECTED ${name}`)
})('hitesh');