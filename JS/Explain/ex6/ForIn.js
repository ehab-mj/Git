// for (اذا الكاتيجوري بقلب in الكاتيجوري)
// for in work with objects

let ehab_info = {
    name: "ehab",
    age: 27,
    Address: "Abu Snan",
    favorites: ["Coding", "Gaming", "Travil"],
    test: {
        array: [1, 2, 3, [4, 5]],
    },
};

// for in -> do a loop on key (or any eterator/name in (inside) ehab_info (object))
for (let key in ehab_info) {
    console.log(ehab_info[key]); // print ehab_info with key ->
    // ehab_info[name]
    // ehab_info[age]
    // ehab_info[Address]
    // .
    // .

    // if we do this -> ehab_info.key
    // he will think there is a key named key inside the object -> the right way is ehab_info[key]
}