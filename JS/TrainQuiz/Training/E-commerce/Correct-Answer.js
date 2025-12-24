const products = [
    {
        id: "P001",
        name: "Wireless Mouse",
        category: "Electronics",
        price: 29.99,
        lowstock: "",
        stock: 12,
    },
    {
        id: "P002",
        name: "JavaScript Guide",
        category: "Books",
        price: 19.99,
        lowstock: "",
        stock: 0,
    },
    {
        id: "P003",
        name: "T-Shirt",
        category: "Clothing",
        price: 15.0,
        lowstock: "",
        stock: 3
    },
    {
        id: "P004",
        name: "Noise-Cancel Head",
        category: "Cafe",
        lowstock: "",
        price: 199.99,
        stock: 5,
    },
];


// 1. Compute Total Inventory Value
let totalValue = 0
// Loop throught each product and add price * stock to totalvalue
for (let i = 0; i < products.length; i++) {
    totalValue += products[i].price * products[i].stock;
}

// Log with two decimals
console.log(`Total inventory value: ${totalValue}`);

// 2. Build category summary
const categorySummary = {};
for (let i = 0; i < products.length; i++) {
    const prod = products[i] // prod = every product i
    const cat = prod.category; // prod.category = every category we have
    console.log(cat); // cat = every category

    // if the category not exist add it to categorySummary = {here}
    // we do initialize category if first encounter
    if (!categorySummary[cat]) { // if not exist
        categorySummary[cat] = 0; // add it with count = 0
    }
    // it will do loop on all of them and not to put manully

    // Add this product's value to its category
    categorySummary[cat] += prod.price * prod.stock;
}

// We want to do now loop on Object we use For in
console.log("Category Summary:");
for (const cat in categorySummary) {
    // const every category in category named categorySummary print: categorySummary[cat]
    console.log(`${cat}: ${categorySummary[cat].toFixed(2)}`);
}

// 3. Flag low-stock items
const Low_Stock = 5;
console.log("Category Summary:");
// Loop and add new boolean property, then log names
for (let i = 0; i < products.length; i++) {
    const prod = products[i];
    prod.lowstock = prod.stock < Low_Stock

    if (prod.lowstock) {
        console.log(` * ${prod.name} : ${prod.stock}`);
    }
}

// 4. Apply Discount to Electronics
for (let i = 0; i < products.length; i++) {
    if (products[i].category === "Electronics") {
        products[i].price = products[i].price * 0.9;
        console.log("Discount price for:" + products[i].name + products[i].price);
    }
}

// 5. Filter Available Products
const available = [];
for (let i = 0; i < products.length; i++) {
    if (products[i].stock > 0) {
        available.push(products[i])
    }
}
console.log("Products amount:", available.length);
console.log("Products names:");

for (let i = 0; i < available.length; i++) {
    console.log(available[i].name);
}


// 6. Remove Discontinued Items
for (let i = products.length - 1; i >= 0; i--) {
    // let index = reversed (products.length - 1 = the last index in products), i >= 0 -> keep going down till he reached 0, i-- = every time we -1
    if (products[i].price <= 0 || products[i].stock == 0) {
        // products[i].stock == 0 -> if he does not exist
        products.splice(i, 1, "removed item")
        // splice(index, delete, replace/add) -> we see the index in every when he loops and delete
    }
}
console.log("The new length of product array:", products.length); // we printed how much still we have

// 7. Bonus: Clone & Extend a Product
//! Spread Opirators = using it with array and string
const clone = {
    ...products[0], // take the old values as copy and add on it
    // ... -> take all the old values in the same array -> then come to products[0] -> and add this warranty: "1 year"
    warranty: "1 year" // key: value
};
// products[0] -> we take first product from index 0
console.log("Cloned Product:", clone);
console.log("Orignal Product:", products[0]);


