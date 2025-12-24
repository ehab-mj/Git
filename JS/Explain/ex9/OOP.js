// functions inside object = methods

// Objects help by grouping related data and behavior together.

// userEmail = proparty

const user = {
    userName: "Ali",
    userAge: 22,
    userEmail: "ali@gmail.com",

    // how to find the proparty inside this object = this
    // this = go find for proparty
    // without this cant access to proparty userEmail
    sendEmail() {
        console.log("Email sent to" + this.userEmail);
    },
    // scope
    updateAge(newAge) {
        userAge = newAge;
    },
};
user.sendEmail();

// If we need 100 users, we would write:
// const user1 = { ... };
// const user2 = { ... };
// const user3 = { ... };

// blueprint = m566 l any object = class ,and the way to do it ->
// OOP = way to write the code make it more argenize

// class = should start with capital letter
class User {
    // proparty that not change
    // function work automatic without calling called = constructor 
    // syntax constructor = func
    // constructor inside him will be -> userName, userAge, userEmail
    // age = 23; // define it as public
    constructor(userName, userAge, userEmail, age = 23) {
        // constructor(userName, userAge, userEmail) = varible/params
        // this func will work automatic instance for this class
        // this value will be property
        this.userName = userName;// proparty not varible
        this.userAge = userAge;
        this.userEmail = userEmail;
        this.age = age;
        // in obj we have:
        // proparty: value
    }
    // method(){}
    // method(){}
    sendEmail() {
        console.log("Email sent to" + " " + this.userEmail);
    }
    // userEmail -> she see it as proparty not as method
}

// instance -> diiferent data -> return obj
const user1 = new User("Ehab", 27, "ehab@gmail.com");
console.log(user1);
// new -> is a copy of instance 

// to call for the method:
user1.sendEmail();

// Encapsulation = private data

class Wallet {
    // private = #
    #balance

    constructor() {

    }


    // we should have a method to access the private balance


}

w1.balance = 300; // creating new public balance not the same as private blalance

// Abstraction = Hide the internal -> user dont see what happend in backend when he want to use ATM
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }

    deposit(amount) {
        // internal rules (hidden from the user)
        if (amount <= 0) {
            console.log("Invalid deposit");
            return;
        }

        // after the added moneyshow how much money i have now
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Not enough balance");
            return;
        }

        // after withdraw money show how much money i have now
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }
}

const acc = new BankAccount(100);

acc.deposit(50);
acc.withdraw(30);
console.log(acc.getBalance());


// Incheritance -> multi classes work at same logic
// example User -> admin, guest, biz
// like father have sons

// super -> has his own constructor he calls the parameter from father
// super -> reuse take parameters from constractor

// Incheritance extend from fath to my class -> يورث من

// Polymorphism -> same method but his behavior change depening on the obj
// user -> admin, biz, guest -> there all users but thier logic are differents
// multi class same method different work/behavior/خصائص

class Animals {
    sound() {
        console.log("Sound");
    }
}

class Cat extends Animals {
    sound() {
        console.log("Mew Mew");
    }
}

class Dog extends Animals {
    sound() {
        console.log("Woff Woff");
    }
}

const animals = [new Animals(), new Dog(), new Cat()];
animals.forEach(animal => {
    animal.sound();
})

// 8:25 return...
// Polymorphism comes before Incheritance

// why we used forEach not map?
// forEach returning action and logs, here i wanted to return a print only
// we use forEach when -> I want to print, send data
// we use map when -> I want to return new Array, update value, save value