// Constructor function
function Student(name, age) {
	this.name = name;
	this.age = age;
}

// Objects
var firstStudent = new Student("Praveenraj", 23);
var secondStudent = new Student("Ashwin", 23);

// Prototype 
// The prototype gives access to the prototype of function using function.
Student.prototype.getName = function() { return this.name; }


// Function have property prototype
// Student

// Function call using object
// proto gives access to the prototype of the function using the object.
let firstStudentName = firstStudent.getName();
console.log(firstStudentName);
console.log('--------------------------');

// Constructor function
function Student(name, age) {
	this.name = name;
	this.age = age;
}

// Here prototype is a constructor function which is in the form of object
console.log(typeof Student.prototype);
console.log('--------------------------');

// prototype of a student function is same as the dunder proto of an object firstStudent
console.log(Student.prototype === firstStudent.__proto__); // gives true
console.log('--------------------------');

/* Can't assign new property using prototype 
inorder to modify it use constructor function or 
it's object to assign the values to the corresponding properties*/

Student.prototype.designation = "Intern";
console.log(Student.designation); // undefined
console.log('--------------------------');

// able to access using it's object
console.log(secondStudent.designation);
console.log('--------------------------');

let nameOfAnIntern = "Praveenraj";
console.log(nameOfAnIntern);
console.log('--------------------------');

// It's a primitive type here and there is no property called Prototype
console.log(nameOfAnIntern.prototype);
console.log('--------------------------');

// consider this case two different constructor function behalf of creating the objects is not true

function Person(id){
    this.id = id;
} // function Person

// create an object using new keyword that has constructor function called Person
let wellKnown = new Person("13bec164");

console.log(wellKnown.__proto__ === Student.prototype) // false
console.log('--------------------------');

console.log(wellKnown.__proto__ === Person.prototype); // true
console.log('--------------------------');

console.log(wellKnown.constructor.prototype === Person.prototype); // true
console.log('--------------------------');

// therefore __proto__ is a constructor.prototype 

var Person = function() {};

// all Person instances inherit a legs, arms, and countLimbs properties
Person.prototype.legs = 2;
Person.prototype.arms = 2;
Person.prototype.countLimbs = function() {
										return this.legs + this.arms;
									};
var chuck = new Person();
console.log(`Total limbs of a person: ${chuck.countLimbs()}`); // logs 4
