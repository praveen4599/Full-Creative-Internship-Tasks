// Objective is to create an array of sqaure numbers

/* forEach method */

let myArray = [1, 2, 3, 4];

const returnValue = myArray.forEach((element) => {
    return element * element;
});
console.log(myArray);
console.log(returnValue); // try to store it in a variable , it shows undefined

/* map method */
myArray = [1, 2, 3, 4];

const returnValueMap = myArray.map((element) => {
    return element * element;
});
console.log(myArray);
console.log(returnValueMap);

// also chaining technique is not works fine in forEach

// console.log(returnValue.reverse()); // TypeError - can't read properties of undefined
console.log(`Reversed Array: ${returnValueMap.reverse()}`);

/* S.No                  forEach
    1	The forEach() method does not returns a  new array based on the given array.	The map() method returns an entirely new array.
    2	The forEach() method returns “undefined“.	                                    The map() method returns the newly created array according to the provided callback function.
    3	The forEach() method doesn’t return anything 
        hence the method chaining technique cannot be applied here. 	                With the map() method, we can chain other methods like, reduce(),sort() etc.
    4.	It is not executed for empty elements.	                                        It does not change the original array.

*/