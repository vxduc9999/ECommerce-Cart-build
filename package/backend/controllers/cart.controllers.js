const Order = require("../models/order.models").orders;
const Order_detail = require("../models/order.models").order_detail;
const Product = require("../models/shop.models").products;
const { Op } = require("sequelize");

// get cart page
exports.getCart = async (req, res, next) => {
  const user_id = req.body.user_id;
  await Order.findOne({
    where: {
      user_id: {
        [Op.eq]: user_id,
      },
      status: null,
    },
    include: [
      {
        model: Order_detail,
        as: "details",
        include: [
          {
            model: Product,
          },
        ],
      },
    ],
  })
    .then((order) => {
      if (order == null) {
        res.status(200).send({ message: "Nothing cart" });
      } else {
        res.status(200).send(order);
      }
    })
    .catch((err) => console.log(err));
};

// sub qty product from cart
exports.subQuantity = async (req, res, next) => {
  const user_id = req.body.user_id;
  const order_detail_id = req.body.order_detail_id;
  const product_id = req.body.product_id;
  // previous quantity - quantity u want to sub
  // ex: curr 14 -> u change qty = 12
  const quantity = parseInt(req.body.quantity); //then quantity = 12
  // update order_detail
  const order_detail = await Order_detail.findOne({
    where: {
      id: order_detail_id,
      product_id: product_id,
    },
  });
  // 14 - 12 = 2
  const diff = parseInt(order_detail.quantity) - quantity;
  order_detail.quantity = quantity; // 12
  order_detail.total = quantity * order_detail.price; // ex 800*12

  // update order
  const order = await Order.findOne({
    where: {
      id: order_detail.order_id,
      user_id: user_id,
    },
  });
  order.total = parseInt(order.total) - parseInt(diff * order_detail.price);
  order_detail.save();
  order.save();
  return res.status(200).send({ message: "Sub quantity Successfully" });
};

// plus qty product from cart
exports.plusQuantity = async (req, res, next) => {
  const user_id = req.body.user_id;
  const order_detail_id = req.body.order_detail_id;
  const product_id = req.body.product_id;
  const quantity = parseInt(req.body.quantity);
  // update order_detail
  const order_detail = await Order_detail.findOne({
    where: {
      id: order_detail_id,
      product_id: product_id,
    },
  });
  const diff = quantity - order_detail.quantity;
  order_detail.quantity = quantity;
  order_detail.total = quantity * order_detail.price;

  // update order
  const order = await Order.findOne({
    where: {
      id: order_detail.order_id,
      user_id: user_id,
    },
  });
  order.total = parseInt(order.total) + parseInt(diff * order_detail.price);
  order_detail.save();
  order.save();
  return res.status(200).send({ message: "Plus quantity Successfully" });
};

// del product from cart
exports.delProduct = async (req, res, next) => {
  const order_detail_id = req.body.order_detail_id;

  const order_detail = await Order_detail.findOne({
    where: {
      id: order_detail_id,
    },
  });

  const order_id = order_detail.order_id;
  const quantity = order_detail.quantity;
  const price = order_detail.price;

  // del product
  await Order_detail.destroy({
    where: {
      id: order_detail_id,
    },
  });

  // update order
  const order = await Order.findOne({
    where: {
      id: order_id,
    },
  });
  order.total = order.total - parseInt(quantity) * parseInt(price);
  order.save();
  if (order.total <= 0) {
    Order.destroy({
      where: {
        id: order_id,
      },
    });
  }

  return res
    .status(200)
    .send({ message: "Del product from cart successfully" });
};

// checkout
exports.pay = async (req, res, next) => {
  const email_user = req.body.email_user;
  const order_id = req.body.order_id;
  const name = req.body.name;
  const address = req.body.address;
  const phone = req.body.phone;
  const payment_method = req.body.payment_method;

  const order = await Order.findOne({
    where: {
      id: order_id,
    },
  });

  order.payment_method = payment_method;
  order.status = 1;
  order.fullname = name;
  order.email = email_user;
  order.phone = phone;
  order.address = address;
  order.save();

  return res.status(200).send({ message: "checkout successfully" });
};
