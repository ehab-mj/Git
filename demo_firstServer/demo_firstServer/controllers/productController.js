import products from "../data/products.js";

export const getAllProducts = (req, res) => {
  res.json(products);
};

export const getProductById = (req, res) => {
  const productId = Number(req.params.id);
  const foundProduct = products.find((products) => products.id === productId);
  if (!foundProduct) {
    return res.status(404).json({ message: "product not found " });
  }
  res.json(foundProduct);
};

export const createProduct = (req, res) => {
  const { name, size, price } = req.body;
  if (!name || !size || !price) {
    res.status(400).json({
      message: "name, peice,size required",
    });
  }
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    size,
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
};

export const updateProduct = (req, res) => {
  const id = Number(req.params.id);
  const { name, price, size } = req.body;
  if (!name || !size || !price) {
    res.status(400).json({
      message: "name, peice,size required",
    });
  }
  const product = products.find((product) => product.id === id);
  if (!product) {
    res.status(404).json({ message: "product Not found" });
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
};

export const deleteProduct = (req, res) => {
  const id = Number(req.params.id);
  const productIndex = products.findIndex((product) => product.id === id);
  console.log(productIndex);

  if (productIndex === -1) {
    return res.status(404).json({ message: "product not found " });
  }
  products.splice(productIndex, 1);
  res.json({ message: "product deleted" });
};
