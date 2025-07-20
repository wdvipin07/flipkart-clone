import Product from "../models/Product.js";

export const productsController = async (req, res) => {
  try {
    let products = await Product.find({});
    res.status(200).json(products);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const individualProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findOne({ id: id });
    res.status(200).json(product);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
