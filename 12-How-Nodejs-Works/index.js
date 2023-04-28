// ################# Event Loop #####################

/* The event loop is a core part of the JavaScript runtime environment that enables asynchronous programming in JavaScript. It is a continuous process that constantly checks the message queue for new events and executes the appropriate callbacks in response.

When you execute code in JavaScript, it runs on a single thread. This means that JavaScript can only perform one task at a time. However, with the event loop, JavaScript can execute code asynchronously by deferring certain tasks until later and allowing other tasks to continue. */


// call stack -> node api --> event loop


//################### Call Stack #######################

/* 
the call stack only collects function calls in JavaScript. Whenever a function is called, a new frame is added to the top of the call stack. This frame contains information about the function, such as its arguments and local variables, and the location in the code where the function was called.


The call stack keeps track of the order in which functions are called,
*/

console.log("Starting UP");

setTimeout(() => {
    console.log("2 Second Log");
}, 2000);

setTimeout(() => {
    console.log("0 Second Log");
}, 0);

console.log("Finishing UP");


//########################## Node APIs ##############

// setTimeout()                       c++ thing




//################ CallBack Queue ###################



// Node js archetecture


