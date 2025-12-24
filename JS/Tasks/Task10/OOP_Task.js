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
