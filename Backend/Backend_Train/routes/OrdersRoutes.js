import express from "express"
import dotenv from "dotenv"
import GetOrders from "../Controllers/OrdersController";
import logger from "../middleware/logger";

const router = express()
router.use(express.json())

const PORT = process.env.PORT || 3000;

dotenv.config();
router.listen(PORT, () => {
    console.log(`server is running on port${PORT}`);
})

router.get("/", logger, GetOrders);

router.get("/", (req, res) => {
    res.status(200).json(products);
})

router.get("/:id", (req, res) => {
    const ProId = Number(req.params.id);

    const findproduct = products.find(pro => pro.id === ProId);

    res.json(findproduct);

    if (!findproduct) {
        return res.status(404).send("Product not found");
    }
});

router.post('/', (req, res) => {
    const { name, price, size } = req.body;

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

router.put('/:id', (req, res) => {
    const ProId = Number(req.params.id);
    const { name, price, size } = req.body;

    if (!name || !price || !size) {
        return res.status(404).json({ message: "Product not found" });
    }

    const product = products.find((pro) => pro.id === ProId);

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


router.delete("/:id", (req, res) => {
    const id = Number(req.params.id)
    const productIndex = products.findIndex((product) => product.id === id)
    console.log(productIndex);

    if (productIndex === -1) {
        return res.status(404).json({ message: 'product not found' })
    }

    const deleteProd = products.splice(productIndex, 1);

    res.json({ message: "product deleted" }, deleteProd);
})

export default router;