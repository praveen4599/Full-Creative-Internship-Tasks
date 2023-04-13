// Arrow functions are always unnamed
let userNames = ['Praveenraj__neo', '__im_the_king', '_kishore.leo_'];
console.log(userNames.map(username => username.length));
//Arrow functions cannot use yield within their body and cannot be created as generator functions.

const multiply = (x) => x * x;
// without block body , implied "return"
console.log(multiply(2));

const addition = (x, y) => {
    return x + y;
};
// with block body, explicit "return" needed
console.log(addition(4, 5));

// Arrow functions cannot be used as constructors/constructor function and will throw an error when called with new.
// They also do not have a prototype property.

const Foo = () => { };
// const foo = new Foo(); // TypeError: Foo is not a constructor
console.log("prototype" in Foo); // false

/* Arrow functions do not have their own arguments object. 
Thus, in this example, arguments is a reference to the arguments of the enclosing scope:*/
const arguments = [1, 2, 3];
const arr = () => arguments[0];

console.log(arr()); // 1

function addFun(n) {
    const f = (...args) => args[0] + n;
    return f(10); // passing a parameter for args arg at 0th index
}

console.log(addFun(12)); // 22

let newArr = [4, 5, 6, 7, 8, 9, 10];
console.log(newArr.reduce((a, b) => a + b));

console.log(newArr.filter((a) => a % 2 == 0));

const obj = {
    num: 100,
};

// Setting "num" on globalThis to show how it gets picked up.
globalThis.num = 42;

// Below Arrow function not works fine
 // const add = (a, b, c) => {return this.num + a + b + c};

 const add = function(a,b,c){
    return this.num+a+b+c;
};
// add function is essentially created on the globalThis (global) scope, it will assume this is the globalThis.

console.log(add.call(obj, 1, 2, 3)); // 48
console.log(add.apply(obj, [1, 2, 3])); // 48
const boundAdd = add.bind(obj);
console.log(boundAdd(1, 2, 3)); // 48
