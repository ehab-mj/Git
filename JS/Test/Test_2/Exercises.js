//~~ Basic ~~//

// Ex1 - Yes or No
let x = 20;
function boolean() {
    if (x >= 10) {
        console.log("Yes");
    } else if (x < 10) {
        console.log("No");
    } else {
        console.log("Error 404");
    }
}
boolean()

///////////////////////////////////////////////

//~~ Simple Math ~~// 

// // Ex2 - Sum of lowest numbers
// const sums = [19, 5, 42, 2, 77];
// let result =
//     sums.filter(sum => sum < 7)
//         .sort((a, b) => a - b)
// console.log(result);


// Ex2 - One and Zero - Binary
let arr = [1, 0, 1, 1]
const stringArr = arr => {
    return parseInt(arr.join(''), 2)
};
console.log(stringArr(arr));


// Ex3 - Unique
let Uniq = [1, 1, 1, 2, 1, 1];
function findUniqNum() {
    return Uniq.find(n => Uniq.indexOf(n) === Uniq.lastIndexOf(n));
}
console.log(findUniqNum());


// Ex4 - Summation
let y = 8;
function summation() {
    let sum = 0;
    for (let i = 1; i <= y; i++) {
        sum += i;
    }
    return sum;
}
console.log(summation());


// Ex5 - Basic Math
function basicOp(value1, operation, value2) {
    return eval(value1 + operation + value2)
}
console.log(basicOp(4, '*', 7));

///////////////////////////////////////////////
//~~ Math In Story ~~// 

// Ex6 - Growth Of population
const EvYear = (p_0, percent, aug, p) => {
    let years = 0;
    while (p_0 < p) {
        p_0 += p_0 * percent / 100 + aug;
        years++;
    }

    return years;
};
console.log(EvYear(1000, 2, 50, 1200));


// Ex7 - People on the Bus
const PepinbusStop = busStop => {
    return busStop.reduce((acc, [In, Out]) =>
        acc + In - Out
        , 0)
};
console.log(PepinbusStop([[10, 0], [3, 5], [5, 8]]));


///////////////////////////////////////////////

//~~ Advanced Math ~~//

// Ex8 - Fibonacci -
const fib = n => {
    let arr = [0, 1];

    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    console.log(arr);
    return arr[n];
}
console.log(fib(10));


// Ex9 - Tribonacci -
signature = [1, 1, 1]
let n = 10;

const Tribonacci = () => {
    let tri = signature;
    for (let i = 3; i < n; i++) {
        tri[i] = tri[i - 1] + tri[i - 2] + tri[i - 3];
    }
    return tri.slice(0, n);
}
console.log(Tribonacci());

///////////////////////////////////////////////

//~~ Basic Iteration Logic ~~//

// Ex10 - trimming string
let str = ["ehab", "bahaa", "Rayan", "Reem", "Losee"]
const Remove = () => {
    return str.slice(1, 5)
}
console.log(Remove());


// Ex11 - String Repeat
let strRepeat = "Lo"
const Repeat = () => {
    return strRepeat.repeat(10, "Lo")
}
console.log(Repeat());


// Ex12 - To Camel Case
let Str = "winter is coming";
const ToCamelCase = () => {
    let words = Str.split(/-_/)

    for (let i = 1; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    return words.join('');
}
console.log(ToCamelCase());


// Ex13 - Abbreviate two words
let user = "ehab magdoub";
function AbbrevName() {
    return user.split(' ').map(x => x[0].toUpperCase()).join('.');
}
console.log(AbbrevName());


// Ex14 - Mask
function maskify(visa) {
    if (visa.length <= 4) {
        return visa;
    } else {
        return '#'.repeat(visa.length, -4) + visa.slice(-4);
    }
}
console.log(maskify("4556364607935616"));


// Ex15 - shortest words 
let line = "It's not about how much we lost. It's about how much we have left";

const FindShortWord = () => {
    return Math.min(...line.split(' ').map(word => word.length));
}
console.log(FindShortWord());


// Ex16 - shortest words version 2
let line2 = "It's not about how much we lost. It's about how much we have left";
const FindLongWord = () => {
    return Math.max(...line2.split(' ').map(word => word.length));
}
console.log(FindLongWord());

///////////////////////////////////////////////

//~~ Advanced Iteration Logic ~~//

// Ex17 - Mumbling
let st = "abcdefg";
function Accum() {
    return st.split('')
        .map((a, z) => a.toUpperCase() + a.toLowerCase().repeat(z))
        .join('_');
};
console.log(Accum());


// Ex18 - organize strings
let s1 = "asdfsldgfkdfdz";
let s2 = "kkmvjldfdkfppp";

const longest = () => {
    let concat = s1 + s2;
    console.log(concat);
    return [...new Set(s1 + s2)].sort().join('');
}
console.log(longest());

// Ex19 - isogram
let Isogram = "abcCfg";
const isIsogram = () => {
    return new Set(Isogram.toLowerCase()).size === Isogram.length;
}
console.log(isIsogram());

///////////////////////////////////////////////

//~~ Implement Functionality ~~//


// Ex20 - Find the Perimeter of a Rectangle
const PerSize = (length, width) => {
    return 2 * (length + width);
}
console.log(PerSize(100, 20));