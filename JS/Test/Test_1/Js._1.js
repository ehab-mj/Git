sayHello();

const sayHello = function () {
    console.log("Hello");
}
// Answer: ReferenceError
// We get Error if we write 
// const sayHello = function () in this way

///////////////////////////////////////////

let arr = [1, 2, 3];
arr[0] = 99;
console.log(arr);
// Answer: [99,2,3]

///////////////////////////////////////////

let arr = [10, 20, 30];
console.log(arr[arr.length - 1]);
// Answer: 30

///////////////////////////////////////////

let x = 1;
function outer() {
    let x = 2;
    function inner() {
        console.log(x);
    }
    return inner();
}
outer();
// Answer: 2

///////////////////////////////////////////

let count = 0;
function increment() {
    count++
}
increment();
increment();
console.log(count);
// Answer: 2

///////////////////////////////////////////

function outer() {
    let count = 0;
    function inner() {
        count++;
        return count;
    }
    return inner;
}
const fn1 = outer();
const fn2 = outer();
console.log(fn1());
console.log(fn1());
console.log(fn2());
//Answer: 1 2 1

///////////////////////////////////////////

let y = 5;
function test() {
    let y = 10;
    console.log(y);
}
test();
console.log(y);
// Answer: 10 then 5

///////////////////////////////////////////

sayHi();
function sayHi() {
    console.log("Hi");
}
// Answer: Prints "Hi"

///////////////////////////////////////////

if (true) {
    let a = 5;
    var b = 10;
}
console.log(b);
console.log(a);
// Answer: 10 then ReferenceError

///////////////////////////////////////////

let numbers = [1, 2, 3];
numbers[5] = 10;
console.log(numbers.length);
// Answer: 6

///////////////////////////////////////////

let sum = 0;
for (let i = 1; i <= 3; i++) {
    if (i === 2) {
        continue;
    }
    sum += i;
}
console.log(sum);
// Answer: 4

///////////////////////////////////////////

function sum(a, b) {
    a + b;
}
console.log(sum(2, 3));
// Answer: undefined

///////////////////////////////////////////

if ("0") {
    console.log("Yes");
} else {
    console.log("No");
}
// Answer: "Yes"

///////////////////////////////////////////

console.log(1 + "2" + 3);
// Answer: "123"

///////////////////////////////////////////

for (let i = 0; i < 3; i++) {
    console.log(i);
}
console.log(i);
// Answer: Prints 0 1 2 then Error

///////////////////////////////////////////





