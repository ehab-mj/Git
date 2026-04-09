class Course {
    constructor(title, instructor_name, maxstudents, enroll = 0) {
        this.title = title;
        this.instructor_name = instructor_name;
        this.maxstudents = maxstudents;
        this.enroll = enroll;
    }

    enrollStudent() {
        if (this.enroll < this.maxstudents) {
            this.enroll++;
            // when we call the method enrollStudent the enroll will increase by 1
        }

    }
}
// back to 6:25
const course1 = new Course("JS", "Ehab", 3);
course1.enrollStudent();
console.log(course1);




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