const path = require('path');
const express = require('express');

const router = express.Router();
const user = require('../controllers/user.controllers');


// sign in
router.get('/signin', user.getSignin);

router.post('/signin', user.postSignin);

// logout
router.post('/logout', user.postLogout);

// forgot password
router.get('/forgot-password', user.getForgotPassword);

router.post('/forgot-password', user.postForgotPassword);

// send code to change password
router.get('/import-code', user.getImportCode);

router.post('/import-code', user.postImportCode);

// reset pass
router.get('/changepassword', user.getChangePassword);

router.post('/changepassword', user.postChangePassword);

// signup
router.get('/signup', user.getSignup);

router.post('/signup', user.postSignup);

router.get('/verify-email', user.getVerifyEmail);

router.get('/user/order-list', user.orderList);

router.get('/user/wishlist', user.getWistlist);

router.post('/del-wish', user.postDelWish);

router.post('/love-product', user.postLoveProduct);

module.exports = router;