// filtered down to just the elements from the given array that pass the test implemented by the provided function.

var nestedObject = [
    {
        itemId: 1,
        itemDetails: {
            name: "C",
            caregory: "Programming Language",
            price: 500,
        },
        itemCategory: "Basic",
    },
    {
        itemId: 2,
        itemDetails: {
            name: "C++",
            caregory: "Programming Language",
            price: 700,
        },
        itemCategory: "Beginner",
    },
    {
        itemId: 1,
        itemDetails: {
            name: "Java Script",
            caregory: "Web Development",
            price: 1500,
        },
        itemCategory: "Advanced",
    }]
let itemNames = nestedObject.filter(
    eachObj => eachObj.itemDetails.price === 1500);

console.log(`Item which has item price value of 1500: ${itemNames}`); // logs the a object which has item price value of 1500

// Modifying each word
let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = words.filter((word, index, arr) => {
    arr[index + 1] += " extra"; // append the word 'extra' other than index 0.
    return word.length < 6; // words in an array which are less than length of 6 will return.
});

console.log(`ModifiedWord ${modifiedWords}`);

const result = words.filter(word => word.length > 6);

console.log(`${result}`);

const fruits = ["apple", "banana", "grapes", "mango", "orange"];

/*
  Filter array items based on search criteria (query)
 */

function filterItems(arr, query) {
  return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
}

console.log(filterItems(fruits, "ap")); // -> filter the substring
console.log(filterItems(fruits, "an")); 

