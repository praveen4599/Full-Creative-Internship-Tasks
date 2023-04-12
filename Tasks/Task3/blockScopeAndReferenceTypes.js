const userName = "Praveenraj N";

if(true)
{
  var v1 =10;
  let v2=20;
  console.log(v1);
  console.log(v2); 
}

console.log(v1);
//  console.log(v2); // will threw reference error

// let block scope can't access outside the if block while var can be accessed

function fun()
{
	var temp ="temp is defined in function scope";
    let newWord = "It's a new word";
    //let newWord = ""; (SyntaxError)
	console.log(temp); 
}

fun();

// console.log(newWord); // newWord not defined can't access outside the block
// console.log(temp); // temp variable cannot be access outside the function block

console.log(userName);
//userName = "Naveen Kumar"; // TypeError (can't change the const variable once it's fixed)

//console.log(userName);


let user = {
  name: "John",
  hi() { 
    console.log(`Hi ${this.name}`); 
  },
  bye() { 
    console.log("Bye"); 
        }
};

user.hi(); // works

// now let's call user.hi or user.bye depending on the name
(user.name == "John" ? user.hi : user.bye)(); 

// the call results in an error, because the value of "this" inside the call becomes undefined.

var x = false;
var foo = function() {
var x = false;
bar=function(){
              var x=true;
              console.log(x); //local x is first in the scope so it shadows the rest
              }(); }

foo(); // logs true