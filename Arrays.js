let fruits = ["Apple", "Orange", "Plum"];

// same as fruits[fruits.length-1]
console.log(fruits.at(-1)); // Plum

console.log(fruits.pop()); // remove "Pear" and console.log it

console.log(fruits); // Apple, Orange

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");

// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log(fruits);

for (let fruit of fruits) {
    console.log(fruit);
}

for (let key in fruits) {
    console.log(fruits[key]); // Apple, Orange, Pear
}

let arr1 = new Array(2); // will it create an array of [2] ?

console.log(arr1[0]); // undefined

let arr = ["I", "study", "JavaScript", "right", "now"];

// remove 2 first elements
let removed = arr.splice(0, 2);

console.log(removed);

console.log(arr); // after splice

console.log(arr.slice(1, 3)); // [ 'right', 'now' ]

console.log(arr.slice(-2)); // [ 'right', 'now' ]

console.log(arr.concat([3, 4], 5, 6));

let arrayLike = {
    0: "something",
    1: "else",
    [Symbol.isConcatSpreadable]: true,
    length: 2
};

console.log(arr.concat(arrayLike));

// an array-like object has a special Symbol.isConcatSpreadable property, then it’s treated as an array by concat otherwise it will be an object


console.log(fruits.indexOf('Apple')); // 0 (first Apple)
console.log(fruits.lastIndexOf('Apple'));

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

let user = users.find(item => item.id == 1);

console.log(user.name); // John

let someUsers = users.filter(item => item.id < 3);

console.log(someUsers.length); // 2

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

let arr2 = ['Bilbo', 'Gandalf', 'Nazgul'];

let str = arr2.join(';'); // glue the array into a string using ;

console.log(str); // Bilbo;Gandalf;Nazgul

let arr3 = [1, 2, 3, 4, 5];

// removed initial value from reduce (no 0)
let result = arr3.reduce((sum, current) => sum + current);

console.log(result); // 15

class NotAnArray {
    constructor(length) {
        this.length = length; // set the length of an array
    }
}

const arr4 = [0, 1, 2];
arr4.constructor = { 
    [Symbol.species]: NotAnArray  // The @@species accessor property returns the default constructor for Array objects.
};

console.log(arr4);
console.log(arr4.map((i) => i)); // NotAnArray { '0': 0, '1': 1, '2': 2, length: 3 }
console.log(arr4.filter((i) => i)); // NotAnArray { '0': 1, '1': 2, length: 0 }
console.log(arr4.concat([1, 2])); // NotAnArray { '0': 0, '1': 1, '2': 2, '3': 1, '4': 2, length: 5 }

console.log(Array.isArray(arr4));
// Expected output: true

const newArray = new Array(1,2,3); // passing values such as 1,2,3 in the array
console.log(newArray);