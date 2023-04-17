const firstSpreadFunction = (x, y, z) => {

    return x + y + z; // spread operator -> syntax allows an iterable, such as array or string
}

console.log(firstSpreadFunction(...[1, 2, 3]));

const secondSpreadFunction = (a1, a2) => {

    // This function is about concat two different array using spread operator
    return a2 = [...a1, ...a2];
    //return a1.concat(a2); instead of using built-in concat method
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [5, 6, 7, 8, 9];

console.log(secondSpreadFunction(arr1, arr2));

const firstObj = { "name": "raj", "age": 21 };
const secondObj = { "name": "rahul", "age": 21 };

const mergeObjs = (...objects) => ({ ...objects });
// iterate / spread the array of arguments in to object literals, due to (rest parameter - syntax allows a function to accept an indefinite number of arguments as an array)

console.log(mergeObjs(firstObj, secondObj));

const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle } // concate two diiferent objects in to a single object

console.log(myUpdatedVehicle);

// convert the string is splitted using space and find the maximum value of it

const str = "1 34 9 2";

// Issue:
console.log(Math.max(...str))  // 9   since [1,0,3,4,0,9,0,2] -> take the space as null character it is denoted as 0

console.log(...str.split(' ')); // 1 34 9 2

// Fix:
console.log(Math.max(...str.split(/ +/))) // 34 
// either use the above '/ +/' or ' '

console.log(Math.max(...str.split(' ')));
