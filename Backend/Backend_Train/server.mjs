import express from "express"
import dotenv from "dotenv"
import ProductsRoute from "./routes/ProductsRoute.js"

import logger from "./middleware/logger.js";
import users from "./data/users.js";
import orders from "./data/orders.js";
import { connectedToDB } from "./config/database.js";

const app = express()
const PORT = process.env.PORT || 3000;
dotenv.config();

app.use(express.json())

// if i want any middlewear i put it before routes
app.use(logger)

// we write it as middlewear 
// first thing i need path,
// then in productroute.js file no need to write .products every time
app.use("/products", ProductsRoute);
app.use("/users", users);
app.use("/orders", orders);

// connecting mongodb with code in config

// where to call database?
// first we need to connect to db then 
// do listen if is it true

// from this 
// app.listen(PORT, () => {
//     console.log(`server is running on port${PORT}`);
// })
// to this:
try {
    await connectedToDB();
    console.log("connected to db");

    app.listen(PORT, () => {
        console.log(`server is running on port${PORT}`);
    });
} catch (error) {
    console.error(error)
    // stop the program
    process.exit(1)
}