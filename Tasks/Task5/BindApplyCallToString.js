//...................APPLY..............
// The apply() method calls the specified function with a given this value, and arguments provided as an array (or an array-like object).

const numbers = [5, 6, 2, 3, 7];


const max = Math.max.apply(null, numbers);

console.log(max);
// Expected output: 7

const min = Math.min.apply(null, numbers);

//The reason null is passed is so that the second argument can be given a value, as you can't have a second argument without a first.

console.log(min);
// Expected output: 2

/* apply(thisArg, argsArray) 
    thisArg ==> The value of this provided for the call to func. 
                If the function is not in strict mode, null and undefined will be replaced with the global object 
                and primitive values will be converted to objects.
                
    argsArray ==> An array-like object, specifying the arguments with which func should be called, 
                  or null or undefined if no arguments should be provided to the function.*/

// Use apply mrthod to append elements of an array to another

let array = ["a", "b"];
let elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

// by using spread operator instead of using apply method
let newElements = [5, 6, 7];
array.push(...newElements);
console.log(array); // ['a', 'b', 0, 1, 2, 5, 6, 7]

// min/max number in an array
const newNumbers = [5, 6, 2, 3, 7];

// using Math.min/Math.max apply
let newMax = Math.max.apply(null, newNumbers);
// This about equal to Math.max(numbers[0], …)
// or Math.max(5, 6, …)
console.log(newMax);

let newMin = newNumbers.sort()[0]; // instead of using apply method used sort
console.log(newMin.valueOf());

// vs. simple loop based algorithm
newMax = -9;
newMin = 5;

for (let i = 0; i < newNumbers.length; i++) {
    if (newNumbers[i] > max) {
        newMax = newNumbers[i];
    }
    if (newNumbers[i] < min) {
        newMin = newNumbers[i];
    }
}

console.log(`maximum is ${newMax}, minimum is ${newMin}`);

//...............BIND............

/* The bind() method creates a new function that, 
    when called, has its this keyword set to the provided value, 
    with a given sequence of arguments preceding any provided when the new function is called. */


class Base { }
const BoundBase = Base.bind(null, 1, 2); // bind an class then it will created an object 
console.log(new Base() instanceof BoundBase); // true -> 
// it checks whether object from base class is a instance/object of Boundbase function

console.log(BoundBase);

this.x = 9; // 'this' refers to the global object (e.g. 'window') in non-strict mode
const newModule = {
    x: 81,
    getX() {
        return this.x;
    },
};

console.log(newModule.getX()); // 81

const retrieveX = newModule.getX;
console.log(retrieveX()); // 9; the function gets invoked at the global scope

// Create a new function with 'this' bound to newModule
// New programmers might confuse the
// global variable 'x' with newModule's property 'x'
const boundGetX = retrieveX.bind(newModule);
console.log(boundGetX()); // 81

//....................CALL......................

//The call() method calls the function with a given this value and arguments provided individually.
function Product(name, price) {
    this.name = name;
    this.price = price;
  }
  
  function Food(name, price) { 
    // bind the existing constructor function product with food using this value and arguments provided individually
    Product.call(this, name, price);
    this.category = 'food';
  }
  
  console.log(`Name of the food is: ${new Food('cheese', 5).name}`);
  // Expected output: "cheese"
  console.log(`Price of the foos is: ${new Food('cheese', 5).price}`);
  // Expected output: 5

// we call greet, the value of this will be bound to object obj, even when greet is not a method of obj

function greet() {
    console.log(this.animal, "typically sleep between", this.sleepDuration);
  }
  
  const obj = {
    animal: "cats",
    sleepDuration: "12 and 16 hours",
  };
  
  // Function greet is not a method of obj but with use of call method , this value used to bound the obj
  greet.call(obj); // cats typically sleep between 12 and 16 hours
  
  // using call function to invoke a function without using this arguments

  globalThis.globalProp = 'Praveenraj'; // globalThis - property used to initialize a variable

  function display(){
    console.log(`Hi, I'm ${this.globalProp}`);
  }

  display.call(); 

