let total = Number(prompt("Enter cart total:"))
let member = toLowerCase(prompt("Are you a member? (yes/no)"))

if (member == "yes" && total >= 200) {
    console.log("You got a 20% off");
} else if (member == "yes" && total < 200) {
    console.log("You got a 10% off");
} else if (member == "no" && total >= 200) {
    console.log("You got a 5% off");
} else {
    console.log("No Discount");
}