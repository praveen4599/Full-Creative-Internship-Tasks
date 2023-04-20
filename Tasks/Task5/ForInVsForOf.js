var person = {
    firstName: "GeeksforGeeks",
    lastName: "A Computer Science Portal for Geeks ",
    rank: 43
};
var userId = "";
var i;
for (i in person) {
    userId += person[i];
}

console.log(userId);

// for (..in) loop iterate over only the properties or the values of the dictionary object.

var text = [
    "GeeksforGeeks",
    " A Computer Science Portal for Geeks ",
    "43"
];
var userId = "";
var i;
for (i of text) {
    userId += i;
}

// for (..of) loop iterate over only the content of the Array object.

/* he for...in statement iterates over the enumerable string properties of an object, 
while the for...of statement iterates over values that the iterable object defines to be iterated over.*/


const iterable = [10, 20, 30];

for (let ele of iterable) {
    ele += 1;
    console.log(ele);
}
// 11
// 21
// 31

for (let index in iterable) {
    //newvalue += 0;
    console.log(index);
}


// 0
// 1
// 2

const newIterable = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
]);

for (const entry of newIterable) {
    console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of newIterable) {
    console.log(value);
}

/* for(...in)                                                                           for(...of)
    for (..in) statement loops through the enumerable properties of an object.          for (..of) statement lets you loop over the data structures that are iterable 
    The loop will iterate over all enumerable properties of the object itself and       such as Arrays, Strings, Maps, Node Lists, and more. 
    those the object inherits from its constructor’s prototype.                         It calls a custom iteration hook with instructions to execute on the value of each property of the object. */ 
    