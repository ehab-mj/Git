// import express from "express"
// import dotenv from "dotenv"

// const app = express()
// app.use(express.json())

// const PORT = process.env.PORT || 3000;

// let products = [
//     { id: 1, name: "Black T-Shirt", price: 50, size: "M" },
//     { id: 2, name: "White T-Shirt", price: 45, size: "L" },
//     { id: 3, name: "Blue T-Shirt", price: 55, size: "S" },
// ];

// let users = [
//     { id: 1, name: "Dania", email: "dania@example.com" },
//     { id: 2, name: "Ali", email: "ali@example.com" },
// ];

// let orders = [{ id: 1, userId: 1, productId: 2, quantity: 1 }];

// dotenv.config();
// app.listen(PORT, () => {
//     console.log(`server is running on port${PORT}`);
// })


// app.get("/", (req, res) => {
//     res.send("hello world");
// })

// app.get("/products", (req, res) => {
//     res.status(200).json(products);
// })

// app.get("/products/:id", (req, res) => {
//     const ProId = Number(req.params.id);
//     // checking if number
//     const findproduct = products.find(pro => pro.id === ProId);
//     // find return only 1 thing
//     res.json(findproduct);

//     // if not there checking
//     if (!findproduct) {
//         return res.status(404).send("Product not found");
//     }
// });

// // create product
// // path for products // post
// // req --> body
// // edge case

// app.post('/products', (req, res) => {
//     const { name, price, size } = req.body;
//     // frontend -> fill it like input

//     const newProduct = {
//         id: products.length + 1,
//         name,
//         price,
//         size
//     };
//     products.push(newProduct);

//     if (!name || !price) {
//         return res.status(404).send("Product not found");
//     }
// })

// // update -- path -- id -- params
// // req.body
// // find
// // acording to req body. change data inside the array
// // res.json

// app.put('/products/:id', (req, res) => {
//     const ProId = Number(req.params.id);
//     const { name, price, size } = req.body;

//     if (!name || !price || !size) {
//         return res.status(404).json({ message: "Product not found" });
//     }

//     const product = products.find((pro) => pro.id === ProId);

//     // if i dont have product in array
//     if (!product) {
//         res.status(404).json({ message: "prduct not found" })
//     }
//     if (name) {
//         product.name = name;
//     }
//     if (price) {
//         product.price = price;
//     }
//     if (size) {
//         product.size = size;
//     }

//     res.json(product);
// })


// // delete // id - params
// // find index //  splice
// app.delete("/products/:id", (req, res) => {
//     const id = Number(req.params.id)
//     const productIndex = products.findIndex((product) => product.id === id)
//     console.log(productIndex);

//     // checking produnct index -1 = if the elemet is not exist
//     if (productIndex === -1) {
//         return res.status(404).json({ message: 'product not found' })
//     }
//     // deleteing only 1
//     const deleteProd = products.splice(productIndex, 1);
//     // returning
//     res.json({ message: "product deleted" }, deleteProd);
// })