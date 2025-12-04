let age = Number(prompt("What's your age?"));
let price = null;

if (age < 5 && age >= 0) {
    price = 0;
} else if (age >= 5 && age == 17) {
    price = 10;
} else if (age >= 18 && age == 64) {
    price = 20;
} else if (age >= 65) {
    price = 12;
} else {
    console.log("Not allowed");
}
console.log(`ticket price is ${price}`);
