// Immediately Invoked Function Expressions (IIFE)

(function chai() // named IIFE
{
    console.log(`DB CONNECTED`);
})(); // first () = function wrap; second () = function call

// use semicolon i.e. ';' after an IIFE or in between two IIFEs

( (name)  => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('venky')
