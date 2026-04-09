// import express
import express from "express";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
import productRoutes from "./routes/productsRoute.js";
import logger from "./middleware/logger.js";
// middle // convert json format
app.use(express.json());
app.use(logger); //morgan

app.use("/products", productRoutes);

// build path for /products  json()
// middleware

// listening to the port
app.listen(PORT, () => {
  console.log(`server connecting to ${PORT}`);
});
