//! ""Clousure"" = behavior saving varible lexibal scope has created he remember

//! Clousure = he work as automatic not manual


function outer() {
    let x = 5;

    function inner() {
        console.log(x); // he remeber x its calling Clousure 
    }
    return inner;
}
// outer()// return nothing
// console.log(outer()); // return the inside func only without 5

const fn = outer();// return the func (it like we write like this -> fn = inner() -> calling it the same thing when we wrote const fn = outer();)

console.log(outer());// return inner

fn(); // calling for func with x = 5 with log(x)

// fn() -> when we called fn() he save/remeber the varible is 5, And give it to func inner and make it work this is called = Clousure

//! scope vs clousure
// Scope -> He define where is the varible are accessble, Where can i access to them

// Clousure -> He define how much i can use this varible / how long these varible remine accessble

//! const fn = outer(); Vs fn();
// const fn = outer(); -> calling and saving inside varible -> and return func inner

// fn(); -> calling to func inner and he took the varible = 5 and print it 