class User {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        console.log(this.name);
    }
}

// class is a function
console.log(typeof User); // function

// ...or, more precisely, the constructor method
console.log(User === User.prototype.constructor); // true

// The methods are in User.prototype, e.g:
console.log(User.prototype.sayHi); // the code of the sayHi method

// there are exactly two methods in the prototype
console.log(Object.getOwnPropertyNames(User.prototype)); // constructor, sayHi

class newUser {

    constructor(name) {
        // invokes the setter
        this.name = name;
    }

    get name() {  // using get method to return the value

        return this._name;

    }

    set name(value) {   // using set method to assign the value

        if (value.length < 4) {
            console.log("Name is too short.");
            //return;
        }

        this._name = value;
    }

}

let user = new newUser("John");
console.log(user.name); // John

user = new newUser(""); // Name is too short.

/* Static Variable */


class Example {

    //static variable defined
    static staticVariable = 'GeeksforGeeks';

    static staticMethod() {

        return `static variable is: ${this.staticVariable}`;

    }
}

// static variable called
console.log(Example.staticVariable);

// use the static variable anywhere. 
// The value of the static variable can be reassigned, unlike the constant variable.

Example.staticVariable = "Stack Overflow";
console.log(Example.staticVariable);

// static method called
console.log(Example.staticMethod());

let ladder = {
    step: 0,
    up() {
        this.step++;
    },
    down() {
        this.step--;
    },
    showStep: function () { // shows the current step
        //console.log(this.step);
        return this.step
    }
};

ladder.up();

ladder.up();
ladder.down();
console.log(`current step: ${ladder.showStep()}`); // shows 1 
ladder.down();
console.log(`current step: ${ladder.showStep()}`); // shows 0

class Something { 
    
    #property; // initializing a private variable
    constructor() { 
        this.#property = "test"; 
    } 
     
    getPrivateMessage() { 
        return this.#property; 
    } 
} 
const instance = new Something();
console.log(instance.property);  //=> undefined 
console.log(instance.getPrivateMessage());  //=> test 
 
//console.log(instance.#property);  //=> Syntax error
