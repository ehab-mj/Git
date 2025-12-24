let ehab_info = {
    name: "ehab",
    age: 27,
    Address: "Abu Snan",
    favorites: ["Coding", "Gaming", "Travil"],
    test: {
        array: [1, 2, 3, [4, 5]],
    },
};

// console.log(ehab_info.test.array[3][0]);
// Object = class with methods
// Object.keys(object name)
// Object.values(object name)
// Object.entries(object name)
console.log(Object.keys(ehab_info));
console.log(Object.values(ehab_info));// print only values
console.log(Object.entries(ehab_info));// print it all inside array


let numbers = [1, 2, 3];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//Object does not have index
// condition (loop no limit)



