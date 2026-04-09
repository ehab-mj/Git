// Blocking Example
console.log("Start");
for (let i = 0; i < 5_000_000_000; i++) {
    //  long-running  task 
}
console.log("End");

// What happens ?
//  ●   The browser freezes
//  ●   The page stops responding
//  ●   Buttons and scrolling stop working
//  ●   "End"  is printed only after a long delay  This happens because JavaScript is  busy.

// JS has -> one call stack, one active task
// JS cant wait without blocking everything else

//! how can js handle slow tasks without freezing
// by using Asynchronous Execution
// First Example -> setTimeout

console.log(1); // runs immediately

setTimeout(() => { // task for later JavaScript does not wait
    console.log(2);
}, 1000);

console.log(3); // runs immediately After 1 second, the callback runs

// in log:
// 1  3  2

// async -> moving from top to down he blocking/ freez till he finish  waiting for answer
// the problems -> slow, infinite loop,
// single thread means -> he using only 1 thing for fixing

// setTimeout -> comes from browser CPU (also document method comes from browser)
// setTimeout = async func
// setTimeout ((callback func))

//! JavaScript Does Not Work Alone
// JS WORK LIKE ASYNC BECAUSE SHE IS SINGLE THREAD, THERE IS SOMEONE HELP JS IS -> WEB API
// node & v8 enige -> support js to work async

//! sinlge thread -> she do the one then move to next one

// if setTimeout is 0 it work as async for ex: start, end, middle not start, middle, end

//! callback func -> when you finish call me
function getNumberWrong(callback) {
    setTimeout(() => {
        callback(5); // 2. then calling
    }, 1000); // 1. when this done
}
//! callback make a problem -> callback hell 

// may ask you if JS is multi thread but its not it single thread

//! WebAPIs = المعالج
// setTimeout work in browser with callback func
// DOM work with callback func

// setTimeout & DOM & Fitch -> they work with API after that Callback Queue


//! Queue -> first in first out like books last book you put on top first book you take

//! Event Loop -> checking the callback queue and call stack if there was empty she send the element result to call stack

// if there any code needs time she send it from stack to webapis when it done she push it to task queue then event loop check if there anything she send it stack

//! API -> it like a sender it take request and return response (like a resturant order example)
// API link it with server

//! fetch ->

// in fetch link after the slash / calls endpoint

// callback -> it should be there callback func to call after he done to return the value in setimeout