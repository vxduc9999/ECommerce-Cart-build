const sequelize = require('sequelize');
const Order = require('../models/order.models').orders;
const Order_detail = require('../models/order.models').order_detail;
const User = require('../models/user.models').users;
const Product = require('../models/shop.models').products;
const { Op } = require("sequelize");


exports.getCart = async(req, res, next) => {
    const user = req.session.user;
    if (user == null) {
        req.session.currentPage = "cart";
        return res.redirect('/signin');
    }
    await Order.findOne({
            where: {
                user_id: {
                    [Op.eq]: user.id
                },
                status: null
            },
            include: [{
                model: Order_detail,
                as: "details",
                include: [{
                    model: Product
                }]
            }]
        })
        .then(order => {
            if (order == null) {
                res.status(200).render('cart/cart', {
                    order: null
                })
            } else {
                res.status(200).render('cart/cart', {
                    order: order,
                    order_detail: order.details
                })
            }
        })
        .catch(err => console.log(err))
}

exports.subQuantity = async(req, res, next) => {
    const user = req.session.user;
    const order_detail_id = req.body.order_id;
    const product_id = req.body.product_id;
    const quantity = parseInt(req.body.quantity);
    // update order_detail
    const order_detail = await Order_detail.findOne({
        where: {
            id: order_detail_id,
            product_id: product_id
        }
    })
    const diff = order_detail.quantity - quantity;
    order_detail.quantity = quantity;
    order_detail.total = quantity * order_detail.price;

    // update order
    const order = await Order.findOne({
        where: {
            id: order_detail.order_id,
            user_id: user.id
        }
    })
    order.total = parseInt(order.total) - parseInt(diff * order_detail.price);
    order_detail.save();
    order.save();
    var response = {
        status: 200,
        success: 'Updated Successfully',
        total: order.total
    }
    res.end(JSON.stringify(response));
}

exports.plusQuantity = async(req, res, next) => {
    const user = req.session.user;
    const order_detail_id = req.body.order_id;
    const product_id = req.body.product_id;
    const quantity = parseInt(req.body.quantity);
    // update order_detail
    const order_detail = await Order_detail.findOne({
        where: {
            id: order_detail_id,
            product_id: product_id
        }
    })
    const diff = quantity - order_detail.quantity;
    order_detail.quantity = quantity;
    order_detail.total = quantity * order_detail.price;

    // update order
    const order = await Order.findOne({
        where: {
            id: order_detail.order_id,
            user_id: user.id
        }
    })
    order.total = parseInt(order.total) + parseInt(diff * order_detail.price);
    order_detail.save();
    order.save();
    var response = {
        status: 200,
        success: 'Updated Successfully',
        total: order.total
    }

    res.end(JSON.stringify(response));
}

exports.delProduct = async(req, res, next) => {
    const order_detail_id = req.body.order_id;

    const order_detail = await Order_detail.findOne({
        where: {
            id: order_detail_id
        }
    })

    const order_id = order_detail.order_id;
    const quantity = order_detail.quantity;
    const price = order_detail.price;

    // del product
    await Order_detail.destroy({
        where: {
            id: order_detail_id
        }
    });

    // update order
    const order = await Order.findOne({
        where: {
            id: order_id
        }
    })
    order.total = order.total - parseInt(quantity) * parseInt(price);
    order.save();
    if (order.total == 0) {
        Order.destroy({
            where: {
                id: order_id
            }
        })
    }

    var response = {
        status: 200,
        success: 'Updated Successfully',
        total: order.total
    }

    res.end(JSON.stringify(response));
}

exports.pay = async(req, res, next) => {
    const user = req.session.user;
    const order_id = req.body.order_id;
    const name = req.body.name;
    const address = req.body.address;
    const phone = req.body.phone;
    const payment_method = req.body.payment_method;

    const order = await Order.findOne({
        where: {
            id: order_id
        }
    })

    order.payment_method = payment_method;
    order.status = 1;
    order.fullname = name;
    order.email = user.email;
    order.phone = phone;
    order.address = address;
    order.save();

    var response = {
        status: 200,
        success: 'Pay Successfully',
        header: req.headers.host
    }
    res.end(JSON.stringify(response));
}