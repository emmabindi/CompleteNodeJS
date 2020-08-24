const path = require('path');
const express = require("express");
const productsController = require("../controllers/products");
const router = express.Router();

// /admin/add-prodct => GET
router.get("/add-product", productsController.getAddProduct);

// /admin/add-prodct => GET
router.post("/add-product", productsController.postAddProduct);

module.exports = router;
