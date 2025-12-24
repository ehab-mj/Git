const orders = [
    { id: 1, user: "Ahmad", total: 120, items: ["Laptop", "Mouse"] },
    { id: 2, user: "Lina", total: 45, items: ["Notebook"] },
    { id: 3, user: "Omar", total: 300, items: ["Phone", "Headphones"] },
    { id: 4, user: "Sara", total: 75, items: ["Keyboard", "Mouse"] },
    { id: 5, user: "Yousef", total: 15, items: ["Pen"] },
];

let result = orders.filter(
    order => order.total > 50
).map(
    order => {
        return {
            user: order.user,
            total: order.total,
            items: order.items.length
        }
    }
).sort((a, b) => b.total - a.total);
console.log(result);

let Users = orders.forEach((order) => {
    console.log(`${order.user} | ${order.total}`);
})
console.log(Users);

let first = orders.find((order) => {
    return order.total > 200;
})
console.log("first order > 200:", first);

let last = orders.find((order) => {
    return order.total < 20;
})
console.log("Has Order < 20", last);

let allorders = orders.every((order) => {
    return order.items.length > 0;
})
console.log(allorders);

let sum = orders.reduce((acc, order) => {
    return acc + order.total
}, 0)
console.log(sum);

