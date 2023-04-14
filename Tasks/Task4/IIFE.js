/* An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined */

(() =>{
    // do stuff
})();


(function myIIFE(){ // with function name (using recursion)
    num++;
    console.log(num);
    return num !== 5 ? myIIFE(num) : console.log('finished!');
})(num = 0);

const x ='live let live';
const helloworld = () => 'Hello,World!';
// isolate declarations  within the function
(() => { 
    const x = 'life is too short';
    const helloworld = () => 'Hello IIFE';
    console.log(x);               // Isolated decorations are only valid inside the curly braces - so called IIFE
    console.log(helloworld());
})(); // IIFE works all about scopes 

console.log(x);
console.log(helloworld());

// Private variables and Methods from Closure

const increment = (() => {
    let counter = 0;
    console.log(counter);
    const credits = (num) => console.log(`I have ${num} credits`);
    return () => {counter++; credits(counter)}
})();

increment();
//credits() // reference error

// The Module Pattern - ES6 (create a namespace)

const Score = (() => {
    let count = 0;

    return {
        current: () => {return count },
        increment: () => { count++},
        reset: () => {count = 0}
    }
})(); // here it is a void there is no value declare / initialize

// Score is an object even though it's has an arrow function 
// has a properties called cureent, increment and reset has value of count , increased value and set to zero or null

Score.increment();
console.log(`Current Score: ${Score.current()}`);


const Game = (() => {
    let count = 0;
    const current = () => {return count };
    const increment = () => { count++}; // increment function
    const reset = () => {count = 0};
    return {
        current: current,
        increment: increment,
        reset: reset
    }
})(); // here it is a void there is no value declare / initialize

// Score is an object even though it's has an arrow function 
// has a properties called cureent, increment and reset has value of count , increased value and set to zero or null

Game.increment();
console.log(`Current Game Score is ${Game.current()}`);
