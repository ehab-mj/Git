// function delecration
function sayHi() {
    console.log("Say Hi");
}
sayHi();

// function Expresstion
const sayBye = function () {
    console.log("Say bye");
};
sayBye();

//! delecration vs Expresstion = the name of the func in expresstion is before the function

// Arrow Func
const sayHello = (a, b) => {
    return a + b;
};
sayHello();
//! = () => : word func

//! Test Quiz:
//! in func delecration where are we calling for the func
//! Up or Down? -> Down after the delecration we called the func

//! if we do this:
// sayHi();
// function sayHi() {
//     console.log("Say Hi");
// }
//! Now can we calling for the func? -> Yes it will call the func this called "Hoisting" in js
// Hoisting = calling the func in any postion in js and how to define the func, she is when things exist

console.log(x);
let x = 5; // undefind -> because still not save it in memory
// const x = 5; // same error
// var x = 5; var do unexpect behavior 


