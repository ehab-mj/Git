// Types:
let age: number = 26
// when do tsc -> create a new js file
// let name: string = "ehab"

let isHere: boolean = true

let array: number[] = [1, 2, 3, 4, 5, 6]
array.push(3)
// array.push("3") -> error


// union ->
let arr: (string | number | boolean)[] = [2, 3, true, "string"]

// 7:55
//* any:
// if i dont know the datatype 
// if i have librrary doesnt have types we choose any
// if i have and dont know what is the debug i use any

// we should't use any if i know the datatype (string, obj...)
let data: any = 6
data = true

// all function will do a number value
function add1(
    a: number,
    b: number): number
// : number -> the typescript should return is number
{
    return a + b
}
add1(2, 3)
// here should add a number


//! function return nothing = void


function add2(
    a: number,
    b: number) {
    return "ehab";
    // return string
}
add2(2, 3)

function add3(
    a: number,
    b: number) {
    return;
    // void -> if return nothing is void 
}
add3(2, 3); // add3(2) -> typescript gives me error

function sayHi(message: string,) {
    console.log(message);
}
sayHi("Hi")

// age? -> optinal
function greet(name: string, age?: number) {
    console.log(name, age);
}
greet("ehab")

// optinal 
function greet2(name: string, age: number = 20) {
    console.log(name, age);
}
greet2("ehab")

// const subtract = (a: string, b: number): number => {
//     return a - b;
// };

function processNumbers(
    a: number,
    b: number,
    operation: (x: number, y: number) => number,
): number {
    return operation(a, b);
}

// processNumbers(5, 3, (x, y) => x + y);
// processNumbers(5, 3, (x, y) => "Hello");

function printUser(
    user: {
        name: string;
        age: number;
        isAdmin: boolean
    }
) {
    console.log(`${user.name} is ${user.age} years old`);
}

//! Dry code
// function createUser(
//     user: {
//         name: string;
//         age: number;
//         isAdmin: boolean
//     }
// ) {
//     console.log(`${user.name} is ${user.age} years old`);
// }
// function updateUser(
//     user: {
//         name: string;
//         age: number;
//         isAdmin: boolean
//     }
// ) {
//     console.log(`${user.name} is ${user.age} years old`);
// }
// function DeleteUser(
//     user: {
//         name: string;
//         age: number;
//         isAdmin: boolean
//     }
// ) {
//     console.log(`${user.name} is ${user.age} years old`);
// }

//! Do it in bluePrint interface:
interface User {
    // only read cant edit it
    readonly id: number;
    name: string,
    age: number,
    isAdmin: boolean,
    // email: string -> requerd
    // do it in optinal to not get error up there
    email?: string
}

// to edit id
const user: User = {
    id: 1,
    name: "ehab",
    age: 25,
    isAdmin: true
}
user.id

// interface with function
interface MathOperation {
    (a: number, b: number): number;
}
const Add: MathOperation = (a, b) => a + b

// payment method
// let status = "pending";
// // we did reassign
// status = "peding"

//! Type
// i want the user to put do only from status i puted
type OrderStatus = "pending" | "paid" | "cancelled" | "refunded";

// like union type
let Status: OrderStatus = "pending"
// you should look to the OrderStatus with correct letters (the bug gives us the slove)

//! type can work like this like OrderStatus
//! interface only build in OBJECT

// now working in obj
type User2 = {
    id: number;
    name: string;
    isAdmin: boolean;
}

// type User = {name: string};
// type User = { age: number };