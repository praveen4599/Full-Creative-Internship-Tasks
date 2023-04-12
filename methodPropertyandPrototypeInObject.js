/* create an object myObject with a property myProperty set to the string "Hello, world!".
We then define a method property myMethod on this object using a function expression 
that returns the value of the myProperty property using the this keyword. */

const myObject = {
    myProperty: 'Hello, Everyone!',
    myMethod: function () {
        return this.myProperty;
    }
};

// Output: "Hello, world!"
console.log(myObject.myMethod());
console.log('---------------------------------------');

/* create two objects obj1 and obj2.
obj1 contains some properties like name and age. 
obj2 has a method property greet, which returns a string containing the values of name and age properties of obj1. */
const obj1 = {
    name: "Dipesh",
    age: 23
};

const obj2 = {

    // greet function has properties of obj1 name and age
    greet: function () {
        return `Hello, my name is ${obj1.name} and I am ${obj1.age} years old.`;
    }
};

// Output: "Hello, my name is John and I am 30 years old."
console.log(obj2.greet());
console.log('---------------------------------------');

// An object can have a property that is itself another object.
function developer(Name, Age, Sex) {
    this.Name = Name; // affects code quality beacause of caps infront
    this.Age = Age;
    this.Sex = Sex;
}

const emp = new developer("Dipesh Das", 23, "Male");
emp.isMarried = false;

function vehicle(model, year, make, owner) {
    this.model = model;
    this.year = year;
    this.make = make;
    this.owner = owner;
}

// empCar has a property called owner which is a another object as developer
const empCar = new vehicle("Talon TSi", 1993, "Eagle", emp);

console.log(empCar.owner.Name);
console.log('---------------------------------------');

// should menthod the key in the form string
empCar["color"] = "blue";
console.log(empCar.color);
console.log('---------------------------------------');

if (empCar.owner.isMarried == false) {
    console.log(`yes, ${empCar.owner.Name} is single`);
}

// consoling a nonExisting property it will give undefined
console.log(emp.height);
console.log('---------------------------------------');

function listAllProperties(myObj) {
    let objectToInspect = myObj;
    let result = [];

    // object is not equal to null till then result array concact each of it's properties.
    while (objectToInspect !== null) {
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
        //console.log(result);

        // after each concatenation make objectToInspect not to be null
        objectToInspect = Object.getPrototypeOf(objectToInspect);
        //console.log(objectToInspect);
    }

    return result;
}

console.log(listAllProperties(emp));
console.log('---------------------------------------');

// Two variables, two distinct objects with the same properties
let fruit = { name: "apple" };
let fruitbear = { name: "apple" };

fruit == fruitbear; // return false
fruit === fruitbear; // return false


// Two variables, a single object
fruitbear = fruit; // Assign fruit object reference to fruitbear

// Here fruit and fruitbear are pointing to same object
fruit == fruitbear; // return true
fruit === fruitbear; // return true

fruit.name = "grape";
console.log(fruitbear); // { name: "grape" }; not { name: "apple" }
console.log('---------------------------------------');

const Mentor = {
    name: "Dipesh",
    age: 23,
    job: "Software Engineer",
};
const Intern = {
    name: "Praveenraj",
    age: 23,
    job: "Full Stack Intern",
};

function sayHi() {
    console.log(`Hello, my name is ${this.name}`);
}

// add sayHi function to both objects
Mentor.sayHi = sayHi;
Intern.sayHi = sayHi;

console.log(typeof Mentor.sayHi);
console.log('---------------------------------------');

// call the sayHi function using Mentor object and Intern object
Mentor.sayHi();
console.log('---------------------------------------');

Intern.sayHi(); // Hello, my name is Tyrone
console.log('---------------------------------------');

function showProps(obj, objName) {
    let result = "";

    //Iterate each property of an object using for loop 
    Object.keys(obj).forEach((i) => {

        // "Dipesh.name" + "=" + "Dipesh["name"]"
        //Obj['key'] = value  
        result += `${objName}.${i} = ${obj[i]}\n`;  
    });
    console.log(result);
}

showProps(Mentor,Mentor.name);
console.log('---------------------------------------');
