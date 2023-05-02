// function callback1() {
//   console.log("Callback 1 called.");
// }

// function callback2() {
//   console.log("Callback 2 called.");
// }


// setTimeout(callback1, 2000);
// for (let i = 0; i < 3; i++) {
//   setTimeout(callback2, i * 1000);
// }


const one = () => Promise.resolve('resolving....'); // It is in the Micro Task queue

setTimeout(() => {
  console.log('Going to End');
}, 1000);  // setTimeout execute through Call stacks via Macro Task queue and Event loop.

async function myFun() {

  console.log('In a function');
  const res = await one();
  console.log(res);
  console.log('resolved successfully');
  setTimeout(() => {
    console.log('End');
  }, 2000);

}

console.log('Before a function');
myFun();
console.log('After a function');

/* Note : only when the operations in micro tasks queue are getting executed 
          after the operations in macro tasks queue */

async function sequentialAwait() {

  const first = await paused('first');
  const second = await paused('second');
}

function delay(ms){

  return new Promise((resolve,reject) => {
    setTimeout(resolve,ms);
  });

}
async function paused(id){

  console.log('Start ' + id);
  delay(1000);
  console.log('End ' + id);
}

sequentialAwait();