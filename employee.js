
// Define a employee object
let employee = {
    name: "Praveenraj N",
    age: 23,
    occupation: 'FullStack Developer',
    hobbies: ['reading', 'travelling', 'boxing'],
    address: {
        street: 'Anjugam 1st Stret',
        city: 'Chennai',
        state: 'Tamil Nadu',
        zip: '600032'
    },
    isMarried: false,
};

// Accessing the employee object
console.log(`Employee's name: ${employee.name}`);
console.log('---------------------------------------');

let splittedName  = employee.name.split(" ");

// Adding new property to the employee object
employee.firstName = splittedName[0];
employee.LastName = splittedName[1];

console.log(`First Name of the Employee: ${splittedName[0]}`);
console.log(`Last Name of the Employee: ${splittedName[1]}`);
console.log('---------------------------------------');

employee.age = 25;


function checkAge(number){

    if(Number.isInteger(number)){
        return `Valid Age of employee:  ${number}`;
    }
    else{
        return `Invalid Age`;
    }
}

// Moodifying the employee object
console.log(`Employee's age: ${checkAge(employee.age)}`);
console.log('---------------------------------------');

//Adding a new property called Mobile Number in to employee object
employee.phoneNumber = "+91-9655330411";

// Regrex function to validate the phone Number is valid or not
function validatePhoneNumber(input_str){

    var re = /^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/;
  
    if(re.test(input_str)){
        return `is correct`;
    }
    else{
        return `is incorrect`;
    }

}

console.log(`PhoneNumber of employee is ${validatePhoneNumber(employee.phoneNumber)}`);
console.log('---------------------------------------');

// Adding a new property to the employee object
employee.email = 'praveen.nagarajan@anywhere.co';
console.log(`Employee's email: ${employee.email}`);
console.log('---------------------------------------');

// Accessing properties of the nested address object
console.log(`Employee's state: ${employee.address.state}`);
console.log(`Employee's city: ${employee.address.city}`);
console.log('---------------------------------------');

// Accessing values from the hobbies array
console.log(`Employee's hobby:  ${employee.hobbies[0]}`);
console.log(`Employee's another hobby: ${employee.hobbies[2]}`);
console.log('---------------------------------------');

//used boolean operations
employee.isMarried = true;
console.log(`Marital Status of an ${employee.name} is ${employee.isMarried ? 'Married' : 'UnMarried'}`);
console.log('---------------------------------------');

//replace name of an employee using replace method
const newName = "Naveen KS";
employee.name = employee.name.replace(employee.name, newName);
console.log(`Modified employee name: ${employee.name}`);
console.log('---------------------------------------');


splittedName  = employee.name.split(" ");

//Modifying the first and last name of an employee
employee.firstName = splittedName[0];
employee.LastName = splittedName[1];

console.log(`New First Name of the Employee: ${splittedName[0]}`);
console.log(`New Last Name of the Employee: ${splittedName[1]}`);
console.log('---------------------------------------');

// Creating a new object with the specified prototype object and properties.
const newEmployee = Object.create(employee);
newEmployee.name = 'Dipesh'; 
newEmployee.isMarried = false; 
console.log(newEmployee);
console.log('---------------------------------------');

// Accessing exitising object's property
console.log("NewEmployee's Occupation is: " + newEmployee.occupation);
console.log('---------------------------------------');

//use delete operator to make hobbies array empty
delete employee.hobbies;
console.log(employee.hobbies);
console.log('---------------------------------------');

if(employee.hobbies == undefined){
    console.log(`hobbies array is empty and it's ${employee.hobbies}`);
    console.log('---------------------------------------');
}

//or make it to null
// employee.hobbies = null;
// console.log(employee.hobbies);

for (const [key, value] of Object.entries(employee)) {
    console.log(`${key}: ${value}`);
    console.log('---------------------------------------');

}

const object1 = {};
object1.constructor === Object; // true

// const object2 = new Object();
// object2.constructor === Object; // true

// console.log(object1 == object2); // false
// console.log(object1);
// console.log(object2);

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

// Any character that is not a word character or whitespace
const regex = /[^\w\s]/g;

// index of a character that is not a word character or whitespace
console.log(paragraph.search(regex));
console.log('---------------------------------------');

//character of string that is not a word character or whitespace
console.log(paragraph[paragraph.search(regex)]);
console.log('---------------------------------------');

