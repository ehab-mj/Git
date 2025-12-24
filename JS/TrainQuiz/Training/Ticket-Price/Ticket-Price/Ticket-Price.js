let age = Number(prompt("enter your age:"));

if (age <= 5 && age > 0) {
    console.log(`Your age is ${age}: Free Pass`);
} else if (age >= 5 && age <= 17) {
    console.log(`Your age is ${age}: Ticket Price is 10$`);
} else if (age >= 18 && age <= 64) {
    console.log(`Your age is ${age}: Ticket Price is 20$`);
} else if (age >= 65) {
    console.log(`Your age is ${age}: Ticket Price is 12$`);
} else {
    console.log("Try Again later");
}