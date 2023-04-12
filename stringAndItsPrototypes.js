const strPrim = "Hey What'sup"; // A literal is a string primitive
const strPrim2 = String(644); // Coerced into the string primitive "1"
const strPrim3 = String(false); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"
console.log('--------------------------');


const s1 = "43 + 2"; // creates a string primitive 
//if its not a numnber then it will give syntax error as Invalid or unexpected token
const s2 = new String("2 + 2"); // creates a String object
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log('--------------------------');

// A String object can always be converted to its primitive counterpart with the valueOf() method.
console.log(eval(s2.valueOf()));
console.log('--------------------------');

const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;
// Expected output: "Using an index of 5 the character returned is u"
console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
console.log('--------------------------');

index = -4;
// Expected output: "Using an index of -4 the character returned is d"
console.log(`Using an index of ${index} the character returned is ${sentence.at(index)}`);
console.log('--------------------------');

const newSentence = 'The quick brown fox jumps over the lazy dog.';
const newIndex = 4;
console.log(`The character at index ${newIndex} is ${newSentence.charAt(newIndex)}`);
// Expected output: "The character at index 4 is q"
console.log('--------------------------');

console.log(`The character code ${sentence.charCodeAt(36)} is equal to ${sentence.charAt(36)}`);
// Expected output: charCodeAt depends on the ASCII value
console.log('--------------------------');

const str1 = 'Hello';
const str2 = 'World';

console.log(str1.concat(' ', str2));
// Expected output: "Hello World"
console.log('--------------------------');

console.log(str2.concat(', ', str1));
// Expected output: "World, Hello"
console.log('--------------------------');

/* endsWith(searchString)
   endsWith(searchString, endPosition) */

const str = "To be, or not to be, that is the question.";

console.log(str.endsWith("question.")); // true returns boolean
console.log(str.endsWith("to be")); // false
console.log(str.endsWith("to be", 19)); // true
console.log('--------------------------');

//fromCharcode

console.log(String.fromCharCode(97, 98, 99, 100));
// Expected output: it will conververt ascii value in to characters and concate it together
console.log('--------------------------');

/* String.fromCharCode() cannot return supplementary characters (i.e. code points 0x010000 – 0x10FFFF) 
   but String.fromCodePoint does */


const word = 'fox';

console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// Expected output: "The word "fox" is in the sentence"
console.log('--------------------------');

const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'lazy';
const indexOfFirst = paragraph.indexOf(searchTerm);

console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);
// Expected output: "The index of the first "lazy" from the beginning is 35"
console.log('--------------------------');

console.log(`The index of the 2nd "${searchTerm}" is ${paragraph.indexOf(searchTerm, (indexOfFirst + 1))}`);
// Expected output: "The index of the 2nd "lazy" is 78"
console.log('--------------------------');

const a = 'réservé'; // With accents, lowercase
const b = 'RESERVE'; // No accents, uppercase

console.log(a.localeCompare(b)); // it generally igonore case-sensitive untill sensitivity is base
// Expected output: 1
console.log('--------------------------');

console.log(a.localeCompare(b, 'en', { sensitivity: 'accent' }));
// Expected output: 1
console.log('--------------------------');

console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
// Expected output: 0
console.log('--------------------------');

const regexp = /foo[a-z]*/g;
const Str = "table football, foosball";
const matches = Str.matchAll(regexp);

for (const match of matches) {
  console.log(
    `Found ${match[0]} start=${match.index} end=${
      match.index + match[0].length
    }.`,
  );
}
console.log('--------------------------');

// Found football start=6 end=14.  Found foosball start=16 end=24.

// matches iterator is exhausted after the for...of iteration
// Call matchAll again to create a new iterator
Array.from(Str.matchAll(regexp), (m) => m[0]);
// [ "football", "foosball" ]

const greeting = '   Hello world!   ';

console.log(greeting);
// Expected output: "   Hello world!   ";
console.log('--------------------------');

console.log(greeting.trim());
// Expected output: "Hello world!";
console.log('--------------------------');

console.log(greeting.trimEnd());
// Expected output: "   Hello world!";
console.log('--------------------------');

console.log(greeting.trimStart());
// Expected output: "Hello world!   ";
console.log('--------------------------');

const stringObj = new String('foo');

console.log(stringObj);
// Expected output: String { "foo" }
console.log('--------------------------');

console.log(stringObj.valueOf()); // returns value of an object
// Expected output: "foo"
console.log('--------------------------');

const x = new String("Let's Complete");

console.log(x.toString()); // "Let's Complete"
// convert string object in to string primitive
console.log('--------------------------');
