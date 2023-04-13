"use strict";

function calcRectArea(width, height) {
  return width * height;
}

console.log(calcRectArea(5, 6));
// Expected output: 30

// Function declarations in JavaScript are hoisted to the top of the enclosing function or global scope.
// You can use the function before you declared it:

hoisted(); // Logs "foo"

function hoisted() {
  console.log("Hoisted on the top");
}

// In strict mode, block-level function declarations are scoped to that block and are hoisted to the top of the block.
{
    console.log(calcSales(10,10,10)); // here before declare a function - called it
    
    function calcSales(unitsA, unitsB, unitsC) {
        return unitsA * 75 + unitsB * 125 + unitsC * 175;
      }
    
}
/* When the iterator's next() method is called, the generator function's body is executed until the first yield expression, 
which specifies the value to be returned from the iterator */

function* anotherGenerator(i) {
    yield i + 1;
    yield i + 2;
    yield i + 3;
  }
  
  /* with yield*, delegates to another generator function. */

  function* generator(i) {
    yield i;
    yield* anotherGenerator(i);
    yield i + 10; // it returns the value - 20
  }
  
  const gen = generator(10);
  /* The next() method returns an object with a value property containing the yielded value and 
  a done property which indicates whether the generator has yielded its last value, as a boolean.
  Calling the next() method with an argument will resume the generator function execution, replacing the yield expression where an execution was paused with the argument from next(). */
  console.log(gen.next().value); // 10
  console.log(gen.next().value); // 11
  console.log(gen.next().value); // 12
  console.log(gen.next().value); // 13
  console.log(gen.next().value); // 20
 

  function* logGenerator() {
    console.log(0);
    //console.log(1); - this line wont exceuted even after next executes (Syntax Error)
    console.log(1, yield);
    console.log(2, yield);
    console.log(3, yield);
  }
  
  const log_Generator = logGenerator();
  
  // the first call of next executes from the start of the function
  // until the first yield statement
  log_Generator.next(); // 0
  // generator.next(); 
  log_Generator.next("pretzel"); // 1 pretzel - 
  log_Generator.next("california"); // 2 california
  log_Generator.next("mayonnaise"); // 3 mayonnaise
  
  function* yieldAndReturn() {
    yield "Y";
    return "R";
    yield "unreachable"; // after return statement any yield expression executes as undefined even though it is defined
  }
  
  const genFun = yieldAndReturn();
  // genFun.next() - returns only the object with property value and done.

  console.log(genFun.next()); // { value: "Y", done: false }
  console.log(genFun.next()); // { value: "R", done: true }
  console.log(genFun.next()); // { value: undefined, done: true }

  // The Symbol.iterator static data property represents the well-known symbol @@iterator
  class ArrayObj {
    *[Symbol.iterator]() {  //symbol for the method that returns the iterator for an object.
      yield 1;
      yield 2;
    }
  }
  
  const SomeObj = {
    *[Symbol.iterator]() {
      yield "a";
      yield "b";
    },
  };
  
  console.log(Array.from(new ArrayObj())); // [ 1, 2 ]
  console.log(Array.from(SomeObj)); // [ 'a', 'b' ]
    
  function* powers(n){

    for(let i=n; ; i*=n){ // i = 2 through endless loop make i multiplied with 2
        yield i;
    }
  }

  //console.log(powers(2));

  let i = 1;
  for(const power of powers(2)){ // iterate generator object through for loop

    if(power > 64) // conditional statement to controlling generator
        break;
    
    console.log(`2 to the power of ${i} is: ${power}`);
    i=i+1;
  }
  