// Immediately Invoked Function Expressions (IIFE)
/*reduce the pollution in scopping */


(function chai(){ //named iife
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

