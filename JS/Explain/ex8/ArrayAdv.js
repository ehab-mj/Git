// imprative -> when we do step by step
// declartiv -> we dont work on step by stepin coding 
// ES6 -> upgrade in js with new methods there is new update -> array method

const nums = [1, 2, 3, 4]
nums.forEach((num) => {
    console.log(num);
})

//! callback:
// (num) => {
// console.log(num);

// when we dont tell her how to do it called declartive

// foreach = ignore return (she doesnt return nothing)

// she work with logs

// return on ... 5:20


// map -> work with return
// and map return without putting return

const Nums = [1, 2, 3, 4];
// map
// return
// let result = Nums.map((num) => num * 2);
// console.log(result);

// declartive
let result = Nums.map((num) => {
    return num * 2;
})
console.log(result);

// filter -> return array many results 
let res = nums.filter((num) => num % 2 == 0);
console.log(result);
// when we put -> {} -> must put return 
// [1,3] -> [1,2,3,4] = 1,0,1,0
// == 0 -> return [2,4]

let Res = nums.filter((num) => {
    return num % 2 == 0 && num > 2;
    // [4]
});
console.log(Res);


// find -> return one result (value)
let FindResult = nums.find((num) => {
    return num > 2;
})
console.log(result);


// sort
let names = ["ehab", "dania", "ahamd"];
console.log(names.sort());

const numbers = [1, 3, 10, 4];
console.log(
    // declartiv:
    numbers.sort((a, b) => {
        return a - b;
    })
    // return... 5:55 
    // [1,3..] -> 3-1 = 2
    // [10,4] -> 10-4 - 6
    // like a loop

    // if a < b -> a - b is negative -> a goes before b
    // if a > b -> b is positive -> a goes after b
    // if equal -> 0 -> no change
);
// [1,3,4,10]
// numbers.sort((a, b) => {
//     if (a < b) return -1;
//     if (a > b) return 1;
//     return 0;
// });


// reduce -> return (result) value
// she takes callback func and inistual value (where i want to start)
// when i start the loop i need to remeber -> where i started and acc, current

// منرجع علبهدله 6:15
let Reduce_nums = [1, 2, 3, 4, 5, 6];
let sum = 1;
for (let i = 0; i < Reduce_nums.length; i++) // acc
{
    sum += Reduce_nums[i]; // current
}


let Result = Reduce_nums.reduce((acc, current) => {
    return acc + current;
}, 0)
console.log(Result);

// reduce take -> //! reduce((callback fun, inistual value) => {}) -> called parameter inside the func/ callback func -> }, the seceond parameter is inistual value = where i want to start my reduce for example the intual = 0
// reduce(()) -> inside the () -> لازم اكون متذكر قيمه الجمع ولقيمه الي جمعتها ->
// (acc, current)
// -> acc -> هي مثل المحفظه -> remeber the first element i puted
// -> current -> she's every value in array ->
// first value we have in inistual value = 0
// let Reduce_nums = [1, 2, 3, 4, 5, 6];
// first value we have in current is 1 -> 1 + 0 = acc = 1
// second value is 2 -> current + acc = acc = 3 -> acc is saving the value
// acc + current = 3 + 3 = 6 -> acc = 6
