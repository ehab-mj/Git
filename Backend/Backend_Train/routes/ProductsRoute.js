import express from "express"
import dotenv from "dotenv"

// app -> router express

const router = express()
router.use(express.json())

const PORT = process.env.PORT || 3000;

dotenv.config();
router.listen(PORT, () => {
    console.log(`server is running on port${PORT}`);
})

router.get("/", (req, res) => {
    res.send("hello world");
})

router.get("/", (req, res) => {
    res.status(200).json(products);
})

router.get("/:id", (req, res) => {
    const ProId = Number(req.params.id);
    // checking if number
    const findproduct = products.find(pro => pro.id === ProId);
    // find return only 1 thing
    res.json(findproduct);

    // if not there checking
    if (!findproduct) {
        return res.status(404).send("Product not found");
    }
});

// create product
// path for products // post
// req --> body
// edge case

router.post('/', (req, res) => {
    const { name, price, size } = req.body;
    // frontend -> fill it like input

    const newProduct = {
        id: products.length + 1,
        name,
        price,
        size
    };
    products.push(newProduct);

    if (!name || !price) {
        return res.status(404).send("Product not found");
    }
})

// update -- path -- id -- params
// req.body
// find
// acording to req body. change data inside the array
// res.json

router.put('/:id', (req, res) => {
    const ProId = Number(req.params.id);
    const { name, price, size } = req.body;

    if (!name || !price || !size) {
        return res.status(404).json({ message: "Product not found" });
    }

    const product = products.find((pro) => pro.id === ProId);

    // if i dont have product in array
    if (!product) {
        res.status(404).json({ message: "prduct not found" })
    }
    if (name) {
        product.name = name;
    }
    if (price) {
        product.price = price;
    }
    if (size) {
        product.size = size;
    }

    res.json(product);
})


// delete // id - params
// find index //  splice
router.delete("/:id", (req, res) => {
    const id = Number(req.params.id)
    const productIndex = products.findIndex((product) => product.id === id)
    console.log(productIndex);

    // checking produnct index -1 = if the elemet is not exist
    if (productIndex === -1) {
        return res.status(404).json({ message: 'product not found' })
    }
    // deleteing only 1 
    const deleteProd = products.splice(productIndex, 1);
    // returning 
    res.json({ message: "product deleted" }, deleteProd);
})

export default router;