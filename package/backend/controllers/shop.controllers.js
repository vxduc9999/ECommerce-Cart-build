const products = require("../models/shop.models").products;
const users = require("../models/user.models").users;
const wishlists = require("../models/shop.models").wishlists;
const product_reviews = require("../models/shop.models").product_reviews;
const images = require("../models/shop.models").images;
const orders = require("../models/order.models").orders;
const order_details = require("../models/order.models").order_detail;
const sequelize = require("sequelize");
const db = require("../config/db");
const { Op } = require("sequelize");
const moment = require("moment");
const querystring = require("querystring");
const crypto = require("crypto");

// show all data
exports.getHomePage = async (req, res, next) => {
  products
    .findAll({ limit: 20 })
    .then((products) => res.send(products))
    .catch((err) => console.log(err));
};

// test pagination
exports.phone = async (req, res, next) => {
  let perPage = 10; // qty product in 1 page
  let page = req.query.p || 1;
  products
    .findAndCountAll({
      limit: perPage,
      offset: perPage * page - perPage,
    })
    .then((products) => {
      res.status(200).send({ count: products.count, products: products.rows });
    })
    .catch((err) => console.log(err));
};

exports.getDetailProduct = (req, res, next) => {
  const user = null;
  const slug = req.params.slug;

  // chưa có user
  if (user == null) {
    products
      .findOne({
        where: {
          product_slug: {
            [Op.eq]: slug,
          },
        },
        include: [
          {
            model: images,
            limit: 4,
          },
          {
            model: users,
            as: "productByComment",
            through: {
              attributes: ["comment", "rate", "created_at"],
            },
          },
        ],
      })
      .then((product) => {
        res.status(200).send(product);
      })
      .catch((err) => console.log(err));
  } else {
    // có user
    products
      .findOne({
        where: {
          product_slug: slug,
        },
        include: [
          {
            model: users,
            as: "productLiked",
            through: {
              // if not found then return empty array []
              where: {
                user_id: user.id,
              },
            },
          },
          {
            model: images,
          },
          {
            model: users,
            as: "productByComment",
            through: {
              attributes: ["comment", "rate", "created_at"],
            },
          },
        ],
        order: [[{ model: images }, "id", "ASC"]],
      })
      .then((product) => {
        res.status(200).send(product);
      })
      .catch((err) => console.log(err));
  }
};

// add to cart
exports.postDetailProduct = async (req, res, next) => {
  const product_id = req.body.product_id;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const user_id = req.body.user_id;
  let order_number = -1;
  let tmp = -1;
  const tko = async () => {
    while (tmp < 0) {
      order_number = Math.floor(Math.random() * 99999999) + 2;
      const koko = await orders.findOne({
        where: { order_number: order_number },
      });
      if (koko == null) tmp = 10;
    }
  };
  await tko();
  orders
    .findOne({
      where: {
        user_id: {
          [Op.eq]: user_id,
        },
        status: {
          [Op.eq]: null,
        },
      },
    })
    .then((order) => {
      if (!order) {
        // create new order
        orders
          .create({
            // insert order to db
            order_number: order_number,
            user_id: user_id,
            total: price * quantity,
          })
          .then((ord) => {
            order_details
              .create({
                // insert to order_detail
                product_id: product_id,
                order_id: ord.id,
                price: price,
                quantity: quantity,
                total: quantity * price,
              })
              .then((result) => {
                res.status(200).send("create new order and add to db");
              })
              .catch((err) => console.log(err));
          })
          .catch((err) => console.log(err));
      } else {
        // update product if exists
        order_details
          .findOne({
            where: {
              order_id: {
                [Op.eq]: order.id,
              },
              product_id: {
                [Op.eq]: product_id,
              },
            },
          })
          .then((dt) => {
            if (!dt) {
              order_details
                .create({
                  // insert to order_detail
                  product_id: product_id,
                  order_id: order.id,
                  price: price,
                  quantity: quantity,
                  total: quantity * price,
                })
                .then((result) => {
                  order.total = parseInt(order.total) + price * quantity;
                  order.save();
                  res.status(200).send("add product to orderdetail");
                })
                .catch((err) => console.log(err));
            } else {
              // update quantity of product in order_detail
              dt.quantity = parseInt(dt.quantity) + parseInt(quantity);
              dt.total = dt.quantity * price;
              dt.save();

              order.total = parseInt(order.total) + price * quantity;
              order.save();
              res.status(200).send("update quantity product to orderdetail");
            }
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};

exports.getSearch = async (req, res, next) => {
  var regex = req.query["term"];
  products
    .findAll({
      where: {
        product_slug: {
          [Op.like]: "%" + regex + "%",
        },
      },
      limit: 5,
    })
    .then((pros) => {
      var result = [];
      pros.forEach((pro) => {
        let obj = {
          id: pro.id,
          label: pro.product_name,
        };
        result.push(obj);
      });
      res.jsonp(result);
    })
    .catch((err) => console.log(err));
};
