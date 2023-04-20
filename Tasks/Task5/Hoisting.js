// Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, 
//prior to execution of the code.

hoisted(); // Logs "foo"

function hoisted() {
    console.log("Hoisted on the top");
}

// using test before declaring
var test;
console.log(test); // undefined
// variable test is only declared and has no value, undefined value is assigned to it.

// program to display value
a = 5;
console.log(a);
var a; // 5  // keyword var is hoisted and let and const does not allow hoisting.

/* All these functions and variable declarations are added to the memory inside a JavaScript data structure called Lexical Environment. 
So that they can be used even before they are actually declared in the source code. */

// program to print the text
greet();

function greet() {
    console.log('Hi, there.');
} // A function can be called before declaring it.

/*  when a function is used as an expression, an error occurs because only declarations are hoisted. 

// program to print the text
greet();

let greet = function() {
    console.log('Hi, there.');
} */

// assigning a value to an undeclared variable implicitly creates it as a global variable when the assignment is executed

codeHoist();

// Hoisting
function codeHoist() {
    a = 10;
    let b = 50;
}

console.log(a); // 10 -> a is created as a global variable
//console.log(b); // ReferenceError : b is not defined
