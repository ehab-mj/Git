import mongoose from "mongoose"

// new = we doing instence
const productSchema = new mongoose.Schema({
    name: {},
    price: {},
    size:
    {
        type: Number,
        // enum: values for user to choose 
        enum: {
            vlaue: ["L", "S", "M"],
            message: "must choose the size"
        },
        upperCase: true,
    },
    InStock: {
        type: Boolean,
        default: true, // Default value: true
    },

})

// unique: true // specal only 1 to save like for email
// timestamp: if true updated at or created at automatic updating or creating
// Buffer: its 0 1, slicing the data and saving it 
// author: {}

const Product = mongoose.model("products", productSchema)
export default Product;
// using this in

// find -> return all doc
// $gt -> great than
// 8:05+