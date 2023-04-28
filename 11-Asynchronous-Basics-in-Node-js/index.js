/* Asynchronous and Synchronous 

In Synchronous operations tasks are performed one at a time


In Asynchronous, Second Task do not wait to finish First Task

-- it improves the fast execution




eg:

*/


console.log("Start Execution...");

setTimeout(()=> {

console.log("Logic Execution...");
}, 2000)

console.log("Complete Execution...");





//Drawback

// let a = 20;
// let b = 0;

// setTimeout(()=> {
//     b = 30;

// }, 2000);
// console.log(a+b);


//to fix above.. We need to fix like this <there are many ways using call back functions or etc but most convinenet way is by using Promises

let a = 20;
let b = 0;

let waitingData = new Promise((resolve, reject)=> {

    setTimeout(()=> {
        // b = 30;
        resolve(30)
    
    }, 2000);
    
})

waitingData.then((data) => {
    console.log(a+data);
})
