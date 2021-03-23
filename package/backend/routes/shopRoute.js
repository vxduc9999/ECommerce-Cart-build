const path = require("path");
const express = require("express");

const router = express.Router();
const Shop = require("../controllers/shop.controllers");

router.get("/", Shop.getHomePage);

router.get("/phone", Shop.phone);

router.get("/detail/:slug", Shop.getDetailProduct);

router.get("/detail/:slug/:page", Shop.getDetailProduct);

// add to carts
router.post("/detail/:slug", Shop.postDetailProduct);

router.get("/autocomplete", Shop.getSearch);
module.exports = router;
