const express = require("express");
const { getAllProduct, getAllProductDemo } = require("../controllers/productController");
const router = express.Router();

router.get("/", getAllProduct )
router.get("/demo", getAllProductDemo )

module.exports = router;