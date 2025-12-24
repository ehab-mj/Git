const orders = [
    { id: 1, user: "Ahmad", total: 120, items: ["Laptop", "Mouse"] },
    { id: 2, user: "Lina", total: 45, items: ["Notebook"] },
    { id: 3, user: "Omar", total: 300, items: ["Phone", "Headphones"] },
    { id: 4, user: "Sara", total: 75, items: ["Keyboard", "Mouse"] },
    { id: 5, user: "Yousef", total: 15, items: ["Pen"] },
];

// total greater than 50
let result = orders.filter(order => order.total > 50)
    .map(order => {
        return {
            user: order.user,
            total: order.total,
            items: order.items.length
        };
    })
    .sort((a, b) => b.total - a.total);

console.log("total greater than 50", result);

// total amount from highest to lowest
// let Sort = orders.sort((a, b) => {
//     return b.total - a.total;
// })
// console.log(orders.sort());

// Prints each user’s name and total in the console in this format:

// foreach do action
orders.forEach((order) => {
    console.log(`User: ${order.user} | Total: ${order.total}`);
})

// first order 
let firstOrder = orders.find((order) => {
    return order.total > 200;
});
console.log("First order > 200:", firstOrder);

// last one
let lastOrder = orders.find((order) => {
    return order.total < 20;
});
console.log("Has order < 20:", lastOrder);

// all orders 
// every: 7:52
// every return true or false
let all_items = orders.map((order) => {
    return order.items.length > 0
})
console.log("All orders have items:", all_items);

// sum of all order totals
let sum = orders.reduce((acc, order) => {
    return acc + order.total;
}, 0)
console.log("Total revenue:", sum);
// reduce(callback func , inistual value)
