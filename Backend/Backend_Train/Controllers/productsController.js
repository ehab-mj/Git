import { getDataBase } from "../config/database";
import Product from "../models/productModel";

getDataBase

// // function getAllProduct -> async func
// export const getAllProducts = async (req, res) => {
//     try {
//         // get database
//         const db = getDataBase();
//         // choosing collection
//         const productsCollection = db.collection("products");
//         // getting all the products
//         // find = return it and must using await because we wait for database
//         // and return to array (its like a pointer)
//         const products = await
// find({}) -> return all docs
// productsCollection.find({}).toArray();

//         // in json format
//         res.json(products);
//     } catch (error) {
//         res.status(500).json({ message: "Error", error })
//     }
// }

// better way to write: 6:05+
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({}).toArray();

        // in json format
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: "Error", error })
    }
}

export const getProductById = async (req, res) => {
    try {
        const FoundProduct = await async(res.params.id)

    } catch (error) {
        res.status(500).json({ message: "Error fetching product", error: error.message })
    }
}
// // updateone, deleteone -> only 1
// export const getProductById = async (req, res) => {
//     try {
//         const db = getDataBase();
//         const productsCollection = db.collection("products");

//         // valid -> syntax -> if start with hexdemal
//         // if not error
//         if (!ObjectId.isValid(req.params.id)) {
//             return res.status(400).json({ message: "invalid product ID format" })
//         }

//         // if id 100% true saving it in new parameter
//         const productId = new ObjectId(req.params.id)

//         // checking in mongodb id
//         // we not only doing find we are doing filter = ({_id: productId}) -> its filter id
//         const foundProduct = await productsCollection.findOne({ _id: productId });

//         // if i dont have product return error
//         if (!foundProduct) {
//             return res.status(404).json({ message: "product not found" })
//         }
//         // if exist
//         res.json(foundProduct)
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching product", error: error.message })
//     }
// }


// update
// 6.4.2026 - 6:20+
export const updateProduct = async (req, res) => {
    try {
        const ProductId = (res.params.id);
        const { name, price, size } = req.body;

        const updatedProduct = {};

        if (name !== undefined) updatedProduct.name = name;
        if (size !== undefined) updatedProduct.size = size;
        if (price !== undefined) updatedProduct.price = price;

        const updatedField = await Product.findByIdAndUpdate(
            ProductId,
            updatedProduct,
            {
                runValidators: true
            },
        );
        res.json({ message: "updated Product", updatedField });
    } catch (error) {
        res.status(500).json({
            message: "Error fetching product",
            error: error.message
        })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted successfully", deletedProduct });
    } catch (error) {

    }
};


// insertOne -> insert new document to mongodb
// insertedId -> adding id automaticly to new mongo

// 6:35+39

// getting database from config
// connection.db

// $set -> edit


// need to do
// odm -> layer between mongodb and server
// shcemas -> shape -> type, product have a name must be string, rules, structure

// models -> methods to use with shcemas
// rules -> rules work automaticly
// population -> reference

// 6:55
// 7:05

// axios -> wroking automaticly to json format using fetch
// 7:40

// writing scema in models file