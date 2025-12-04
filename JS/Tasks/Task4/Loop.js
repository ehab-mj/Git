let n = Number(prompt("Enter a number"))

for (let i = n; i <= 7; i++) {
    console.log(`${n} * ${i} = ${n * i}`);
}



// for (let i = n; i <= 70; i += 10) {
//     console.log(`${n} * ${i} = ${i * n}`);
// }

///////////////////////////////////
// مراجعه 
let steps = 0;
if (n <= 0) {
    console.log("Neg number");
} else {
    while (n != 1 && steps < 500) {
        if (n % 2 == 0) {
            n = n / 2;
        } else {
            n = 3 * n + 1;
        }
        steps++;
    }
}
console.log(`Reached 1 in ${steps} steps.`);