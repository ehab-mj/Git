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

let total = 0;

for (let i = 0; i < products.length; i++) {
    total += products[i].price * products[i].stock;
    console.log("Total inventory value", total);
}

const catsum = {};

for (let i = 0; i < products.length; i++) {
    const cat = products[i].category;

    if (!catsum[cat]) {
        catsum[cat] = 0;
    }
    catsum[cat] += products[i].price * products[i].stock;

    console.log(`${cat} : ${catsum[cat]}`);
}

const Low_Stock = 5;
for (let i = 0; i < products.length; i++) {
    products[i].lowstock = (products[i].stock < Low_Stock);

    if (products[i].lowstock === true) {
        console.log(products[i]);
    }
}

for (let i = 0; i < products.length; i++) {
    if (products[i].category === 'Electronics') {
        products[i].price = products[i].price * 0.9;
        console.log(products[i].price);
    }
}

const ava = [];

for (let i = 0; i < products.length; i++) {
    if (products[i].stock > 0) {
        ava.push(products[i])
    }
}
console.log(ava.length);
console.log("names:");

for (let i = 0; i < ava.length; i++) {
    console.log(ava[i].name);
}


for (let i = products.length - 1; i >= 0; i--) {
    if (products[i].price <= 0 || products[i].stock === 0) {
        products.splice(i, 1, "removed")
    }
}
console.log(products.length);


const clone = { ...products[0], warranty: '1 year' };
console.log("Cloned Product:", clone);
console.log("Orignal Product:", products[0]);

