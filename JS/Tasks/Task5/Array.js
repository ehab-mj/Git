let students = ["Dania", "Omar", "Lina", "Rami"];

students.push("Sara");
console.log(students);
students.unshift("Adam");
console.log(students);

students.splice(students.indexOf("Lina"), 1, "Lamar")// aza msh 3arfen lina ano index


// students.splice(2, 0, "Lamar")