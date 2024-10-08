const express = require('express');
const router = express.Router();
const Product =require("../Models/product.model.js")
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller.js');

// Routes
router.get('/', getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
