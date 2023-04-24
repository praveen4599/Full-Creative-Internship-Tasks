document.write("Hi");
document.write("<br>");
document.write("I'm Praveenraj");
document.write("<br>");
document.write("How are you");
// Synchronus means sequence every line of the code executes one by one
// Basically a statement has to wait for the earlier statement get executed

setTimeout(() => {
    clearInterval(end);
    document.write("Bye!... TimesUp");
}, 1000);

/* The setTimeout method sets a timer which executes a function or 
specified piece of code once the timer expires. */

document.write("<br>");
document.write("I'm Fine");

let end = setInterval(() =>{
    document.write("Going to End."); 
    document.write("<br>");  
}, 200);

/* The setInterval() method executes the function infinitely 
hence there is a method called as clearInterval() to stop the execution of the setInterval(). */

/* Asynchronous code allows the program to be executed immediately 
where the synchronous code will block further execution of the remaining code until it finishes the current one.*/
