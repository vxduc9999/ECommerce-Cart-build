const path = require('path');
const express = require('express');
const router = express.Router();

const Cart = require('../controllers/cart.controllers');

router.get('/cart', Cart.getCart);

router.post('/sub-quantity', Cart.subQuantity);

router.post('/plus-quantity', Cart.plusQuantity);

router.post('/del-product-cart', Cart.delProduct);

router.post('/pay', Cart.pay);

module.exports = router;