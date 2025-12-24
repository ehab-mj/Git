const products = [
    {
        id: "P001",
        name: "Wireless Mouse",
        category: "Electronics",
        price: 29.99,
        stock: 12,
    },
    {
        id: "P002",
        name: "JavaScript Guide",
        category: "Books",
        price: 19.99,
        stock: 0,
    },
    {
        id: "P003",
        name: "T-Shirt",
        category: "Clothing",
        price: 15.0,
        stock: 3
    },
    {
        id: "P004",
        name: "Noise-Cancel Head",
        category: "Cafe",
        price: 199.99,
        stock: 5,
    },
];

// Q1
let total = 0
for (let i = 0; i < products.length; i++) {
    total += products[i].price * products[i].stock
}
console.log(total);

// Q2
categorySummary = {}
for (let i = 0; i < products.length; i++) {
    let prod = products[i];
    let cat = prod.category;
    console.log(cat);

    if (!categorySummary[cat]) {
        categorySummary[cat] = 0;
    }

    categorySummary[cat] += prod.price * prod.stock

    for (const cat in categorySummary) {
        console.log(`${cat}: ${categorySummary[cat]} `);
    }
}

