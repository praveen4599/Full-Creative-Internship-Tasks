const { json } = require("body-parser");
const { response } = require("express");

let promise = new Promise(function(resolve,reject){
    resolve("Process is Successful"); // here promise is resolved successfully
    // reject("Sorry some error occured!!!!"); // suppose if it is rejected

})

// promise
//     .then((value) =>{
//     console.log(value);
// })
//     .catch((err) =>{
//     console.log(err);  
// })

const getData = async() => { // here asynchronous function as a expression using arrow function

    // promise has then catch method but here in asynchronous function i use try-catch block

    try{
        const data = await promise;
        console.log(data);
    }

    catch(err){
        console.log(err);
    }

}

getData();

async function timeOut(){

    let promise = new Promise((resolve, reject) => {

        setTimeout(() => resolve("done!"),1000); 
    });
    let result = await promise;
    console.log(result);
}

timeOut();

async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
  
    return 10;
  }
  
function set() {
    // shows 10 after 1 second
    wait().then((r) => (console.log(r)));
  }
  
set();

let data = fetch('https://reqbin.com/echo/get/json');
data.then(response => (response.json()))
    .then(json => console.log(JSON.stringify(json)));



async function loadJson(url) { 

    let response = await fetch(url); 
  
    if (response.status == 200) {
      let json = await response.json(); 
      return json;
    }
  
    console.log(`${url} status ${response.status} Not Found`);
  
}

loadJson('https://javascript.info/no-such-user.json')
  .catch();