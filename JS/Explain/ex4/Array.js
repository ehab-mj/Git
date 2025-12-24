// container array

// let grades = [90, 80, {}, 70, 79]

// length - 1
// console.log(grades.length - 1); // 3
// console.log(grades);

// console.log(indexOf(80)); // index 1
// indexOf = method
// length = property

// grades[0] = 100;
// reassigning


// push = Add to end
// push(value)

// pop = Delete the end
// pop()

// shift = delete first element array and return it
// shift()

// unshift = add at start of array
// unshift(value)

// -1 = element not found

// includes("element") = it like we asking if the array includes this element if yes = true if not = no

// Slice = (cut)
// slice(start, end)

// Splice = adding, replace, delete
// splice(start, count/delete, replace/add)

// split = cuting the string into arrays
// "the-stealth-warrior".split(/[-_]/)
// ["the", "stealth", "warrior"]

// concat = بتجمع ارريه مع ارريه
// array_1.concat(array_2)

// join = بتجمع السترينج مع بعض
// ("Hello", "World").join(" ") // "Hello world"


// let nestedArray = [90, 80, 80, 70, [40, 50, 60]];
// console.log(nestedArray.length);

// console.log(nestedArray[4][nestedArray[4].length - 1]);


let scores = [90, 85, 72, 88, 95];
let sum = 0;

for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
    // 1. sum = 90
    // 2. sum = 85
    // 3. sum = 72
    // .
    // .
}

let avg = sum / scores.length;
console.log("sum", sum);
console.log("Average:", avg);

