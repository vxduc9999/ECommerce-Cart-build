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

// show all data
exports.getHomePage = async (req, res, next) => {
  products
    .findAll(
      // new products
      {
        limit: 10,
        order: [["updated_at", "DESC"]],
      }
    )
    .then((productsNew) => {
      // best love products
      products
        .findAll({
          attributes: {
            include: [
              [
                sequelize.literal(
                  `(
                            SELECT COUNT(*) FROM "wishlists" 
                            WHERE 
                                "wishlists"."product_id" = "products"."id"
                        )`
                ),
                "totalProduct",
              ],
            ],
          },
          limit: 10,
          order: [[sequelize.literal('"totalProduct"'), "DESC"]],
        })
        .then((wishlistsProducts) => {
          // best selling products
          products
            .findAll({
              attributes: {
                include: [
                  [
                    sequelize.literal(
                      `(
                                    SELECT COUNT(*) FROM "order_details" 
                                    WHERE 
                                        "order_details"."product_id" = "products"."id"
                                )`
                    ),
                    "totalProduct",
                  ],
                ],
              },
              limit: 10,
              order: [[sequelize.literal('"totalProduct"'), "DESC"]],
            })
            .then((bestSellingProducts) => {
              const data = {
                newProducts: productsNew,
                bestLoveProducts: wishlistsProducts,
                bestSellingProducts: bestSellingProducts,
                isAuthenticated: req.session.isLoggedIn,
              };
              res.send(data);
              //   res.status(200).render("homePage", {
              //     data: data,
              //     isAuthenticated: req.session.isLoggedIn,
              //   });
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
};

exports.getDetailProduct = (req, res, next) => {
  const user = req.session.user;
  const slug = req.params.slug;
  let perPage = 3; // số lượng sản phẩm xuất hiện trên 1 page
  let page = req.query.p || 1;

  // products
  //   .findOne({
  //     where: {
  //       product_slug: {
  //         [Op.eq]: slug,
  //       },
  //     },
  //     include: [
  //       {
  //         model: images,
  //         limit: 4,
  //       },
  //       {
  //         model: users,
  //         as: "productByComment",
  //         through: {
  //           model: product_reviews,
  //           as: "productByComment",
  //           attributes: ["comment", "rate", "created_at"],
  //         },
  //       },
  //     ],
  //   })
  //   .then((product) => {
  //     //res.json(product);
  //     if (product.productByComment.length === 0) {
  //       return res.status(200).render("products/productDetail", {
  //         product: product,
  //         count: 0,
  //         moment: moment,
  //       });
  //     } else {
  //       product_reviews
  //         .findAndCountAll({
  //           where: {
  //             product_id: {
  //               [Op.eq]: product.id,
  //             },
  //           },
  //           include: [
  //             {
  //               model: users,
  //             },
  //           ],
  //           offset: (page - 1) * perPage,
  //           limit: perPage,
  //           order: [["createdAt", "DESC"]],
  //         })
  //         .then((product_review) => {
  //           //res.json(product_review);
  //           return res.status(200).render("products/productDetail", {
  //             product: product,
  //             count: product_review.count,
  //             product_review: product_review.rows,
  //             moment: moment,
  //             current: page,
  //             pages: Math.ceil(product_review.count / perPage),
  //           });
  //         })
  //         .catch((err) => console.log(err));
  //     }
  //   })
  //   .catch((err) => console.log(err));

  //res.json(page);

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
        //res.json(product);
        res.send(product);
        // return res.status(200).render("products/productDetail", {
        //   product,
        //   moment: moment,
        // });
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
        res.send(product);
        // return res.status(200).render('products/productDetail', {
        //     product
        // });
      })
      .catch((err) => console.log(err));
  }
};

exports.postDetailProduct = async (req, res, next) => {
  const product_id = req.body.product_id;
  const price = req.body.price;
  const quantity = req.body.quantity;
  const userSession = req.session.user;
  const order = await orders
    .findOne({
      where: {
        user_id: {
          [Op.eq]: userSession.id,
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
            order_number: 1234,
            user_id: userSession.id,
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
                res.redirect("/cart");
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
                  res.redirect("/cart");
                })
                .catch((err) => console.log(err));
            } else {
              // update quantity of product in order_detail
              dt.quantity = parseInt(dt.quantity) + parseInt(quantity);
              dt.total = dt.quantity * price;
              dt.save();

              order.total = parseInt(order.total) + price * quantity;
              order.save();
              res.redirect("/cart");
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
