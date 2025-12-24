let n = prompt("Enter a number:"); // user should write positive number
n = Number(n)
// the user may enter negative number or positive number

// first we check if number is negative or positive
// if number is > 0 = +
// if number is < 0 = -

let count = 0;

if (n <= 0) {
    console.log("Negative Number");
} else {
    // if the number is even or odd
    // how to know? we do "/" to see if there more numbers 13.5656 
    // n/2 = 0 = even
    // n/2 = 1 = odd

    while (n != 1 && count < 500) {
        if (n % 2 == 0) {
            n = n / 2
        } else {
            n = 3 * n + 1
        }
        count++;
    }
    console.log(`Reached 1 in ${count} steps`);
}

// explaining how it work
// user wrote 5
// n = 5
// 5 is a + number
// so it goes to while loop
// first he checks 5 != 1 (not odd number) az = true,  count still = 0 < 500 = true;
//  both true then will enter to check the if
// if (5 % 2 == 0); false
// then will go to check else
// 3 * 5 + 1 = 16
// count++ = +1
// steps: 5 -> step 1
//        16 -> step 1
// 16 = is even will go to if to check-> 16 % 2 = 8
//        8 -> step 2 (count = 2)
// 8 % 2 = 4
//        4 -> step 3 (count = 3)
// 4 % 2 = 2
//        2 -> step 4 (count = 4)
// 2 % 2 = 1
//        1 -> step 5 (count = 5) the end when it reached 1
// we want 1 != 1 it will end the loop 