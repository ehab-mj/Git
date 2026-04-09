// 1.
import express from "express"
const app = express()
// console.log(app); -> object

// 6.
import dotenv from "dotenv"
dotenv.config();


// 5.
app.use(express.json())
// convert json fromat

// 2.
// const PORT = 4000;
const PORT = process.env.PORT || 3000;
// makeing req if he listen or not
// first he listen to port
app.listen(PORT, () => {
    console.log(`server is running on port${PORT}`);
})
// npm server.js/mjs -> server is running on port 4000

// 3.
app.get("/", (req, res) => {
    res.send("hello world");
})
app.get("/about", (req, res) => {
    res.send("About You");
})

// 4.
app.get("/users", (req, res) => {
    const users = [
        { id: 1, name: "ehab" },
        { id: 2, name: "ehab" }
    ]
    res.status(200).json(users);
})

// 7.
app.post("/add-recipe", (req, res) => {
    const newRecipe = req.body;

    console.log("new Recipe added");

    res.status(201).json({ message: "Recipe Added", recipe: newRecipe })
})

// Tasks
app.use((req, res) => {
    res.status(404).send("Page Not Found");;
})

console.log(`Request Received:${"/users"}`);

app.get("/products", (req, res) => {
    const products = [
        { id: 1, name: "ehab" },
        { id: 2, name: "ehab" }
    ]
    res.status(200).json(products);
})

